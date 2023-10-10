import { Badge, chakra, Flex } from '@chakra-ui/react';
import { useIsLightMode } from '../../hooks';
import { ThemeToggle } from '../ThemeToggle';

const AppBarContainer = chakra(Flex, {
  baseStyle: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    right: '0px',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 20px',
    borderBottom: '1px solid',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
  },
});

export const AppBar = () => {
  const isLightMode = useIsLightMode();
  const borderColor = isLightMode ? 'borderColorLight' : 'borderColorDark';

  return (
    <AppBarContainer
      bg={isLightMode ? 'appBarLightBg' : 'appBarDarkBg'}
      borderColor={borderColor}
    >
      <Badge
        variant={'title'}
        borderColor={borderColor}
      >
        Drum machine
      </Badge>
      <ThemeToggle/>
    </AppBarContainer>
  );
};