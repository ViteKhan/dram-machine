import { Button, Kbd } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { useDrumMachineContext, usePadStyles } from '../../hooks';
import { Pad as PadModel } from '../../types';

interface PadProps {
  pad: PadModel;
}

export const Pad: FC<PadProps> = ({ pad }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { onChangeDisplayMessage, isOn, volume } = useDrumMachineContext();
  const styles = usePadStyles(pad.color, isPlaying);

  const handleKeyPress = (e: { key: string }) => {
    if (e.key === pad.letter && isOn) {
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
    if (!isOn) return;

    const sound = document.getElementById(pad.letter) as HTMLAudioElement;
    if (sound) {
      sound.currentTime = 0;
      sound.volume = volume;
      sound.play();
      onChangeDisplayMessage(pad.title);
      setIsPlaying(true);
      setTimeout(() => {
        setIsPlaying(false);
      }, 100);
    }
  };


  return (
    <Button
      variant={'pad'}
      border={'2px solid'}
      borderColor={pad.color}
      {...styles}
      onClick={onPlay}
    >
      <audio id={pad.letter} src={pad.url}/>
      <Kbd>{pad.letter.toUpperCase()}</Kbd>
    </Button>
  );
};