import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Company from './Registration/Company';
import Faculty from './Registration/Faculty';
import Login from './Login/Login.js';
import Register from './Registration/Register.js';
import Student from './Registration/Student';
import ApplyInCompany from './Login/Student/ApplyInCompany';
import Welcome from './Welcome.js';
import ApplyForLor from './Login/Student/ApplyForLor';
import AccountPage from './Login/Student/AccountPage';
import StudentHome from './Login/Student/StudentHome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/register' element={<Register />}>
          <Route index element={<Student />} />
          <Route path='student' element={<Student />} />
          <Route path='faculty' element={<Faculty />} />
          <Route path='company' element={<Company />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/student-home' element={<StudentHome />}>
          <Route index element={<ApplyInCompany />} />
          <Route path='company' element={<ApplyInCompany />} />
          <Route path='lor' element={<ApplyForLor />} />
          <Route path='account' element={<AccountPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
