import { Box } from '@chakra-ui/react';
import { DrumMachine } from './components/DrumMachine';
import { ThemeToggle } from './components/ThemeToggle';

function App() {
  return (
    <Box minHeight="100vh">
      <DrumMachine/>
      <ThemeToggle/>
    </Box>
  );
}

export default App;
