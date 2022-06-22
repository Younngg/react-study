import React from 'react';
import styles from '../style/footerMenu.module.css';
import manualStyle from '../style/manual.module.css';

const Manual = () => {
  return (
    <div className={styles.footerMenu}>
      <h2 className={manualStyle.title}>메뉴얼 페이지</h2>
    </div>
  );
};

const Policy = () => {
  return (
    <div className={styles.footerMenu}>
      <h2 className='title'>개인정보처리방침 페이지</h2>
    </div>
  );
};

const Rule = () => {
  return (
    <div className={styles.footerMenu}>
      <h2 className='title'>회사개요 페이지</h2>
    </div>
  );
};

const EtcInfo = () => {
  return (
    <div className={styles.footerMenu}>
      <h2 className='title'>기타 정보 페이지</h2>
    </div>
  );
};

export { Manual, Rule, Policy, EtcInfo };
