/** @format */

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../../components/Button';

import Forward from '../../../components/icons/forward';

import Input from '../../../components/Input';

import styles from './form.module.css';

interface Props {}

type Inputs = {
  email?: string;
  password?: string;
};

const Form: FC<Props> = (props) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  // eslint-disable-next-line
  const emailPattern = /^(([^<>()\[\]\\.,;:\s-@#$!%^&*+=_/`?{}|'"]+(\.[^<>()\[\]\\.,;:\s-@_!#$%^&*()=+/`?{}|'"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;

  const switchErrors = (inputName: any) => {
    switch (inputName.type) {
      case 'required':
        return 'This field is required';
      case 'minLength':
        return "This field doesn't meet the min length";
      case 'maxLength':
        return 'This field is out of max length';
      case 'pattern':
        return 'Wrong type of email';
    }
  };

  const submitEvent = (data: any) => {
    alert('Login success');
  };

  return (
    <form onSubmit={handleSubmit(submitEvent)} className={styles.form}>
      <div className={styles.formHead}>
        <p className={styles.welcome}>
          <span className={styles.highlight}>Welcome</span> to sign in
        </p>
        <p className={styles.headDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel
          reprehenderit tempore? Quibusdam, iste iusto.
        </p>
      </div>
      <div className={styles.formMain}>
        <div className={styles.inputWrap}>
          <div className={styles.email}>
            <Input
              type='email'
              name='email'
              placeHolder='Type email'
              refs={register({
                required: true,
                minLength: 6,
                maxLength: 24,
                pattern: emailPattern,
              })}
              error={errors.email && switchErrors(errors.email)}
            />
          </div>
          <div className={styles.password}>
            <Input
              type='password'
              name='password'
              placeholder='Type password'
              refs={register({ required: true, minLength: 6, maxLength: 24 })}
              error={errors.password && switchErrors(errors.password)}
            />
          </div>
        </div>
        <Button type='submit'>Sign in</Button>
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
  );
};

export default Form;
