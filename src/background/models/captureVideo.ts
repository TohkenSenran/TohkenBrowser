import { browser, Tabs } from 'webextension-polyfill-ts';

// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// The window (tab) opened and navigated to receiver.html.
let receiver: any = null;

// Open a new window of receiver.html when browser action icon is clicked.
const playCapturedStream = (stream: any): void => {
  if (!stream) {
    console.error(`Error starting tab capture: ${chrome.runtime.lastError?.message || 'UNKNOWN'}`);
    return;
  }
  if (receiver != null) {
    receiver.close();
  }
  receiver = window.open('receiver.html');
  receiver.currentStream = stream;
};

const recordCapturedStream = (stream: any): void => {
  console.log('typeof stream ', typeof stream);
  if (!stream) {
    console.error(`Error starting tab capture: ${chrome.runtime.lastError?.message || 'UNKNOWN'}`);
    return;
  }
  const mediaRecorder = new MediaRecorder(stream);
  mediaRecorder.start();
  console.log('mediaRecordState ', mediaRecorder.state);
  console.log('recorder started');
  setTimeout(() => {
    mediaRecorder.stop();
    console.log('mediaRecordState ', mediaRecorder.state);
    console.log('recorder stopped');
  }, 10000);
};

const testCapture = (): void => {
  console.log('Test with method capture().');
  chrome.tabCapture.capture(
    {
      video: true,
      audio: true,
      videoConstraints: {
        mandatory: {
          // If minWidth/Height have the same aspect ratio (e.g., 16:9) as
          // maxWidth/Height, the implementation will letterbox/pillarbox as
          // needed. Otherwise, set minWidth/Height to 0 to allow output video
          // to be of any arbitrary size.
          maxFrameRate: 60, // Note: Frame rate is variable (0 <= x <= 60).
        },
      },
    },
    (stream) => {
      playCapturedStream(stream);
    },
  );
};

const testGetMediaStreamId = async (): Promise<void> => {
  const tabs: Tabs.Tab[] = await browser.tabs.query({});
  console.log('tab %o', tabs);
  console.log('Test with method getMediaStreamId().');
  const tabCapture = chrome.tabCapture as any;
  tabCapture.getMediaStreamId((streamId: any) => {
    if (typeof streamId !== 'string') {
      console.error(
        `Failed to get media stream id: ${chrome.runtime.lastError?.message || 'UNKNOWN'}`,
      );
      return;
    }
    // console.log(`stream id: ${streamId}`);
    const customNavigator = navigator as any;
    customNavigator.getUserMedia(
      {
        audio: false,
        video: {
          mandatory: {
            chromeMediaSource: 'tab', // The media source must be 'tab' here.
            chromeMediaSourceId: streamId,
            cursor: 'never',
          },
        },
        cursor: 'never',
      },
      (stream: any) => {
        playCapturedStream(stream);
      },
      (error: any) => {
        console.error(error);
      },
    );
  });
};

const testGetDisplayMedia = async (): Promise<void> => {
  console.log('Test with method getDisplayMedia().');
  const constraints = {
    video: {
      cursor: 'never',
      displaySurface: 'window',
    },
  };
  const mediaDevices = navigator.mediaDevices as any;
  const stream = await mediaDevices.getDisplayMedia({ video: false, audio: false });
  if (stream) {
    // playCapturedStream(stream);
    recordCapturedStream(stream);
  }
};

const testDesktopCapture = (): void => {
  console.log('Test with method desktopCapture().');
  chrome.desktopCapture.chooseDesktopMedia(['screen', 'window', 'tab', 'audio'], (streamId) => {
    const customNavigator = navigator as any;
    customNavigator.getUserMedia(
      {
        audio: {
          mandatory: {
            chromeMediaSource: 'system',
            chromeMediaSourceId: streamId,
          },
        },
        video: {
          mandatory: {
            chromeMediaSource: 'desktop',
            chromeMediaSourceId: streamId,
          },
        },
      },
      (stream: any) => {
        playCapturedStream(stream);
        // recordCapturedStream(stream);
      },
      (error: any) => {
        console.error(error);
      },
    );
  });
};

export const captureVideo = (): void => {
  // console.log('in captureVideo');
  // testCapture();
  // testGetMediaStreamId();
  // testGetDisplayMedia();
  testDesktopCapture();
};

export const tabCaptureVideo = (): void => {
  // console.log('in captureVideo');
  testCapture();
  // testGetMediaStreamId();
  // testGetDisplayMedia();
  // testDesktopCapture();
};
