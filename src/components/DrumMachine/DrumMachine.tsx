import { Flex } from '@chakra-ui/react';
import { DrumMachineContextProvider } from '../../providers/DrumMachineProviderContext';
import { Board } from '../Board';
import { Panel } from '../Panel';

export const DrumMachine = () => {
  return (
    <Flex flexDirection={'column'}>
      <DrumMachineContextProvider>
        <Panel/>
        <Board/>
      </DrumMachineContextProvider>
    </Flex>
  );
};
