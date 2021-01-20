/** @format */

import React, { AllHTMLAttributes, FC, forwardRef } from 'react';

import styles from './input.module.css';

interface Props extends AllHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, ...others }, ref) => {
    return (
      <div className={styles.wrap}>
        <input ref={ref} className={styles.input} {...others} />
        <p className={styles.error}>{error}</p>
      </div>
    );
  }
);

export default Input;
