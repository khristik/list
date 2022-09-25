import React, { useEffect, useState } from 'react';
import './listItem.css';

const ListItem = ({ item, deleteItem, toggleComplete }) => {
  const [task, setTask] = useState('');

  useEffect(() => {
    setTask(item.task);
  }, [task]);

  const handleClick = id => deleteItem(id);

  const toggleCompleted = id => toggleComplete(id);

  return (
    <li className="listSection">
      <p
        onClick={() => toggleCompleted(item.id)}
        className={item.completed ? 'listItemText completed' : 'listItemText'}
      >
        {item.task}
      </p>

      <button className={'deleteButton'} onClick={() => handleClick(item.id)}>
        <p>Delete</p>
      </button>
    </li>
  );
};

export default ListItem;
