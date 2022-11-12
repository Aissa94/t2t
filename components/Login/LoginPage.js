import React, { useState, useEffect , useContext } from "react";
import styles from "../../sass/Login.module.scss";
import axios from "axios"
import useAuth from "../../hook/useAuth";
import { useRouter } from 'next/router'
import Link from "next/link";




const LoginPage = () => {

  const LOGIN_URL = "http://127.0.0.1:8000/api/login"
  
  const router = useRouter()
  const {setAuth} = useAuth()

  //email and pass state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data ,setData] = useState(null)
  const [token , setToken] = useState(null)
 
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
     const res = await axios.post(LOGIN_URL , {email , password} ,
      {
        headers: { 'Content-Type': 'application/json' }
     })
     console.log(res.data.data)
     setData(res.data.data)
     setToken(res.data.data.access_token)
     const userId = res.data.data.userId
     const accessToken = res.data.data.access_token
     setAuth({email , password , accessToken , userId })
     router.push("/")

    } 
    catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      } 
    }
  };

  useEffect(() => {
    localStorage.setItem("token",token);
}, [token])

  return (
    <section className={styles.hero}>
      <div className={styles.blob1}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#BAE6FF"
            d="M60.4,-37.6C71.6,-15.3,69.6,11.9,57.4,33.1C45.1,54.3,22.5,69.5,0.1,69.5C-22.4,69.4,-44.8,54.1,-57.2,32.8C-69.6,11.6,-72,-15.7,-60.8,-37.9C-49.6,-60.1,-24.8,-77.3,-0.1,-77.2C24.5,-77.2,49.1,-59.9,60.4,-37.6Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className={styles.blob2}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#A7F0BA"
            d="M46.2,-54C59.7,-43.8,70.3,-29,74.5,-12.1C78.7,4.8,76.6,23.9,66.9,36.6C57.2,49.4,39.9,55.9,22.3,63.1C4.7,70.3,-13.3,78.2,-31.6,76.2C-49.8,74.1,-68.2,62,-74.1,45.7C-79.9,29.4,-73.3,8.8,-67.3,-9.6C-61.4,-28,-56.1,-44.3,-45,-54.9C-33.8,-65.6,-16.9,-70.7,-0.3,-70.4C16.4,-70.1,32.7,-64.3,46.2,-54Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className={styles.blob3}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFD6E8"
            d="M41.9,-17.4C55.8,-0.2,69.4,23.9,62.4,38.5C55.4,53.2,27.7,58.5,9.8,52.8C-8.1,47.2,-16.3,30.6,-28.2,13.1C-40.1,-4.4,-55.9,-22.9,-51.8,-34.4C-47.8,-46,-23.9,-50.5,-4.9,-47.7C14,-44.9,28.1,-34.6,41.9,-17.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className={styles.blob4}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#E8DAFF"
            d="M68.8,-23.1C78,5.9,66.5,40.8,44.2,55.8C21.9,70.8,-11.2,65.9,-34.1,48.8C-57,31.7,-69.6,2.5,-62.2,-24C-54.9,-50.4,-27.4,-74.2,1.2,-74.6C29.8,-74.9,59.6,-52,68.8,-23.1Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className={styles.container}>
       
        <div className={styles.box}>
          <div className={styles.boxConatiner}>
            <div className={styles.grid}>
              <div className={styles.sec1}>
                <h1 className={styles.h1}>Login to your Account</h1>
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.inputGrop}>
                    <input
                      type="email"
                      placeholder="email"
                      className={styles.input}
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>

                  <div className={styles.inputGrop}>
                    <input
                      type="password"
                      placeholder="password"
                      className={styles.input}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <button className={styles.btn}>Login</button>
                </form>
              </div>

              <div className={styles.sec2}>
                <h1 className={styles.h1}>New Here?</h1>
                <p className={styles.p}>
                  Create your account and let your
                  <br />
                  journey begin!
                </p>
                <Link href={'/register'}>
                  <button className={styles.btn}>Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
