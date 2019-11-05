export interface BrowserWindow {
    position: { x: number, y: number };
    size: { height: number, width: number };
}

export const setBrowserWindow =
    (
        position: { x: number, y: number } = { x: 100, y: 100 },
        size: { height: number, width: number } = { height: 600, width: 800 },
    ): BrowserWindow => (
            {
                position,
                size,
            }
        );
