import { chakra, Flex, Text } from '@chakra-ui/react';
import { Volume } from '../Volume';

const DisplayInfo = chakra(Flex, {
  baseStyle: {
    height: '40px',
    justifyContent: 'center',
    padding: '5px',
    fontSize: '20px',
    border: '1px solid',
    borderRadius: '4px',
    background: 'borderColorDark',
    color: 'darkBg',
  },
});

export const Display = () => {
  return (
    <Flex flexDirection={'column'} gap={'10px'} w={'220px'}>
      <Text>Drum Machine</Text>
      <DisplayInfo>Drum Machine</DisplayInfo>
      <Flex flexDirection={'column'} gap={'3px'}>
        <Text>Volume</Text>
        <Volume/>
      </Flex>
    </Flex>
  );
};