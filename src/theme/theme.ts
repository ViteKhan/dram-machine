import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode('#DBE0E9', '#171717')(props),
      color: mode('#001931', '#FFF')(props),
    },
  }),
};

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
  },
  styles,
});