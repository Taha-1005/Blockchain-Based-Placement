import React from 'react'

const Faculty = ({registered}) => {
  if(!registered) {
    return (
      <div>Unauthorized Access</div>
    );
  }
  
  return (
    <div>Faculty</div>
  )
}

export default Faculty