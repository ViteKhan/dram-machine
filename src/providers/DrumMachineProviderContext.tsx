import { createContext, FC, ReactNode, useState } from 'react';

interface IDrumMachineContext {
  isOn: boolean;
  toggleIsOn: () => void;
  displayMessage: string;
  volumeInput: number;
  volume: number;
  onChangeDisplayMessage: (message: string) => void;
  onChangeVolume: (value: number) => void;
}

export const DrumMachineContext = createContext<IDrumMachineContext>(null!);

interface DrumMachineContextProviderProps {
  children: ReactNode;
}

export const DrumMachineContextProvider: FC<DrumMachineContextProviderProps> = ({ children }) => {
  const [isOn, setIsOne] = useState<boolean>(true);
  const [displayMessage, setDisplayMessage] = useState<string>('');

  const [volumeInput, setVolumeInput] = useState(50);
  const [volume, setVolume] = useState(0.5);

  const onChangeDisplayMessage = (message: string) => {
    setDisplayMessage(message);
  };

  const toggleIsOn = () => {
    const message = !isOn ? 'Hello!' : '';
    setIsOne(prev => !prev);
    onChangeDisplayMessage(message);
  };

  const onChangeVolume = (value: number) => {
    const newVolume = value / 100;
    const message = `Volume: ${value}`;
    setVolumeInput(value);
    setVolume(newVolume);
    onChangeDisplayMessage(message);
  };

  return (
    <DrumMachineContext.Provider
      value={{
        isOn,
        toggleIsOn,
        displayMessage,
        onChangeDisplayMessage,
        volume,
        onChangeVolume,
        volumeInput,
      }}
    >
      {children}
    </DrumMachineContext.Provider>
  );
};