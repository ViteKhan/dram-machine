import { chakra, Flex } from '@chakra-ui/react';

export const ContentLayout = chakra(Flex, {
  baseStyle: {
    marginTop: '60px',
    padding: '20px',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});