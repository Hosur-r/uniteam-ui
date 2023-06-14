import './App.css';
import { Route, Routes } from 'react-router-dom';

import Authorization from '../Entrance/Auth';
import Registration from '../Entrance/Reg';
import ForgotPsw from '../Entrance/ForgotPsw';

import Forms from '../Forms/Forms';
import Form from '../Forms/Form';
import UserForm from '../Forms/UserForm';
import Analytic from '../Forms/FormAnalytics/Analytic';

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

        <Route path='/forms' element={<Forms/>}></Route>
        <Route path='/form/:id' element={<Form/>}></Route>
        <Route path='/userform/:id' element={<UserForm/>}></Route>
        <Route path='/analytics/:id' element={<Analytic/>}></Route>

        <Route path='/courses' element={<Courses/>}></Route>
        <Route path='/course/:id' element={<Course/>}></Route>
        <Route path='/usercourse/:id' element={<UserCourse/>}></Route>

        <Route path='/profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
