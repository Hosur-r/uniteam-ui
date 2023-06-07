import './App.css';
import { Route, Routes } from 'react-router-dom';

import Authorization from '../Entrance/Auth';
import Registration from '../Entrance/Reg';
import ForgotPsw from '../Entrance/ForgotPsw';

import Forms from '../Forms/Forms';
import Form from '../Forms/Form';

import Courses from '../Courses/Courses';
import Course from '../Courses/Course';

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

        <Route path='/Courses' element={<Courses/>}></Route>
        <Route path='/Course/:id' element={<Course/>}></Route>

        <Route path='/Profile' element={<Profile/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
