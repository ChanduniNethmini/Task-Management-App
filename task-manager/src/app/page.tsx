'use client'
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import TaskCard from '../components/TaskCard';
import { addTask, deleteTask, updateTask } from '../redux/slices/tasksSlice';

const TaskManager: React.FC = () => {
  const { tasks, assignees } = useSelector((state: RootState) => state.tasks);
  const dispatch = useDispatch();

  // You can add more code here to handle add, update, delete task.

  return (
    <div className="p-6">
    <h1 className="text-2xl font-bold mb-4">Task Management</h1>
    <div className="grid grid-cols-3 gap-4">
      <div>
        <h2 className="text-xl font-semibold mb-2">Todo</h2>
        <div className="space-y-4">
          {tasks.filter(task => task.status === 'Todo').map(task => (
            <TaskCard key={task.id} task={task} onClick={() => {/* handle open modal */}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">In Progress</h2>
        <div className="space-y-4">
          {tasks.filter(task => task.status === 'In Progress').map(task => (
            <TaskCard key={task.id} task={task} onClick={() => {/* handle open modal */}} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Completed</h2>
        <div className="space-y-4">
          {tasks.filter(task => task.status === 'Completed').map(task => (
            <TaskCard key={task.id} task={task} onClick={() => {/* handle open modal */}} />
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default TaskManager;
