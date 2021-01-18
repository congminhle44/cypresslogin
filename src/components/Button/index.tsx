/** @format */

import React, { AllHTMLAttributes, FC } from 'react';

import styles from './button.module.css';

interface Props extends AllHTMLAttributes<HTMLButtonElement> {
  onOK?: () => void;
  type?: any;
}

const Button: FC<Props> = ({ onOK, children, type = 'button', disabled }) => {
  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onOK}
      className={styles.signinBtn}>
      {children}
    </button>
  );
};

export default Button;
