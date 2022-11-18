import React from "react";
import RegisterNavbar from "../components/Register/RegisterNavbar";
import RegisterPage from "../components/Register/RegisterPage";
import Head from 'next/head';

const Register = () => {
  return (
    <>
      <Head>
        <title>Register</title>
      </Head>
      <RegisterNavbar />
      <RegisterPage />
    </>
  );
};

export default Register;
