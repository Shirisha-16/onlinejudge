import {Link} from "react-router-dom"
import{useState} from "react"
import axios from 'axios';
import{toast} from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate()
  const [data,setData] = useState({
    email:'',
    password:'',
  })
  const loginuser = async(e) =>{
    e.preventDefault();
    const {email,password} = data
    try {
      const {data} = await axios.post('/login',{
        email,
        password
      })
      if(data.error){
        toast.error(data.error)
      }
      else{
        setData({});
        navigate('/page')
      }
    } catch (error) {
      
    }
  };
  return (
    <div className="ps-60 pt-20">
      <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
        <h1 className="text-4xl font-bold text-center">Login</h1>
      <form action="" onSubmit={loginuser}>
      <div className="relative my-4" >
          <input type="email" value={data.email} onChange={(e)=>setData({...data, email:e.target.value})} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
          <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left:0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Your Email</label>
        </div>
        <div className="relative my-4">
          <input type="password" value={data.password} onChange={(e)=>setData({...data, password:e.target.value})} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
          <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left:0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Your Password</label>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex">
          <input type="checkbox" name="" id="" />
          <label htmlFor="Remember Me">Remember Me</label>
          </div>
          <Link  to='' className="text-blue-500">Forgot Password</Link>
        </div>
        <button className="w-full my-4 text-[18px] mt-6 rounded-full bg-white text-blue-900 hover:bg-blue-900 hover:text-white py-2" type="submit">Login</button>
        <div >
          <span className="m-4">New Here?<Link className="text-blue-500" to='/Register'>Create an Account</Link></span>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Login;