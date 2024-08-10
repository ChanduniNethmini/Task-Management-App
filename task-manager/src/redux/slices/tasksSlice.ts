import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Assignee {
  id: number;
  name: string;
  profileImage: string;
}

export interface Task {
  id: number;
  name: string;
  priority: 'Low' | 'Medium' | 'High';
  status: 'Todo' | 'In Progress' | 'Completed';
  dueDate: string;
  description?: string;
  assignee: Assignee;
}

interface TasksState {
  tasks: Task[];
  assignees: Assignee[];
}

const initialState: TasksState = {
  tasks: [
    {
      id: 1,
      name: 'Complete Project Report',
      priority: 'High',
      status: 'Todo',
      dueDate: '2024-08-15',
      description: 'Complete the final report for the project.',
      assignee: { id: 1, name: 'John Doe', profileImage: '/images/default-profile.png' },
    },
    {
      id: 2,
      name: 'Design Homepage',
      priority: 'Medium',
      status: 'In Progress',
      dueDate: '2024-08-12',
      description: 'Design the homepage for the new website.',
      assignee: { id: 2, name: 'Jane Smith', profileImage: '/images/default-profile.png' },
    },
    {
      id: 3,
      name: 'Client Meeting',
      priority: 'Low',
      status: 'Completed',
      dueDate: '2024-08-05',
      description: 'Attend the client meeting to discuss the project progress.',
      assignee: { id: 1, name: 'John Doe', profileImage: '/images/default-profile.png' },
    },
  ],
  assignees: [
    { id: 1, name: 'John Doe', profileImage: '/images/default-profile.png' },
    { id: 2, name: 'Jane Smith', profileImage: '/images/default-profile.png' },
  ],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
