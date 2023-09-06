import React, { useState } from 'react'
import './App.css'
import Button from './assets/components/Button'

const App = () => {
  let [Value,setValue] = useState('')
  let [Items,setItems] = useState([])
  
  function taskAdd(){
    console.log(Value)
    !Value ? alert('Enter a value') : Items.push(Value) 

    setItems([...Items])
  }  
  function deleteTodos(){
    setItems([])
  }
  return (
    <div>
      <div className="first">
      <h1 className='bg-slate-500 h-12 text-center font-bold text-[28px]'>
        Todo App
      </h1>
      </div>
      <div className="second">
        <div className='flex align-middle border  w-[70%] mx-[auto] mt-8'>
          <input type="text" onChange={(e)=>{
            // console.log(e.target.value)
            setValue(e.target.value)
          }} className='border-green-950 w-full h-[50px]' placeholder='Enter Your Task'  />
        </div>
        <div className='flex mx-[auto] w-[25%] mt-5 justify-evenly'>
          <Button val='Add Task' onClick={taskAdd} />
          <Button val ='Delete All'onClick={deleteTodos} />
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
                  <Button val = 'Edit'/>
                  <Button val ='Delete'/>
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
