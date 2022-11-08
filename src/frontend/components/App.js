import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Company from './Registration/Company';
import Faculty from './Registration/Faculty';
import Login from './Login/Login.js';
import Register from './Registration/Register.js';
import Student from './Registration/Student';
import ApplyInCompany from './Login/Student/ApplyInCompany';
import Welcome from './Welcome.js';

function App() {
  return (
    // <div className='App'> ndnlsdnlf
    //   <h1>Navbar will come here</h1>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />}>
          <Route index element={<Student />} />
          <Route path='student' element={<Student />} />
          <Route path='faculty' element={<Faculty />} />
          <Route path='company' element={<Company />} />
        </Route>
        <Route path='/login' element={<Login />}>
          <Route path='student' element={<ApplyInCompany />}>
            <Route path='faculty' element={<Faculty />} />
            <Route path='company' element={<Company />} />
          </Route>
          <Route path='faculty' element={<Faculty />} />
          <Route path='company' element={<Company />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </div>
  );
}

export default App;
