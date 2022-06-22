import React from 'react';
import '../style/footer.css';
import { NavLink } from 'react-router-dom';

const Footer = ({ title }) => {
  const activeFnc = ({ isActive }) => (isActive ? 'on' : '');
  return (
    <footer id='footer'>
      <h2>{title} 정보 </h2>
      <div className='company-info'>
        <ul>
          <li>
            <NavLink to='/manual' className={activeFnc}>
              이용약관
            </NavLink>
          </li>
          <li>
            <NavLink to='/policy' className={activeFnc}>
              개인정보처리방침
            </NavLink>
          </li>
          <li>
            <NavLink to='/rule' className={activeFnc}>
              회사개요
            </NavLink>
          </li>
          <li>
            <NavLink to='/etcInfo' className={activeFnc}>
              기타정보
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
