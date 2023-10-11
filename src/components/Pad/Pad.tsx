import { Button, Kbd } from '@chakra-ui/react';
import { FC, useState } from 'react';
import { useDrumMachineContext, useListeners, usePadStyles } from '../../hooks';
import { Pad as PadModel } from '../../types';

interface PadProps {
  pad: PadModel;
}

export const Pad: FC<PadProps> = ({ pad }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const { onChangeDisplayMessage, isPowered, volume } = useDrumMachineContext();
  const styles = usePadStyles(pad.color, isPlaying);

  const onPlay = () => {
    if (!isPowered) return;

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

  useListeners(pad.letter, isPowered, onPlay);
  console.log(window);
  return (
    <Button
      variant={'pad'}
      border={'2px solid'}
      borderColor={pad.color}
      {...styles}
      onClick={onPlay}
      onTouchStart={onPlay}
    >
      <audio id={pad.letter} src={pad.url}/>
      <Kbd>{pad.letter.toUpperCase()}</Kbd>
    </Button>
  );
};