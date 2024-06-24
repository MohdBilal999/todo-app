import { Provider } from 'react-redux';
import store from './redux/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="sm">
        <Typography variant="h3" component="h1" gutterBottom sx={{ textAlign: 'center', mt: 4 }}>
          To-Do List
        </Typography>
        <TaskInput />
        <TaskList />
      </Container>
    </Provider>
  );
}

export default App;
