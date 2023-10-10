import { Flex } from '@chakra-ui/react';
import { AppBar } from './components/AppBar';
import { ContentLayout } from './components/ContentLayout';
import { DrumMachine } from './components/DrumMachine';

function App() {
  return (
    <Flex flexDirection={'column'} h={'100vh'}>
      <AppBar/>
      <ContentLayout>
        <DrumMachine/>
      </ContentLayout>
    </Flex>
  );
}

export default App;
