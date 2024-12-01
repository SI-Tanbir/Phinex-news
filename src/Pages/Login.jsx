import React from "react";
import Navbar from "./Shared/Navbar/Navbar";

const Login = () => {

    const handleLogin=(e)=>{

        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        
        console.log(email,password)

    }

  return (
    <div>
        <Navbar></Navbar>
      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700">Login Page</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
                name="email"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
                name='password'
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
             <input type="submit" value="Login" className="btn btn-secondary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
