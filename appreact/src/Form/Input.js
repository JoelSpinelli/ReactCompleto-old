import React from 'react';

const Input = ({id, label, onChange, ...props}) => {
  return (
    <>
      <label id={id} htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        name={id}
        onChange={onChange}
        {...props}
      />
    </>
  )
}

export default Input;