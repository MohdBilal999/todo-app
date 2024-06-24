import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/tasksSlice';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      dispatch(addTask(task));
      setTask('');
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <TextField
        variant="outlined"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary" sx={{ ml: 2 }}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
