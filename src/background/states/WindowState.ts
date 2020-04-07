export interface WindowState {
  position: { x: number; y: number };
  size: { height: number; width: number };
}

export const initialWindowState: WindowState = {
  position: { x: 100, y: 100 },
  size: { height: 600, width: 800 },
};
