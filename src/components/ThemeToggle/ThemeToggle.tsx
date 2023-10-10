import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { useIsLightMode } from '../../hooks';

export const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();
  const isLightMode =  useIsLightMode();

  return (
    <IconButton
      aria-label={'Toggle theme'}
      variant={'colorMode'}
      icon={isLightMode ? <MoonIcon/> : <SunIcon/>}
      onClick={toggleColorMode}
      borderColor={isLightMode ? 'borderColorLight' : 'borderColorDark'}
    />
  );
};