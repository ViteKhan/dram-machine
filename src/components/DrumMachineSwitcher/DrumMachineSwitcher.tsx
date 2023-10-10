import { Icon } from '@chakra-ui/icons';
import { Flex, Text } from '@chakra-ui/react';
import { FaPowerOff } from 'react-icons/fa';

export const DrumMachineSwitcher = () => {
  const flag = true;

  return (
    <Flex flexDirection={'column'} alignItems={'center'} gap={'5px'}>
      <Text>Power</Text>
      <Icon
        as={FaPowerOff}
        color={flag ? 'green' : ''}
        _hover={{
          color: flag ? 'red' : 'green',
        }}
      />
    </Flex>
  );
};