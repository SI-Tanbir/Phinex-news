import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate,  useLocation } from 'react-router';
import data from '../demo-data/news.json'


const PrivateRoute = ({ children }) => {


  const { checkUser,loading } = useContext(AuthContext);

  const location =useLocation();


  console.log(data)

  // data.includes()



  if(loading){
    return <span className='loading loading-spinner loading-lg'></span>
  }
  
  
  // console.log('locaton console hahah ',location.pathname)
  
  if (checkUser) {
    return children; // Correctly return the children if the user is authenticated
  } else {
    // console.log(location)
    
    
    return <Navigate to="/login" state={location.pathname} />; // Properly return Navigate for redirection

  }
};

export default PrivateRoute;
