import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import { List, Paper } from '@mui/material';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks);

  return (
    <Paper elevation={3} sx={{ padding: 2 }}>
      <List>
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))}
      </List>
    </Paper>
  );
};

export default TaskList;
