import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login.js';
import Register from './Register.js';
import Welcome from './Welcome.js';

function App() {
  return (
    // <div className='App'>
    //   <h1>Navbar will come here</h1>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    // </div>

  )
}

export default App
