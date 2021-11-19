import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './components/form';
import AddButton from './components/addbutton';

const App = props => {

  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // passar ToDo a objeto para receber o texto (ja recebe) e se esta checked (true ou false)
  // criar objeto e passar o objeto para o concat abaixo

  const addToDo = () => {
    if (inputValue !== '') {
      const newToDo = 
        {text: inputValue,
         done: false};
      setToDoList(newToDo.text);
      setInputValue('');
    }
  };


  const removeToDo = (indexToRemove) => {
    console.log(indexToRemove);
    setToDoList(toDoList.filter((toDo, index) =>
      index !== indexToRemove));
  };


  const listToDoList = toDoList.map((toDo, index) =>
    <p>
      {toDo.text}
      {' '}
      <button onClick={() => removeToDo(index)}>X</button>
      <input type='checkbox' />
    </p>);


  // TRANSFORMAR EM FORM E  METER O ONCLICK EM ONSUBMIT, DAR PREVENTDEFAULT PARA NAO FAZER RESFRESH
  return (
    <div className="App">
      <div>
        To-do List
      </div>
      <Form onSubmit={addToDo}>
        <input
          type="text"
          name="name"
          value={inputValue}
          onChange={event => setInputValue(event.target.value)}
        />
        <AddButton />
      </Form>
      <div>{listToDoList}</div>
    </div>
  );
};





export default App;
