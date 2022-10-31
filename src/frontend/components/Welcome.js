import React from 'react';
import { useNavigate } from "react-router-dom"

const Welcome = () => {
let navigate=useNavigate()
  
    return (
        <div class='App'>
            <h1>Welcome</h1>
            <button onClick={()=>{navigate('/register/student')}}>Sign - in</button>
            <button onClick={()=>{navigate('/login')}}>Sign - up</button>
        </div>
    )
}
export default Welcome;