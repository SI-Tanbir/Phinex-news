import React, { useContext } from "react";
import LeftsideNav from "./LeftsideNav/LeftsideNav";
import RightsideNav from "./RighsideNav/RightsideNav";
import { Link, useLoaderData, useLocation } from "react-router";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {


  const {checkUser,userSignOut}=useContext(AuthContext);

  const handleSignout=()=>{
    userSignOut()
    .then(res=>console.log('signout successful ',res))

  }

  return (
    <div >

<div className=" flex gap-4">

</div>

<div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Phinex-News</a>
  </div>
  <div className="flex-none gap-2">
    <ul className="flex gap-8">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/register'>Register</Link></li>
      <li>Career</li>
    </ul>
    <div className="form-control">
     
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div >
      <div >
        <div>
  
        </div>


               {
                checkUser?
                  <button onClick={handleSignout} className="btn bg-red-600 text-white">Signout</button>
                  :
                
                <div>
                  <Link to="/login"  ><button className="btn btn-secondary">Login</button></Link>
                  </div>
        
               }
           
            {/* <Link to="/login"><button className="btn btn-secondary">Login</button></Link> */}
     
     
      </div>
       
    </div>
  </div>
</div>


    </div>
  );
};

export default Navbar;
