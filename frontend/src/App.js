import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './Components/MainPage/MainPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Appointment from './Components/Appointment/Appointment';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorsZone from './Components/DoctorsZone/DoctorsZone';
import Dashboard from './Components/Dashboard/Dashboard';
import Patients from './Components/Patients/Patients';
import Prescription from './Components/Prescription/Prescription';
import Settings from './Components/Settings/Settings';
import NotFound from './Components/NotFound/NotFound';
import Community from './Components/Community/Community';
// import SignupScreen from './Components/SignupScreen/SignupScreen';
import Login from './Components/Login/Login';
import Video from './Components/VideoCall/Video'
import UserDetail from './Components/UserDetails/UserDetail';



function App() {
 
  return (
    <div>
      
      <Router>
        <Switch>
          <Route exact path="/" component = {MainPage} />
            
          <Route path="/appointment" component = {Appointment} />
            
          <Route path="/doctorsZone" component = {DoctorsZone} />
          <Route path="/community" component = {Community} />
            
          <Route path="/community" component = {Community} />
          <Route path="/userinfo/" component = {UserDetail} />
          
          <Route path="/dashboard" component = {Dashboard} />
            
          <Route path= "/video" component = {Video} >
          <Route path="/patients" component = {Patients} />
          
          <Route path="/prescription" component = {Prescription} />
          </Route>
          <Route path="/settings" component = {Settings} />
          <Route path="/login" component = {Login} />
          {/* <Route path="*">
            <NotFound></NotFound>
          </Route> */}
        </Switch>
      </Router>

    </div>
  );
}

export default App;
