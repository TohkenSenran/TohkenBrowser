let receiver: any = null;

const playCapturedStream = (stream: MediaStream | null): void => {
  console.log('in playCaptureStream');
  if (!stream) {
    console.error(`Error starting tab capture: ${chrome.runtime.lastError?.message || 'UNKNOWN'}`);
    return;
  }
  console.log('creating player');
  if (receiver !== null) {
    receiver.close();
  }
  receiver = window.open('html/receiver.html') as any;
  if (receiver !== null) {
    receiver.currentStream = stream;
  }
};

export const captureVideo = (): void => {
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
      console.log('capturing');
      playCapturedStream(stream);
    },
  );
};

// Copyright 2016 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// The window (tab) opened and navigated to receiver.html.

// Open a new window of receiver.html when browser action icon is clicked.
