import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import './ToDo.css';

interface Task {
  text: string;
  completed: boolean;
}

const ToDo: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
      event.preventDefault();
    }
  };

  const handleDelete = (index: number) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleCompleted = (index: number) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="ToDo">
      <div className="TopBar">
        <textarea
          type="text"
          value={task}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Введите задачу"
        />
      </div>
      <div className="Task">
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li
              key={index}
              style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
            >
              {task.text}{' '}
              <button onClick={() => handleToggleCompleted(index)}>
                {task.completed ? 'Отменить выполнение' : 'Выполнено'}
              </button>
              <button onClick={() => handleDelete(index)}>Удалить</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDo;
