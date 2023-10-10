import { useColorMode } from '@chakra-ui/react';
import { THEME } from '../types';

export const useIsLightMode = () => {
  const { colorMode } = useColorMode();

  return colorMode === THEME.LIGHT;
};