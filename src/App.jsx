import React, { useState } from 'react'
import './App.css'
import Button from './assets/components/Button'
import brightLogo from './assets/blgo.png'
import Navbar from './assets/components/Navbar'

const App = () => {
  let [Value,setValue] = useState('')
  let [Items,setItems] = useState([])
  
  function taskAdd(){
    console.log(Value)
    // const todoObj = {
    //   Value,
    //   // id,
    //   isEdit:false

    // }
    // console.log('todo Object',todoObj)
    !Value ? alert('Enter a value') : Items.push(Value) 
    // Items.push(Value)
    setItems([...Items])
    setValue('')
    // setItems([...Items])
  } 
  function deleteAll(){
    setItems([])
  } 
  function deleteTodos(index){
    Items.splice(index,1)
    setItems([...Items])
  }
  function EditTodo(index){
    console.log('edit')
    var editValue = prompt('Enter a task',Items[index])
    Items[index]=editValue
    setItems([...Items])

  }
  function light(){
    console.log('light')
  }
  return (
    <div>
      <Navbar logoSrc ={brightLogo} onClick={light}/>
      <div className="second">
        <div className='flex align-middle border  w-[70%] mx-[auto] mt-8'>
          <input type="text" value={Value}  onChange={(e)=>{
            // console.log(e.target.value)
            setValue(e.target.value)
            // settodoValue(e.target.value)
            
          }} className='border-green-950 w-full h-[50px]' placeholder='Enter Your Task'  />
        </div>
        <div className='flex mx-[auto] w-[25%] mt-5 justify-evenly'>
          <Button val='Add Task' onClick={taskAdd} />
          <Button val ='Delete All'onClick={ deleteAll} />
        </div>
      </div>
      <div className="third w-[70%] mx-auto mt-5">
        <div>
          <ul className='mt-5'>
            {Items.map((value,index)=>{
              return (
                <li key={index} className='border font-bold text-lg flex justify-between mt-4' >
                 {value}
                <div>
                  <Button val = 'Edit' onClick={()=>EditTodo(index)}/>
                  <Button val ='Delete' onClick={()=> deleteTodos(index)}/>
                </div>
                </li>
              )
            })}
            {/* <li className='border font-bold text-lg flex justify-between' >
              Hello world {Value}
              <div>
                <Button val = 'Edit'/>
                <Button val ='Delete'/>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
