import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Register from './Register';
import Navbar from './Navbar';
import Landing from './Landing';
import Login from './Login';
import Usernav from './User/Usernav';
import UserHome from './User/UserHome';
import Addjob from './User/Addjob';
import ViewJob from './User/ViewJob';
import EditJob from './User/EditJob';
import JobList from './User/JobList';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navbar />} >
        <Route index element={<Landing/>}/>
        <Route path="register" element={<Register />} />
        <Route path='login' element={<Login/>}/>
      </Route>
      <Route path='/usernav' element={<Usernav/>}>
        <Route index element={<UserHome/>}/>
        <Route path='addjob' element={<Addjob/>}/>
        <Route path='viewjob' element={<ViewJob/>}/>
        <Route path='editjob/:id2' element={<EditJob/>}/>
        <Route path='joblist' element={<JobList/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
