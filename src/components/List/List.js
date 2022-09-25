import React from 'react';
import { v1 as uuid } from 'uuid';
import ListItem from '../ListItem/ListItem';
import Title from "../Title/Title";
import CreateSection from '../CreateSection/CreateSection';
import { useListState } from '../../hooks/useTodoState';
import './list.css';

const List = () => {
  const { list, addItem, deleteItem, toggleComplete } = useListState([
    { id: uuid(), task: 'issue 1', completed: false },
    { id: uuid(), task: 'issue 2', completed: true },
  ]);

  return (
    <div className={'list'}>
        <Title title={'List Example'} count={list.length}/>
      <ul>
        {list.map((item) => (
          <ListItem toggleComplete={toggleComplete} deleteItem={deleteItem} key={item.id} item={item} />
        ))}
      </ul>
      <CreateSection addItem={addItem} />
    </div>
  );
};

export default List;
