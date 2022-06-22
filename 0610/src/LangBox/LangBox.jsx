import React, { useState } from 'react';
import './css/index.css';
import langDb from './langBox.json';

const LangBox = () => {
  const language = langDb;

  const [active, setActive] = useState(false);

  const activeLi = () => {
    setActive(active => !active)
  }

  return (
    <ul className='lang-box'>
      {
        language.map((lang)=>{
          return(
            <li key={lang.id}>
              <a href={lang.href} onClick={activeLi} className={active ? 'active' : ''}>{lang.language}</a>
            </li>
          )
        })
      }
    </ul>
  );
};

export default LangBox;