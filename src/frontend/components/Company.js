import React from 'react'

const Company = ({registered}) => {
  if(!registered) {
    return (
      <div>Unauthorized Access</div>
    );
  }

  return (
    <div>Company</div>
  )
}

export default Company