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
    letter: 'q',
    title: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
    color: '#ffea19'
  },
  {
    letter: 'w',
    title: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
    color: '#ffa420',
  },
  {
    letter: 'e',
    title: 'Kick-and-Hat',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
    color: '#54E346',
  },
  {
    letter: 'a',
    title: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3',
    color: '#7df9ff',
  },
  {
    letter: 's',
    title: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
    color: '#04d9ff',
  },
  {
    letter: 'd',
    title: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3',
    color: '#5555ff',
  },
  {
    letter: 'z',
    title: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3',
    color: '#ff073a',
  },
  {
    letter: 'x',
    title: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
    color: '#fe59c2',
  },
  {
    letter: 'c',
    title: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3',
    color: '#bc13fe',
  },
];

export const VOLUME_LABEL_STYLES = {
  mt: '2.5',
  ml: '-0.5',
  fontSize: 'sm'  ,
};