export const removeBrowserId: () => Promise<boolean> = () =>
    new Promise((resolve: (value: boolean) => void) => {
        chrome.storage.local.remove('browserId', () => {
            resolve(true);
        });
    });
