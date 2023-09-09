import React from 'react'

const Navbar = (props) => {
    let {logoSrc, onClick} = props
  return (
    <div>
        <div className="first flex">
      <div className='w-[90%]'>
      <h1 className='bg-slate-500 h-12 text-center font-bold text-[28px]'>
        Todo App
        
      </h1>
      </div>
      <div className='bg-slate-500 w-[10%]'>
      <img src={logoSrc} onClick={onClick}
        height={'30px'} width={'40px'} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Navbar