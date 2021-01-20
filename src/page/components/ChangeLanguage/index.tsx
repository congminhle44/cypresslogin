/** @format */

import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../components/Button';

import styles from './lang.module.css';

interface Props {}

const Language: FC = (props) => {
  const { i18n } = useTranslation();

  const changeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.langWrap}>
        <div onClick={() => changeLang('en')} className={styles.en}></div>
        <div onClick={() => changeLang('vi')} className={styles.vi}></div>
        <div onClick={() => changeLang('ko')} className={styles.ko}></div>
      </div>
    </div>
  );
};

export default Language;
