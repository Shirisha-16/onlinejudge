import {Link, Navigate} from "react-router-dom";
import {useState} from "react"
import axios from 'axios'
import {toast} from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Register = () => {
    const navigate = useNavigate()
    const [data,setData] = useState({
      firstName:'',
      lastName:'',
      email:'',
      password:'',
        })
    const handleSubmit = async(e) =>{
        e.preventDefault();
       const { firstName,lastName, email,password} = data
       try {
        const {data} = await axios.post('/register',{
          firstName,lastName,email,password 
        })
        if(data.error){
          toast.error(data.error)
        }
        else{
          setData({})
          toast.success('Login Successful.welcome!')
          navigate('/login')
        }
       } catch (error) {
        console.log(error)
       }
    }
  return (
    <div className=" ps-60 p-20">
    <div className="bg-slate-800 border border-slate-600 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-30 relative">
      <h1 className="text-4xl font-bold text-center">Register</h1>
    <form action="" onSubmit={handleSubmit}>
    <div className="relative my-4" >
        <input type="text" value={data.firstName} onChange={(e) => setData({...data,firstName:e.target.value})} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
        <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left:0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">FirstName</label>
      </div>
      <div className="relative my-4" >
        <input type="text" value={data.lastName} onChange={(e) => setData({...data,lastName:e.target.value})} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
        <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left:0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">LastName</label>
      </div>
      <div className="relative my-4" >
        <input type="email" value={data.email} onChange={(e) => setData({...data,email:e.target.value})} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
        <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left:0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">email</label>
      </div>
      <div className="relative my-4" >
        <input type="password" value={data.password} onChange={(e) => setData({...data,password:e.target.value})} className="block w-72 py-2.5 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer" placeholder=""/>
        <label htmlFor="" className="absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left:0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>
      <button className="w-full my-4 text-[18px] mt-6 rounded-full bg-white text-blue-900 hover:bg-blue-900 hover:text-white py-2" type="submit">SignIn</button>
      <div >
        <span className="m-4">Already create an Account?<Link className="text-blue-500" to='/Login'>Login</Link></span>
      </div>
    </form>
    </div>
  </div>
  )
}

export default Register;