import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Company from './Company';
import Faculty from './Faculty';
import Login from './Login.js';
import Register from './Register.js';
import Student from './Student';
import Welcome from './Welcome.js';

function App() {
  return (
    // <div className='App'>
    //   <h1>Navbar will come here</h1>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />}>
          <Route path='/register/student' element={<Student registered={false} />} />
          <Route path='/register/faculty' element={<Faculty registered={false} />} />
          <Route path='/register/company' element={<Company registered={false} />} />
        </Route>
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
