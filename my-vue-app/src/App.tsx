import { useState } from 'react'
import './App.css'

function ToDo() {

  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setTask(event.target.value);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && task.trim() !== '') {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
      event.preventDefault();
    }
  };

  const handleDelete = (index) => {
      const updatedTasks = tasks.filter((_, i) => i !==index);
      setTasks(updatedTasks);
  }

  const handleToggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };
  
  return (
    <>
      <div className='ToDo'>
        <div className='TopBar'>
        <textarea value={task}
        onChange={handleChange}
        onKeyDown={handleKeyDown}/>
        </div>
        <div className='Task'>
        <ul className='hr'>
        {tasks.map((task, index) => (
          <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
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
    </>
  )
}

export default ToDo