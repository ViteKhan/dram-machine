import { useColorMode } from '@chakra-ui/react';
import { DARK_COLORS, LIGHT_COLORS } from '../constants';
import { THEME } from '../types';

export const useIsLightMode = () => {
  const { colorMode } = useColorMode();

  return colorMode === THEME.LIGHT;
};

export const useGetColorsByMode = () => {
  const isLightMode = useIsLightMode();
  return isLightMode ? LIGHT_COLORS : DARK_COLORS;
};

export const useGetInvertColorsByMode = () => {
  const isLightMode = useIsLightMode();
  return isLightMode ? DARK_COLORS : LIGHT_COLORS;
};