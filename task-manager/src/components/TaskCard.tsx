import React from 'react';
import { Task } from '../redux/slices/tasksSlice';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-bold text-black">{task.name}</h3>
      <p className="text-black">{task.assignee.name}</p>
      <p className="text-black">Priority: {task.priority}</p>
      <p className="text-black">Due: {task.dueDate}</p>
    </div>
  );
};

export default TaskCard;
