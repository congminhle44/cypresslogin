/** @format */

import React, { FC } from 'react';
import Form from './components/Form';

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
        <Form />
      </div>
    </div>
  );
};

export default Login;
