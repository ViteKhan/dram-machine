export enum THEME {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface Pad {
  id: string;
  letter: string;
  keycode: number;
  url: string;
  color: string;
}