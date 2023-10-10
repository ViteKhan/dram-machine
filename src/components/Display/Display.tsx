import { chakra, Flex, Text } from '@chakra-ui/react';
import { useDrumMachineContext } from '../../hooks';
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
  const { displayMessage } = useDrumMachineContext();

  return (
    <Flex flexDirection={'column'} gap={'10px'} w={'220px'}>
      <Text>Drum Machine</Text>
      <DisplayInfo>{displayMessage}</DisplayInfo>
      <Flex flexDirection={'column'} gap={'3px'}>
        <Text>Volume</Text>
        <Volume/>
      </Flex>
    </Flex>
  );
};