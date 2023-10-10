import { useColorMode } from '@chakra-ui/react';
import { useContext } from 'react';
import { DARK_COLORS, LIGHT_COLORS } from '../constants';
import { DrumMachineContext } from '../providers';
import { THEME } from '../types';

export const useIsLightMode = () => {
  const { colorMode } = useColorMode();

  return colorMode === THEME.LIGHT;
};

export const useGetColorsByMode = () => {
  const isLightMode = useIsLightMode();
  return isLightMode ? LIGHT_COLORS : DARK_COLORS;
};

export const useDrumMachineContext = () => useContext(DrumMachineContext);

export const usePadStyles = (padColor: string, isPlaying: boolean) => {
  const { isOn } = useDrumMachineContext();
  const { color } = useGetColorsByMode();

  const activeStyles = {
    transform: 'scale(0.95)',
    boxShadow: `1px 1px 4px 4px ${padColor}, -1px -1px 4px 4px ${padColor}`,
    background: padColor,
  };

  const inactiveStyles = {
    transform: 'scale(1)',
    boxShadow: 'none',
  };

  const isOffStyles = {
    opacity: 0.5,
    borderColor: color,
  };

  return !isOn
    ? isOffStyles
    : isPlaying ? activeStyles : inactiveStyles;
};