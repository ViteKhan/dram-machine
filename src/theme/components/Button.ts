import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const colorMode = defineStyle({
  border: '1px solid',
  borderRadius: '4px',
  transition: 'all 0.2s ease-in-out',
  _hover: {
    color: 'orange',
    borderColor: 'orange',
  },
});

export const Button = defineStyleConfig({
  variants: { colorMode },
});