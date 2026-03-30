import React from 'react'

const User = (props) => {
    console.log(props);
  return (
    <div style={{color:'white'}}>
      Anish, {props.name}
    </div>
  )
}

export default User
