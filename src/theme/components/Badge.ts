import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const title = defineStyle({
  border: '1px solid',
  borderRadius: '4px',
  padding: '5px 10px',
});

export const Badge = defineStyleConfig({
  variants: { title },
});