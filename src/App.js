import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React, { useState } from 'react'
import Header from './Components/Header';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

const App = () => {
  const [input, setInput]= useState('');
  const [list, setList]=useState([])

  //set a user input value
  const updateInput=(value)=>{
    setInput(value);
  }

  //add item if input is not empty
 const addItem=()=>{
   if (input !==''){
    const newItem= {id:Math.random(),value: input}
    setList([...list,newItem])
    setInput('')
   }
 }

  //delete item from list
  const deleteItem=(id)=>{
    const updatedList= list.filter((item)=> item.id !== id)
    setList(updatedList)
  }
 
  //Edit item in list
  const editItem=(index)=>{
    const updatedTodos=[...list];
    const editedtodo= prompt("Edit the todo:",updatedTodos[index].value);
    updatedTodos[index].value=editedtodo;
    setList(updatedTodos);
  }




  return (
    <div className='container'>
        <Header/>

        <hr/>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            {/* Todo Input*/ }
            <TodoInput input={input}  updateInput={updateInput} addItem={addItem}/>
          </div>
          <div className='col-md-7'>
            {/* Todo List */}
            <TodoList list={list} deleteItem={deleteItem} editItem={editItem}/>
          </div>
        </div>

    </div>
  )
}

export default App