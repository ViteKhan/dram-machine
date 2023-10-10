import { Button, Kbd } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { useDrumMachineContext, useGetColorsByMode } from '../../hooks';
import { Pad as PadModel } from '../../types';

interface PadProps {
  pad: PadModel;
}

export const Pad: FC<PadProps> = ({ pad }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { onChangeDisplayMessage, isOn, volume } = useDrumMachineContext();
  const { color } = useGetColorsByMode();

  const handleKeyPress = (e) => {
    if (e.keyCode === pad.keycode) {
      onPlay();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const onPlay = () => {
    if (isOn) {
      const sound = document.getElementById(pad.letter) as HTMLAudioElement;
      if (sound) {
        sound.currentTime = 0;
        sound.volume = volume;
        sound.play();
        onChangeDisplayMessage(pad.id);
        setIsPlaying(true);
        setTimeout(() => {
          setIsPlaying(false);
        }, 100);
      }
    }
  };

  const activeStyles = {
    transform: 'scale(0.95)',
    boxShadow: `1px 1px 4px 4px ${pad.color}, -1px -1px 4px 4px ${pad.color}`,
    background: pad.color,
  };

  const inactiveStyles = {
    transform: 'scale(1)',
    boxShadow: 'none',
  };

  const isOffStyles = {
    opacity: 0.5,
    borderColor: color,
  };

  const style = !isOn
    ? isOffStyles
    : isPlaying ? activeStyles : inactiveStyles;

  return (
    <Button
      variant={'pad'}
      border={'2px solid'}
      borderColor={pad.color}
      {...style}
      onClick={onPlay}
      onTouchStart={onPlay}
    >
      <audio id={pad.letter} src={pad.url}/>
      <Kbd>{pad.letter}</Kbd>
    </Button>
  );
};