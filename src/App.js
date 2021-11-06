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
      <input type='checkbox'/>
    </p>);


  // TRANSFORMAR EM FORM E  METER O ONCLICK EM ONSUBMIT, DAR PREVENTDEFAULT PARA NAO FAZER RESFRESH
  return (
    <div className="App">
      <div>
        To-do List
      </div>
      <div>
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <AddButton onClick={addToDo} />
      </div>
      <div>{listToDoList}</div>
    </div>
  );
};
/* PASSAR ISTO PARA FORM SEI LA OU O CARALHO
const Form = props => {
  
  function handleSubmit(e) {
    e.preventDefault();
  };

  return (<div>
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        name="name"
        value={props.inputValue}
        onChange={event => props.setInputValue(event.target.value)}
      />
      <AddButton onClick={props.addToDo} />
    </form>

  </div>);
};*/

const AddButton = props => {
  return <button
    onClick={props.onClick} addToDo={props.addToDo}>Adicionar Item
  </button>
};

export default App;
