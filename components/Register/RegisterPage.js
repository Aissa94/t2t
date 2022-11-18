import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "../../sass/Register.module.scss";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Svg from "../Svg";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "../../hook/useAuth";

import { Spot_1, Spot_2, Spot_3, Spot_4 } from '../Shared/SVG'
import { api_url, wallet_url } from '../../utils/constants'
import { useAuthContext } from '../../context/auth_context'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const RegisterPage = () => {
  const { auth, authLogin} = useAuthContext()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  const [formValidate, setFormValidate] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  })

  const [formFocus, setFormFocus] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    password: false,
    confirmPassword: false,
  })

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setFormData({...formData , [name] : value})

    switch (name) {
      case 'firstName':
        setFormValidate({
          ...formValidate,
          [name]: USER_REGEX.test(formData.firstName),
        })
        break
      case 'lastName':
        setFormValidate({
          ...formValidate,
          [name]: USER_REGEX.test(formData.lastName),
        })
        break
      case 'email':
        setFormValidate({
          ...formValidate,
          [name]: EMAIL_REGEX.test(formData.email),
        })
        break
      case 'phone':
        setFormValidate({
          ...formValidate,
          [name]: PHONE_REGEX.test(formData.phone),
        })
        break
    }
  }

  useEffect(() => {
    setFormValidate({
      ...formValidate,
      password: PASSWORD_REGEX.test(formData.password),
      confirmPassword: formData.password === formData.confirmPassword,
    })
  }, [formData.password, formData.confirmPassword])



  const [firstName, setFirstName] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [FirstNameFocus, setFirstNameFocus] = useState(false);

  const [lastName, setLastName] = useState("");
  const [validLastName, setValidLastName] = useState(false);
  const [LastNameFocus, setLastNameFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [focusPhone, setFocusPhone] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

  const [password_confirmation, setPassword_Confirmation] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [token, setToken] = useState(null);
  const { setAuth } = useAuth();

  useEffect(() => {
    setValidPhone(PHONE_REGEX.test(phone));
  }, [phone]);

  useEffect(() => {
    setValidFirstName(USER_REGEX.test(firstName));
  }, [firstName]);

  useEffect(() => {
    setValidLastName(USER_REGEX.test(lastName));
  }, [lastName]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPassword(PASSWORD_REGEX.test(password));
    setValidMatch(password === password_confirmation);
  }, [password, password_confirmation]);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formValidate.firstName ||
      !formValidate.lastName ||
      !formValidate.email ||
      !formValidate.phone ||
      !formValidate.password
    ) {
      setErrMsg('Invalid Entry')
      return
    }

    try {
      const response = await axios.post(
        api_url + '/register',
        formData,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )

      if (response.data.code === "200"){
        const walletRes = await axios.get(
          wallet_url + '/generateAddress',
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        console.log(walletRes.data.result)
        let auth_data = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          accessToken: response.data.access_token,
          privateKey: walletRes.data.result.privateKey,
        }
        authLogin(auth_data)
        //console.log(auth)
        router.push('/register-success')
      }
      //console.log('RESPONSE', response.data)
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        {/* <Svg /> */}
        <div>
          <Spot_1 />
          <Spot_2 />
          <Spot_3 />
          <Spot_4 />
        </div>
        {/* ----- container -----  */}
        <div className={styles.container}>
          {/* ----- box -----  */}
          <div className={styles.box}>
            {/* ----- box container -----  */}
            <div className={styles.boxConatiner}>
              <div className={styles.grid}>
                {/* ----- head section -----  */}
                <div className={styles.sec1}>
                  <h1 className={styles.h1}>Welcome Back</h1>
                  <p className={styles.p}>
                    To keep connected with us please
                    <br />
                    login with your personal info
                  </p>
                  <Link href={'/login'}>
                    <button className={styles.btn}>Login</button>
                  </Link>
                </div>

                {/* ----- form section -----  */}
                <div className={styles.sec2}>
                  <h1 className={styles.h1}>Create Account</h1>
                  {/* ----- form -----  */}
                  <form onSubmit={handleSubmit} className={styles.form}>
                    {/* ----- first & last name -----  */}
                    <div className={styles.inputAll}>
                      {/* ----- first name -----  */}
                      <div className={styles.inputGrop}>
                        <label htmlFor='firstName'>
                          First Name :
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={
                              formValidate.firstName ? 'valid' : 'hide'
                            }
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              formValidate.firstName || !formData.firstName
                                ? 'hide'
                                : 'invalid'
                            }
                          />
                        </label>
                        <input
                          type='text'
                          placeholder='First Name'
                          className={styles.input}
                          id='firstName'
                          name='firstName'
                          onChange={(e) => handleInput(e)}
                          value={formData.firstName}
                          required
                          autoComplete='off'
                          aria-invalid={validFirstName ? 'false' : 'true'}
                          aria-describedby='uidnote'
                          onFocus={() =>
                            setFormFocus({ ...formFocus, firstName: true })
                          }
                          onBlur={() =>
                            setFormFocus({ ...formFocus, firstName: false })
                          }
                        />
                        <p
                          id='uidnote'
                          className={
                            formFocus.firstName &&
                            formData.firstName &&
                            !formValidate.firstName
                              ? 'instructions'
                              : 'offscreen'
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          4 to 24 characters.
                          <br />
                          Must begin with a letter.
                          <br />
                          Letters, numbers, underscores, hyphens allowed.
                        </p>
                      </div>
                      {/* ----- last name -----  */}
                      <div className={styles.inputGrop}>
                        <label htmlFor='lastName' className='label'>
                          Last Name:
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={formValidate.lastName ? 'valid' : 'hide'}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              formValidate.lastName || !formData.lastName
                                ? 'hide'
                                : 'invalid'
                            }
                          />
                        </label>
                        <input
                          type='text'
                          placeholder='last Name'
                          className={styles.input}
                          id='lastName'
                          name='lastName'
                          onChange={(e) => handleInput(e)}
                          value={formData.lastName}
                          required
                          aria-invalid={
                            formValidate.lastName ? 'false' : 'true'
                          }
                          aria-describedby='uidnote'
                          onFocus={() =>
                            setFormFocus({ ...formFocus, lastName: true })
                          }
                          onBlur={() =>
                            setFormFocus({ ...formFocus, lastName: false })
                          }
                        />
                        <p
                          id='uidnote'
                          className={
                            formFocus.lastName &&
                            formData.lastName &&
                            !formValidate.lastName
                              ? 'instructions'
                              : 'offscreen'
                          }
                        >
                          <FontAwesomeIcon icon={faInfoCircle} />
                          4 to 24 characters.
                          <br />
                          Must begin with a letter.
                          <br />
                          Letters, numbers, underscores, hyphens allowed.
                        </p>
                      </div>
                    </div>
                    {/* ----- email -----  */}
                    <div className={styles.inputGrop2}>
                      <label htmlFor='email' className='label'>
                        Email:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={formValidate.email ? 'valid' : 'hide'}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            formValidate.email || !formData.email
                              ? 'hide'
                              : 'invalid'
                          }
                        />
                      </label>
                      <input
                        type='email'
                        placeholder='Email'
                        className={styles.input}
                        id='email'
                        name='email'
                        autoComplete='off'
                        onChange={(e) => handleInput(e)}
                        value={formData.email}
                        required
                        aria-invalid={formValidate.email ? 'false' : 'true'}
                        aria-describedby='uidnote'
                        onFocus={() =>
                          setFormFocus({ ...formFocus, email: true })
                        }
                        onBlur={() =>
                          setFormFocus({ ...formFocus, email: false })
                        }
                      />
                      <p
                        id='uidnote'
                        className={
                          formFocus.email &&
                          formData.email &&
                          !formValidate.email
                            ? 'instructions'
                            : 'offscreen'
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Email not valid
                      </p>
                    </div>
                    {/* ----- phone number -----  */}
                    <div className={styles.inputGrop2}>
                      <label htmlFor='phone'>
                        Phone Number:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={formValidate.phone ? 'valid' : 'hide'}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            formValidate.phone || !formData.phone
                              ? 'hide'
                              : 'invalid'
                          }
                        />
                      </label>
                      <input
                        type='text'
                        placeholder='Phone Number:'
                        className={styles.input}
                        id='phone'
                        name='phone'
                        autoComplete='off'
                        onChange={(e) => handleInput(e)}
                        value={formData.phone}
                        required
                        aria-invalid={formValidate.phone ? 'false' : 'true'}
                        aria-describedby='uidnote'
                        onFocus={() =>
                          setFormFocus({ ...formFocus, phone: true })
                        }
                        onBlur={() =>
                          setFormFocus({ ...formFocus, phone: false })
                        }
                      />
                      <p
                        id='uidnote'
                        className={
                          formFocus.phone &&
                          formData.phone &&
                          !formValidate.phone
                            ? 'instructions'
                            : 'offscreen'
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Phone Number is not valid
                      </p>
                    </div>
                    {/* ----- password -----  */}
                    <div className={styles.inputGrop2}>
                      <label htmlFor='password'>
                        Password:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={formValidate.password ? 'valid' : 'hide'}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            formValidate.password || !formData.password
                              ? 'hide'
                              : 'invalid'
                          }
                        />
                      </label>
                      <input
                        type='password'
                        placeholder='Password'
                        className={styles.input}
                        id='password'
                        name='password'
                        value={formData.password}
                        onChange={(e) => handleInput(e)}
                        required
                        aria-invalid={formValidate.password ? 'false' : 'true'}
                        aria-describedby='pwdnote'
                        onFocus={() =>
                          setFormFocus({ ...formFocus, password: true })
                        }
                        onBlur={() =>
                          setFormFocus({ ...formFocus, password: false })
                        }
                      />
                      <p
                        id='pwdnote'
                        className={
                          formFocus.password && !formValidate.password
                            ? 'instructions'
                            : 'offscreen'
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character.
                        <br />
                        Allowed special characters:{' '}
                        <span aria-label='exclamation mark'>!</span>{' '}
                        <span aria-label='at symbol'>@</span>{' '}
                        <span aria-label='hashtag'>#</span>{' '}
                        <span aria-label='dollar sign'>$</span>{' '}
                        <span aria-label='percent'>%</span>
                      </p>
                    </div>
                    {/* ----- confirm password -----  */}
                    <div className={styles.inputGrop2}>
                      <label className={styles.label} htmlFor='confirmPassword'>
                        Confirm Password:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={
                            formValidate.confirmPassword && formData.confirmPassword
                              ? 'valid'
                              : 'hide'
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            formValidate.confirmPassword || !formData.confirmPassword
                              ? 'hide'
                              : 'invalid'
                          }
                        />
                      </label>
                      <input
                        type='password'
                        placeholder='Re-enter password'
                        className={styles.input}
                        id='confirmPassword'
                        name='confirmPassword'
                        value={formData.confirmPassword}
                        onChange={(e) => handleInput(e)}
                        required
                        aria-invalid={formValidate.confirmPassword ? 'false' : 'true'}
                        aria-describedby='pwdnote'
                        onFocus={() =>
                          setFormFocus({ ...formFocus, confirmPassword: true })
                        }
                        onBlur={() =>
                          setFormFocus({ ...formFocus, confirmPassword: false })
                        }
                      />
                      <p
                        id='confirmnote'
                        className={
                          formFocus.confirmPassword && !formValidate.confirmPassword
                            ? 'instructions'
                            : 'offscreen'
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Must match the first password input field.
                      </p>
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
};

export default RegisterPage;
