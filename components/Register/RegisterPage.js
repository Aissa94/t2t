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

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const PHONE_REGEX = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

const RegisterPage = () => {
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

    const valid1 = USER_REGEX.test(firstName);
    const valid2 = USER_REGEX.test(firstName);
    const valid4 = EMAIL_REGEX.test(email);
    const valid3 = PASSWORD_REGEX.test(password);
    const valid5 = PHONE_REGEX.test(phone);

    if (!valid1 || !valid2 || !valid3 || !valid4 || !valid5) {
      setErrMsg("Invalid Entry");
      return;
    }

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        { firstName, lastName, password, email, phone },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setToken(response.data.access_token);
      const accessToken = response.data.access_token;
      console.log(accessToken);
      console.log(response.data);
      localStorage.setItem("tokenN", JSON.stringify(accessToken));
      setAuth({ firstName, lastName, phone, email, password, accessToken });
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <Svg />
        <div className={styles.container}>
          <div className={styles.box}>
            <div className={styles.boxConatiner}>
              <div className={styles.grid}>
                <div className={styles.sec1}>
                  <h1 className={styles.h1}>Welcome Back</h1>
                  <p className={styles.p}>
                    To keep connected with us please
                    <br />
                    login with your personal info
                  </p>
                  <Link href={"/login"}>
                    <button className={styles.btn}>Login</button>
                  </Link>
                </div>

                <div className={styles.sec2}>
                  <h1 className={styles.h1}>Create Account</h1>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputAll}>
                      <div className={styles.inputGrop}>
                        <label>
                          First Name :
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={validFirstName ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              validFirstName || !firstName ? "hide" : "invalid"
                            }
                          />
                        </label>
                        <input
                          type="text"
                          placeholder="First Name"
                          className={styles.input}
                          autoComplete="off"
                          onChange={(e) => setFirstName(e.target.value)}
                          value={firstName}
                          required
                          aria-invalid={validFirstName ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setFirstNameFocus(true)}
                          onBlur={() => setFirstNameFocus(false)}
                        />
                        <p
                          id="uidnote"
                          className={
                            FirstNameFocus && firstName && !validFirstName
                              ? "instructions"
                              : "offscreen"
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
                      <div className={styles.inputGrop}>
                        <label htmlFor="email" className="label">
                          Last Name:
                          <FontAwesomeIcon
                            icon={faCheck}
                            className={validLastName ? "valid" : "hide"}
                          />
                          <FontAwesomeIcon
                            icon={faTimes}
                            className={
                              validLastName || !lastName ? "hide" : "invalid"
                            }
                          />
                        </label>
                        <input
                          type="text"
                          placeholder="last Name"
                          className={styles.input}
                          onChange={(e) => setLastName(e.target.value)}
                          value={lastName}
                          required
                          aria-invalid={validLastName ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setLastNameFocus(true)}
                          onBlur={() => setLastNameFocus(false)}
                        />
                        <p
                          id="uidnote"
                          className={
                            LastNameFocus && lastName && !validLastName
                              ? "instructions"
                              : "offscreen"
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
                    <div className={styles.inputGrop2}>
                      <label htmlFor="email" className="label">
                        Email:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validEmail ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={validEmail || !email ? "hide" : "invalid"}
                        />
                      </label>
                      <input
                        type="email"
                        placeholder="Email"
                        className={styles.input}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        aria-invalid={validEmail ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                      <p
                        id="uidnote"
                        className={
                          emailFocus && email && !validEmail
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        Email not valid
                      </p>
                    </div>

                    <div className={styles.inputGrop2}>
                      <label>
                        Phone Number:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validPhone ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={validPhone || !phone ? "hide" : "invalid"}
                        />
                      </label>
                      <input
                        type="number"
                        placeholder="Phone Number:"
                        className={styles.input}
                        autoComplete="off"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        required
                        aria-invalid={validPhone ? "false" : "true"}
                        aria-describedby="uidnote"
                        onFocus={() => setFocusPhone(true)}
                        onBlur={() => setFocusPhone(false)}
                      />
                    </div>
                    <div className={styles.inputGrop2}>
                      <label>
                        Password:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={validPassword ? "valid" : "hide"}
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validPassword || !password ? "hide" : "invalid"
                          }
                        />
                      </label>
                      <input
                        type="password"
                        placeholder="Password"
                        className={styles.input}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        aria-invalid={validPassword ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setPasswordFocus(true)}
                        onBlur={() => setPasswordFocus(false)}
                      />
                      <p
                        id="pwdnote"
                        className={
                          passwordFocus && !validPassword
                            ? "instructions"
                            : "offscreen"
                        }
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters.
                        <br />
                        Must include uppercase and lowercase letters, a number
                        and a special character.
                        <br />
                        Allowed special characters:{" "}
                        <span aria-label="exclamation mark">!</span>{" "}
                        <span aria-label="at symbol">@</span>{" "}
                        <span aria-label="hashtag">#</span>{" "}
                        <span aria-label="dollar sign">$</span>{" "}
                        <span aria-label="percent">%</span>
                      </p>
                    </div>
                    <div className={styles.inputGrop2}>
                      <label className={styles.label}>
                        Confirm Password:
                        <FontAwesomeIcon
                          icon={faCheck}
                          className={
                            validMatch && password_confirmation
                              ? "valid"
                              : "hide"
                          }
                        />
                        <FontAwesomeIcon
                          icon={faTimes}
                          className={
                            validMatch || !password_confirmation
                              ? "hide"
                              : "invalid"
                          }
                        />
                      </label>
                      <input
                        type="password"
                        placeholder="Re-enter password"
                        className={styles.input}
                        value={password_confirmation}
                        onChange={(e) =>
                          setPassword_Confirmation(e.target.value)
                        }
                        required
                        aria-invalid={validMatch ? "false" : "true"}
                        aria-describedby="pwdnote"
                        onFocus={() => setMatchFocus(true)}
                        onBlur={() => setMatchFocus(false)}
                      />
                      <p
                        id="confirmnote"
                        className={
                          matchFocus && !validMatch
                            ? "instructions"
                            : "offscreen"
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
  );
};

export default RegisterPage;
