/** @format */

import React, { FC, useEffect, useState } from 'react';

import Forward from '../components/forward';
import { emailValid, passwordValid } from '../validation';

import styles from './index.module.css';

interface Props {}

const Login: FC<Props> = (props) => {
  const [valid, setValid] = useState(false);

  const [userErr, setUserErr] = useState({
    email: '',
    password: '',
  });

  let [mailValid, setMailValid] = useState(false);

  let [_passwordValid, setPasswordValid] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Log in success');
  };

  useEffect(() => {
    setValid(mailValid && _passwordValid);
  }, [mailValid, _passwordValid]);

  const handleChange = (e: any) => {
    let { name, value } = e.target;

    let message = '';

    switch (name) {
      case 'email':
        if (emailValid(value, 64) !== '') {
          setMailValid(false);
          message = emailValid(value, 64);
        }
        setMailValid((mailValid = message ? false : true));
        break;

      case 'password':
        if (passwordValid(value.trim(), 255) !== '') {
          setPasswordValid(false);
          message = passwordValid(value.trim(), 255);
        }
        setPasswordValid((_passwordValid = message ? false : true));
        break;
    }

    setUserErr({ ...userErr, [name]: message });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.coverImage}>
        <div className={styles.header}>
          <p className={styles.headText}>
            <span className={styles.brand}>Cypress</span>login
          </p>
        </div>
      </div>
      <div className={styles.formWrapper}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.formHead}>
            <p className={styles.welcome}>
              <span className={styles.highlight}>Welcome</span> to sign in
            </p>
            <p className={styles.headDescription}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              vel reprehenderit tempore? Quibusdam, iste iusto.
            </p>
          </div>
          <div className={styles.formMain}>
            <div className={styles.inputWrap}>
              <div className={styles.email}>
                <input
                  className={styles.input}
                  type='email'
                  name='email'
                  onChange={handleChange}
                  placeholder='Type email'
                />
                <p className={styles.error}>{userErr.email}</p>
              </div>
              <div className={styles.password}>
                <input
                  className={styles.input}
                  type='password'
                  name='password'
                  onChange={handleChange}
                  placeholder='Type password'
                />
                <p className={styles.error}>{userErr.password}</p>
              </div>
            </div>
            <button
              disabled={!valid}
              type='submit'
              className={styles.signinBtn}>
              Sign in
            </button>
          </div>
          <div className={styles.others}>
            <p className={styles.forgot}>Forgot your password?</p>
            <div className={styles.signupWrap}>
              <p className={styles.signup}>Sign up</p>
              <div className={styles.forward}>
                <Forward />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
