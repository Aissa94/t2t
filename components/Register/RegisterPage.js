import React , {useState} from 'react'
import styles from '../../sass/Register.module.scss'


const Name_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const Email_Regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const RegisterPage = () => {

  const [name , setName] = useState("")
  const [validname , setValidName] = useState(false)
  const [focusName , setFocusName ] = useState(false)

  const [password, setPassword] = useState('');
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  return (
     <>
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
                <h1 className={styles.h1}>Welcome Back</h1>
                <p className={styles.p}>
                 To keep connected with us please 
                 <br/>
                 login with your personal info
                </p>
                <button className={styles.btn}>Login</button>
              </div>


              <div className={styles.sec2}>
                <h1 className={styles.h1}>Create Account</h1>
                <form onSubmit={""} className={styles.form}>
                  <div className={styles.inputGrop}>
                    <input type="text" placeholder="First Name" className={styles.input}/>
                    <input type="text" placeholder="First Name" className={styles.input}/>
                  </div>
                  <div className={styles.inputGrop2}>
                    <input type="email" placeholder="Email" className={styles.input}/>
                  </div>
                  <div className={styles.inputGrop2}>
                    <input type="password" placeholder="Password" className={styles.input}/>
                  </div>
                  <div className={styles.inputGrop2}>
                    <input type="password" placeholder="Re-enter password" className={styles.input}/>
                  </div>

                  <button className={styles.btn}>Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      </section>
     </>
  )
}

export default RegisterPage