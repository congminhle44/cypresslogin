/** @format */

import React, { FC } from 'react';

import styles from './index.module.css';

interface Props {}

const Login: FC<Props> = (props) => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Log in success');
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
                  placeholder='Type email'
                />
              </div>
              <div className={styles.password}>
                <input
                  className={styles.input}
                  type='password'
                  placeholder='Type password'
                />
              </div>
            </div>
            <button type='submit' className={styles.signinBtn}>
              Sign in
            </button>
          </div>
          <div className={styles.others}>
            <p className={styles.forgot}>Forgot your password?</p>
            <p className={styles.signup}>Sign up</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
