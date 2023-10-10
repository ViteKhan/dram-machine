import { Pad } from '../types';

export const DARK_COLORS = {
  background: 'darkBg',
  color: 'darkColor',
  borderColor: 'borderColorDark',
  appBarBg: 'appBarDarkBg',
};

export const LIGHT_COLORS = {
  background: 'lightBg',
  color: 'lightColor',
  borderColor: 'borderColorLight',
  appBarBg: 'appBarLightBg',
};

export const PADS: Pad[] = [
  {
    letter: 'Q',
    keycode: 81,
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    color: '#ffea19'
  },
  {
    letter: 'W',
    keycode: 87,
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    color: '#ffa420',
  },
  {
    letter: 'E',
    keycode: 69,
    id: 'Kick-and-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    color: '#54E346',
  },
  {
    letter: 'A',
    keycode: 65,
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    color: '#7df9ff',
  },
  {
    letter: 'S',
    keycode: 83,
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    color: '#04d9ff',
  },
  {
    letter: 'D',
    keycode: 68,
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    color: '#5555ff',
  },
  {
    letter: 'Z',
    keycode: 90,
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    color: '#ff073a',
  },
  {
    letter: 'X',
    keycode: 88,
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    color: '#fe59c2',
  },
  {
    letter: 'C',
    keycode: 67,
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    color: '#bc13fe',
  },
];