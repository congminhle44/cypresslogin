/** @format */

import React, { AllHTMLAttributes, FC } from 'react';

import styles from './input.module.css';

interface Props extends AllHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeHolder?: string;
}

const Input: FC<Props> = ({ placeHolder, error, ...others }) => {
  return (
    <div className={styles.wrap}>
      <input className={styles.input} placeholder={placeHolder} {...others} />
      <p className={styles.error}>{error}</p>
    </div>
  );
};

export default Input;
