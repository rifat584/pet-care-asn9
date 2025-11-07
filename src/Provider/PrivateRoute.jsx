import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
  const {user, loading}= use(AuthContext);
  const location = useLocation();

  if(loading){
    return <div className='h-screen flex items-center justify-center'><span className="loading loading-ring loading-xl"></span></div>

  }
  if (!user){
    return <Navigate to={"/login"} state={{from:location.pathname}}/>
  }
  return children;
};

export default PrivateRoute;