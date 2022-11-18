import React from 'react'
import LoginNavber from '../components/Login/LoginNavber'
import LoginPage from '../components/Login/LoginPage'
import Head from 'next/head';

const Login = () => {
  return (
     <>
       <Head>
         <title>Login</title>
       </Head>
       <LoginNavber/>
       <LoginPage/>
     </>
  )
}

export default Login
