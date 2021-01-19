/** @format */

import React, { FC } from 'react';

import FormWrap from './components/FormWrap';

import styles from './index.module.css';

interface Props {}

const Login: FC<Props> = (props) => {
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
        <FormWrap />
      </div>
    </div>
  );
};

export default Login;
