import './App.css';
import { Route, Routes } from 'react-router-dom';

import Authorization from '../Entrance/Auth';
import Registration from '../Entrance/Reg';
import ForgotPsw from '../Entrance/ForgotPsw';

import Forms from '../Forms/Forms';
import Form from '../Forms/Form';
import UserForm from '../Forms/UserForm';

import Courses from '../Courses/Courses';
import Course from '../Courses/Course';
import UserCourse from '../Courses/UserCourse';

import Profile from '../Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/reg' element={<Registration/>}></Route>
        <Route path='/' element={<Authorization/>}></Route>
        <Route path='/pswF' element={<ForgotPsw/>}></Route>

        <Route path='/Forms' element={<Forms/>}></Route>
        <Route path='/Form/:id' element={<Form/>}></Route>
        <Route path='/UserForm/:id' element={<UserForm/>}></Route>

        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Course/:id' element={<Course/>}></Route>
        <Route path='/UserCourse/:id' element={<UserCourse/>}></Route>

        <Route path='/Profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
