import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className = "m-52" style={{ display: 'block'}}>
        <h1 className="text-6xl p-6">Welcome to Fervent Coders</h1>
        <p className="text-2xl">Code with passion, debug with patience, and remember: even the toughest problems are just opportunities in disguise.</p>
        <div className="p-20">
          <Link className="text-blue-500 mt-20 rounded text-xl p-5 m-6" to='/Register' style={{background: "white" }}>
          Register
          </Link>
          <Link className="text-blue-500 mt-20 rounded text-xl p-5" to='/Login' style={{background: "white" }}>
          Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
