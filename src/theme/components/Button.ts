import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const colorMode = defineStyle({
  _hover: {
    color: 'orange',
    borderColor: 'orange',
  },
});

const pad = defineStyle({
  width: '100px',
  height: '100px',
  _hover: {
    opacity: 0.5,
  },
});

export const Button = defineStyleConfig({
  baseStyle: {
    border: '1px solid',
    borderRadius: '4px',
    transition: 'all 0.2s ease-in-out',
  },
  variants: { colorMode, pad },
});