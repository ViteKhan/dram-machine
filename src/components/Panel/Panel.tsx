import { chakra, Flex } from '@chakra-ui/react';
import { useGetColorsByMode } from '../../hooks';
import { Display } from '../Display';
import { DrumMachineSwitcher } from '../DrumMachineSwitcher';

const PanelContainer = chakra(Flex, {
  baseStyle: {
    gap: '20px',
    padding: '20px',
    borderRadius: '10px 10px 0 0',
    border: '1px solid',
  },
});

export const Panel = () => {
  const { borderColor, appBarBg } = useGetColorsByMode();

  return (
    <PanelContainer borderColor={borderColor} bg={appBarBg}>
      <Flex justifyContent={'space-between'} flex={1}>
        <Display/>
        <DrumMachineSwitcher/>
      </Flex>
    </PanelContainer>
  );
};