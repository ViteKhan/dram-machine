import { Icon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { FaPowerOff } from 'react-icons/fa';
import { useDrumMachineContext } from '../../hooks';

export const DrumMachineSwitcher = () => {
  const { isOn, toggleIsOn } = useDrumMachineContext();

  return (
    <Flex flexDirection={'column'} alignItems={'center'} gap={'5px'}>
      <Text>Power</Text>
      <Icon
        as={FaPowerOff}
        color={isOn ? 'green' : ''}
        _hover={{
          opacity: 0.5,
        }}
        onClick={toggleIsOn}
      />
    </Flex>
  );
};