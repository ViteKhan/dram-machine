import { useColorMode } from '@chakra-ui/react';
import { useContext, useEffect, useMemo } from 'react';
import { DARK_COLORS, LIGHT_COLORS } from '../constants';
import { DrumMachineContext } from '../providers';
import { THEME } from '../types';

export const useIsLightMode = () => {
  const { colorMode } = useColorMode();

  return colorMode === THEME.LIGHT;
};

export const useGetColorsByMode = () => {
  const isLightMode = useIsLightMode();
  return isLightMode ? LIGHT_COLORS : DARK_COLORS;
};

export const useDrumMachineContext = () => useContext(DrumMachineContext);

export const usePadStyles = (padColor: string, isPlaying: boolean) => {
  const { isPowered } = useDrumMachineContext();
  const { color } = useGetColorsByMode();

  const activeStyles = {
    transform: 'scale(0.95)',
    boxShadow: `1px 1px 4px 4px ${padColor}, -1px -1px 4px 4px ${padColor}`,
    background: padColor,
  };

  const inactiveStyles = {
    transform: 'scale(1)',
    boxShadow: 'none',
  };

  const isOffStyles = {
    opacity: 0.5,
    borderColor: color,
  };

  const styles = useMemo(() => {
    return !isPowered
      ? isOffStyles
      : isPlaying ? activeStyles : inactiveStyles;
  }, [isPowered, isPlaying]);

  return styles;
};

export const useListeners = (letter: string, isPowered: boolean, onPlay: () => void) => {
  useEffect(() => {
    const handleKeyPress = (e: { key: string }) => {
      if (isPowered && e.key === letter) {
        onPlay();
      }
    };

    if (isPowered) {
      document.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      if (isPowered) {
        document.removeEventListener('keydown', handleKeyPress);
      }
    };
  }, [isPowered, onPlay]);
};