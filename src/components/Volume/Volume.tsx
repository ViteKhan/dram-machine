import { Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack } from '@chakra-ui/react';
import { FiVolumeX } from 'react-icons/fi';
import { FiVolume2 } from 'react-icons/fi';
import { VOLUME_LABEL_STYLES } from '../../constants';
import { useDrumMachineContext } from '../../hooks';

export const Volume = () => {
  const { volumeInput, onChangeVolume } = useDrumMachineContext();

  return (
    <Slider m={'0 0 15px 1px'} value={volumeInput} onChange={onChangeVolume} min={0} max={100}>
      <SliderMark value={0} {...VOLUME_LABEL_STYLES}>
        <FiVolumeX/>
      </SliderMark>
      <SliderMark value={100} {...VOLUME_LABEL_STYLES}>
        <FiVolume2/>
      </SliderMark>
      <SliderTrack>
        <SliderFilledTrack/>
      </SliderTrack>
      <SliderThumb boxSize={4}/>
    </Slider>
  );
};