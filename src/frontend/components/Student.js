import React from 'react'

const Student = ({registered}) => {
  if(!registered) {
    return (
      <div>Unauthorized Access</div>
    );
  }
  
  return (
    <div>Student</div>
  );
}

export default Student