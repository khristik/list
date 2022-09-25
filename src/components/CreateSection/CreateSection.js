import React, { useState } from 'react';
import { v1 as uuid } from 'uuid';
import './createSection.css';

const CreateSection = ({ addItem }) => {
  const [inputValue, setInputValue] = useState('');
  const isEmpty = inputValue.trim().length === 0;

  const handleChange = ({ target }) => setInputValue(target.value);

  const handleSubmit = () => {
    const newItem = { id: uuid(), task: inputValue, completed: false };
    addItem(newItem);
    setInputValue('');
  };

  return (
    <div className={'createSection'}>
      <input value={inputValue} onChange={handleChange} type='text' placeholder='New item' />
      <button onClick={handleSubmit} disabled={isEmpty} className={isEmpty ? 'createButton disabled' : 'createButton'}>
        Add Item
      </button>
    </div>
  );
};

export default CreateSection;
