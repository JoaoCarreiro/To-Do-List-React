import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = props => {

  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  //console.log(toDoList);

  const addToDo = () => {
    if (inputValue !== '') {
      if (toDoList.includes(inputValue) === false) {
        setToDoList(toDoList.concat(inputValue));
        setInputValue('');
      };
      
    }
  };
  
  const removeToDo = (indexToRemove) => {
    console.log(indexToRemove);
    setToDoList(toDoList.filter((toDo, index) =>
      index !== indexToRemove));
  };


  const listToDoList = toDoList.map((toDo, index) =>
    <p>
      {toDo}
      {' '}
      <button onClick={() => removeToDo(index)}>X</button>
    </p>);

  //console.log(listToDoList);
  return (
    <div className="App">
      <div>
        To-do List
      </div>
      <input
        type="text"
        name="name"
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        required
      />
      <AddButton onClick={addToDo} />
      <div>{listToDoList}</div>
    </div>
  );
};

const AddButton = props => {
  return <button
    onClick={props.onClick}>Adicionar Item
  </button>
};

export default App;
