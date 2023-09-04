import React, { useState } from 'react'
import './App.css'
import Button from './assets/components/Button'

const App = () => {
  let [Value,setValue] = useState('')
  function addItem(e){
    console.log(e.target.value)

  }
  function taskAdd(){
    console.log('test')
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
          <input type="text" onChange={addItem} className='border-green-950 w-full h-[50px]' placeholder='Enter Your Task'  />
        </div>
        <div className='flex mx-[auto] w-[25%] mt-5 justify-evenly'>
          <Button val='Add Task' onClick={taskAdd} />
          <Button val ='Delete' />
        </div>
      </div>
    </div>
  )
}

export default App
