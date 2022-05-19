import { Container } from '@mui/material';
import './App.css';
import Epoch from './components/Epoch';

function App() {
  return (
    <div className='App'>
      <Container maxWidth='xl'>
        <Epoch />
      </Container>
    </div>
  );
}

export default App;
