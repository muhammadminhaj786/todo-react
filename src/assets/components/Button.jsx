import React from 'react'

const Button = (props) => {
    let {val} = props
  return (
    <button className='w-[140px] border bg-red-500 h-[40px] rounded' onClick={props.onClick}>{val}</button>
  )
}

export default Button