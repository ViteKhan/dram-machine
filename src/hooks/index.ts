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