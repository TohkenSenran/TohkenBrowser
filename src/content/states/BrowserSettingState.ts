export enum windowMode {
    SEN = 'SEN',
    SHOU = 'SHOU',
    HYOU = 'HYOU',
}

export type AlertMessage = {
    title: string | null;
    text: string | null;
};

export type BrowserSettingState = {
    mode: windowMode;
    mute: boolean;
    scale: number;
    devConnect: boolean;
    alertMessage: AlertMessage;
    date: number;
};

export const setBrowserSetting =
    (
        scale: number = 0.75,
        mode: windowMode = windowMode.SHOU,
        mute: boolean = false,
        devConnect: boolean = false,
        alertMessage: AlertMessage = {
            title: null,
            text: null,
        },
        date: number = Date.now(),
    ): BrowserSettingState => (
            {
                mode,
                mute,
                scale,
                devConnect,
                alertMessage,
                date,
            }
        );

export const browserSettingInitialState = setBrowserSetting();
