/** @format */

import React, { FC } from 'react';

import Forward from '../../../components/icons/forward';

import Form from '../Form';

import styles from './wrap.module.css';

interface Props {}

const FormWrap: FC<Props> = (props) => {
  const submitEvent = (data: any) => {
    alert('Login success');
  };

  return (
    <div className={styles.form}>
      <div className={styles.formHead}>
        <p className={styles.welcome}>
          <span className={styles.highlight}>Welcome</span> to sign in
        </p>
        <p className={styles.headDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel
          reprehenderit tempore? Quibusdam, iste iusto.
        </p>
      </div>
      <Form submitEvent={submitEvent} />
      <div className={styles.others}>
        <p className={styles.forgot}>Forgot your password?</p>
        <div className={styles.signupWrap}>
          <p className={styles.signup}>Sign up</p>
          <div className={styles.forward}>
            <Forward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWrap;
