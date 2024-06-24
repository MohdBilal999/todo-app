import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleComplete, editTask } from '../redux/tasksSlice';
import { ListItem, IconButton, TextField, Box } from '@mui/material';
import { Delete, Edit, Save } from '@mui/icons-material';

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: newText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListItem sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Box
        sx={{ textDecoration: task.completed ? 'line-through' : 'none', cursor: 'pointer' }}
        onClick={() => dispatch(toggleComplete(task.id))}
      >
        {isEditing ? (
          <TextField
            variant="outlined"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            fullWidth
          />
        ) : (
          task.text
        )}
      </Box>
      <Box>
        <IconButton onClick={() => dispatch(deleteTask(task.id))} color="error">
          <Delete />
        </IconButton>
        <IconButton onClick={handleEdit} color="primary">
          {isEditing ? <Save /> : <Edit />}
        </IconButton>
      </Box>
    </ListItem>
  );
};

export default TaskItem;
