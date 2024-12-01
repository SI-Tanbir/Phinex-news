import React, { useContext } from "react";
import Navbar from "./Shared/Navbar/Navbar";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
    const {createRegister}=useContext(AuthContext)
    console.log(createRegister)

    const handleRegister=(e)=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;


        createRegister(email,password)
        .then(res=>console.log("resgister successful",res))
        .catch(error=>{
            console.error(error)
        }

        )
        

    }
   
  return (
    <div>
      <Navbar></Navbar>

      <div className="relative flex flex-col justify-center h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Register Here Now
          </h1>
          <form onSubmit={handleRegister} className="space-y-4">
          <div>
              <label className="label">
                <span className="text-base label-text">Enter Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                name='email'
                type="text"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Password</span>
              </label>
              <input
                name='password'
                type="password"
                placeholder="Enter Password"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <a
              href="#"
              className="text-xs text-gray-600 hover:underline hover:text-blue-600"
            >
              Forget Password?
            </a>
            <div>
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
