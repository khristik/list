import { useState } from 'react';

export const useListState = (initialValue) => {
  const [list, setList] = useState(initialValue);

  return {
    list,
    addItem: (item) => {
      setList([...list, item]);
    },
    deleteItem: (id) => {
      setList(list.filter((todo) => todo.id !== id));
    },
    toggleComplete: (id) => {
      const updatedList = list.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : { ...todo});
      setList(updatedList);
    },
  };
};