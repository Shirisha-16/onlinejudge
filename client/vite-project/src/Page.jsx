import React from 'react'
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <>
    <div className="pt-20"><Link className="text-blue-500 mt-20 rounded text-xl p-5 m-6 h-20 w-40" to='/page/problems' style={{background: "white" }}> Practice Problems</Link>
    <Link className="text-blue-500 mt-20 rounded text-xl p-5 m-6 h-20 w-40" to='/page/Contests' style={{background: "white" }}> Contests</Link>
    <Link className="text-blue-500 mt-20 rounded text-xl p-5 m-6 h-20 w-40" to='/Profile' style={{background: "white" }}> Profile</Link>
    </div>
    </>
  )
}

export default Page