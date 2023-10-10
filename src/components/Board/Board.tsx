import { chakra, Grid, GridItem } from '@chakra-ui/react';
import { PADS } from '../../constants';
import { useGetColorsByMode } from '../../hooks';
import { Pad } from '../Pad';

const BoardContainer = chakra(Grid, {
  baseStyle: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    padding: '20px',
    borderRadius: '0 0 10px 10px',
    border: '1px solid',
  },
});

export const Board = () => {
  const { borderColor, appBarBg } = useGetColorsByMode();

  return (
    <BoardContainer background={appBarBg} borderColor={borderColor}>
      {PADS.map(pad => (
        <GridItem key={pad.id}>
          <Pad pad={pad}/>
        </GridItem>
      ))}
    </BoardContainer>
  );
};