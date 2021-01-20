/** @format */

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Forward from '../../../components/Icons/forward';

import Form from '../Form';

import styles from './wrap.module.css';

interface Props {}

const FormWrap: FC<Props> = (props) => {
  const { t } = useTranslation();

  const submitEvent = (data: any) => {
    alert('Login success');
  };

  const switchErrors = (inputName: any) => {
    switch (inputName.type) {
      case 'required':
        return t('errors.required');
      case 'minLength':
        return t('errors.minLength');
      case 'maxLength':
        return t('errors.maxLength');
      case 'pattern':
        return t('errors.pattern');
    }
  };

  return (
    <div className={styles.form}>
      <div className={styles.formHead}>
        <p className={styles.welcome}>
          <span className={styles.highlight}>{t('welcome.1')}</span>{' '}
          {t('welcome.2')}
        </p>
        <p className={styles.headDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores vel
          reprehenderit tempore? Quibusdam, iste iusto.
        </p>
      </div>
      <Form switchErrors={switchErrors} submitEvent={submitEvent} />
      <div className={styles.others}>
        <p className={styles.forgot}>{t('forgot.1')}</p>
        <div className={styles.signupWrap}>
          <p className={styles.signup}>{t('signup.1')}</p>
          <div className={styles.forward}>
            <Forward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWrap;
