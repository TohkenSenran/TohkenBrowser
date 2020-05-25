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
      if (stream) {
        console.log('exist streaming');
        stream.getVideoTracks()[0].stop();
      }
    },
  );
};
