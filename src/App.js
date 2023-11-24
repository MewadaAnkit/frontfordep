import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './component/Signup';
import Signin from './component/Signin';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Course from './component/Course';
import Login from "./component/Login"
import RegisterDetailed from './component/RegistrationDetailed';
import Register from './component/Register';
import Dashboard from "./component/Dashboard";
import Header from './component/Header';
import Erp from './component/Erp';
import NewRegistrationRequests from './component/NewRegistrationRequests';
import Enrollment from './component/Enrollment';
import PersonalInfo from './component/PersonalInfo';
import Photo from './component/Photo';
import ButtonFun from './component/ButtonFun';
import Address from './component/Address'
import  Academic from './component/Academic'
import Professional from './component/Professional';
import Registration from './component/Registration';
import Waiting from './component/Waiting'
import HodRegVerification from './component/HodRegVerification';
import Sidebar from './component/Sidebar';
import Sidebarr from './component/HodDashboard';
import Pending from './component/StudentPending';
import Verify from './component/StudentVerified';
import PaymentMsg from './component/PaymentMsg';
import MainPage from './component/HomePage/MainPage';
import HodDashboard from './component/HodDashboard';

function App() {
   const user = JSON.parse(localStorage.getItem("currentUser"));
  function isAuthenticated() {
    const userData = JSON.parse(localStorage.getItem("currentUser"));
    if (userData) {
      return true
    }

    return false;
  }

  function PrivateRoute({ element, ...rest }) {
    const location = useLocation();
    if (isAuthenticated()) {
      return element;
    } else {
      return <Navigate to={`/studentlogin?redirect=${location.pathname}`} />;
    }
  }
  return (
    <>
      <Routes>

        <Route path='/erp' element={<Erp />} />
        <Route path='/payment' element={<PaymentMsg/>} />
        {/* <Route path='/' element={<Header />} /> */}
        <Route path='/' element={<MainPage />} />
        <Route path='/hodregverification' element={<HodRegVerification/>} />
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/personal' element={<PersonalInfo/>} />
        <Route path='/professional' element={<Professional />} />
        <Route path='/address' element={<Address />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/academic' element={<Academic />} />
        <Route path='/adminlogin' element={<Login />} />

        <Route path='/dashboard' element={<NewRegistrationRequests />} />
        <Route path='/adminregister' element={<Register />} />
        <Route path="/studentregister" element={<Signup />} />
        <Route path="/studentlogin" element={<Signin />} />
        <Route path="/studentsidebar" element={<Sidebar/>} />
        <Route path="/hodsidebar" element={<HodDashboard />} />
        <Route path='/enrollement' element={<PrivateRoute element={<ButtonFun />}/> } />
        <Route path='/personal' element={user? <PersonalInfo />:<Signin/> } />
        <Route path='/photo' element={<Photo />} />
        <Route path='/waiting' element={<Waiting />} />
        <Route path='/studentPending' element={<Pending/>} />
        <Route path='/studentVerify' element={<Verify/>} />
        <Route
          path="/selectCourse"
          element={<PrivateRoute element={<Course />} />}
        />
      </Routes>
    </>
  )
}

export default App
