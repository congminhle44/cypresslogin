/** @format */

import React, { FC } from 'react';

import { useForm } from 'react-hook-form';

import { useTranslation } from 'react-i18next';

import Button from '../../../components/Button';

import Input from '../../../components/Input';

import { emailPattern } from '../../../helpers/pattern';

import styles from './form.module.css';

interface Props {
  submitEvent?: any;
  switchErrors?: any;
}

type Inputs = {
  email?: string;
  password?: string;
};

const Form: FC<Props> = ({ submitEvent, switchErrors }) => {
  const { register, handleSubmit, errors } = useForm<Inputs>();

  const { t } = useTranslation();

  return (
    <form onSubmit={handleSubmit(submitEvent)} className={styles.formMain}>
      <div className={styles.inputWrap}>
        <div className={styles.email}>
          <Input
            type='email'
            name='email'
            placeholder={t('placeholder.email')}
            ref={register({
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
            placeholder={t('placeholder.password')}
            ref={register({ required: true, minLength: 6, maxLength: 24 })}
            error={errors.password && switchErrors(errors.password)}
          />
        </div>
      </div>
      <Button type='submit'>Sign in</Button>
    </form>
  );
};

export default Form;
