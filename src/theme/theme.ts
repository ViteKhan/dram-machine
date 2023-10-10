import { mode } from '@chakra-ui/theme-tools';
import { extendTheme, StyleFunctionProps } from '@chakra-ui/react';
import { THEME } from '../types';
import { colors } from './colors';
import { Badge } from './components/Badge';
import { Button } from './components/Button';

const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode(colors.lightBg, colors.darkBg)(props),
      color: mode(colors.lightColor, colors.darkColor)(props),
    },
  }),
};

export const theme = extendTheme({
  config: {
    initialColorMode: THEME.LIGHT,
  },
  components: {
    Badge,
    Button,
  },
  colors,
  styles,
});