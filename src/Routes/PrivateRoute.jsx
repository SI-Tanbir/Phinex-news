import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLoaderData, useLocation } from 'react-router';


const PrivateRoute = ({ children }) => {
  const { checkUser } = useContext(AuthContext);
  const location =useLocation();
  console.log('locaton console hahah ',location.pathname)
  
  if (checkUser) {
    return children; // Correctly return the children if the user is authenticated
  } else {
    // console.log(location)
    return <Navigate to="/login" state={location.pathname} />; // Properly return Navigate for redirection

  }
};

export default PrivateRoute;
