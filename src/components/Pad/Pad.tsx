import { Button, Kbd } from '@chakra-ui/react';
import { FC, useEffect, useState } from 'react';
import { Pad as PadModel } from '../../types';

interface PadProps {
  pad: PadModel;
}

export const Pad: FC<PadProps> = ({ pad }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.keyCode === pad.keycode) {
        // onPlay();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [pad.keycode]);

  const activeStyles = {
    boxShadow: `1px 1px 3px 3px ${pad.color}, -1px -1px 3px 3px ${pad.color}`,
  };

  const onPlay = () => {
  };

  return (
    <Button
      variant={'pad'}
      borderColor={pad.color}
      {...activeStyles}
      onClick={onPlay}
    >
      {/*<audio id={pad.letter} src={pad.url}/>*/}
      <Kbd>{pad.letter}</Kbd>
    </Button>
  );
};