import { Route, Routes } from 'react-router-dom';
import Home from '../src/Home'
import Register from './Register';
import Login from './Login';
import Page from './Page';
import Profile from './Profile';

import axios from 'axios';
import {Toaster} from 'react-hot-toast'

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;
function App() {
  return (
     <div className='text-white h-[100vh] bg-cover flex bg-blur-md' style={{"backgroundImage": "url('../src/assets/code.jpg"}}>
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element ={<Home/>} />
        <Route path='Login' element={<Login />} />
        <Route path='Register' element={<Register />} />
        <Route path='Page' element={<Page/>} />
        <Route path ='Profile' element={<Profile/>} />
      </Routes>
     </div>
 
  )
}

export default App;
