/** @format */

import React, { AllHTMLAttributes, FC, forwardRef } from 'react';

import styles from './input.module.css';

interface Props extends AllHTMLAttributes<HTMLInputElement> {
  error?: string;
  placeHolder?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeHolder, error, ...others }, ref: any) => {
    return (
      <div className={styles.wrap}>
        <input
          ref={ref}
          className={styles.input}
          placeholder={placeHolder}
          {...others}
        />
        <p className={styles.error}>{error}</p>
      </div>
    );
  }
);

export default Input;
