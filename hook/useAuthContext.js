
import { useContext } from 'react'
import AuthContext from '../context/auth_context'


// make sure use
export const useAuthContext = () => {
  return useContext(AuthContext)
}