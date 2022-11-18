import React, { useContext , useState } from 'react';
import { getLocalStorage } from '../utils/helpers';

const initialContext = {
  auth : getLocalStorage(),
  authLogin : (() => {}) ,
  authLogout : (() => {}),
}

const AuthContext = React.createContext(initialContext)
export const AuthProvider = ({ children } ) => {
  const [auth ,setAuth] = useState(getLocalStorage());

  const authLogin = (newAuth) => {
    setAuth(newAuth)
    localStorage.setItem('auth', JSON.stringify(newAuth))
  }

  const authLogout = () => {
    setAuth({
      firstName: '',
      lastName: '',
      email: '',
      accessToken: '',
      privateKey : '',
    })
    localStorage.removeItem('auth');
  }

  return (
    <AuthContext.Provider value={{auth,authLogin,authLogout}}>{children}</AuthContext.Provider>
  )
}


// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext)
}