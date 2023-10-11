import { createContext, FC, ReactNode, useState } from 'react';

interface IDrumMachineContext {
  isPowered: boolean;
  toggleIsPowered: () => void;
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
  const [isPowered, setIsPowered] = useState<boolean>(true);
  const [displayMessage, setDisplayMessage] = useState<string>('');
  const [volumeInput, setVolumeInput] = useState(50);
  const [volume, setVolume] = useState(0.5);

  const onChangeDisplayMessage = (message: string) => {
    setDisplayMessage(message);
  };

  const toggleIsPowered = () => {
    const message = !isPowered ? 'Hello!' : '';
    setIsPowered(prev => !prev);
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
        isPowered,
        toggleIsPowered,
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