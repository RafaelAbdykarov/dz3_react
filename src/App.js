import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  return (
      <div>
        <h1>Todo List</h1>
        <input
            type="text"
            placeholder="Введите задачу"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
        />
        <button onClick={addTask}>Добавить</button>
        <ul>
          {tasks.map((task, index) => (
              <li key={index}>
                {task}
              </li>
          ))}
        </ul>
      </div>
  );
}

export default TodoList;