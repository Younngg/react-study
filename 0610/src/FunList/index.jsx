import React from 'react';
import FunItem from '../FunItem/index';
import entNews from './../db/entNews.json';
import './css/index.css'

const FunList = () => {
  const newsData = entNews;

  return (
      <ul className='fun-list'>
        {
          newsData.map((news) => {
            return (
              <FunItem key={news.id} img={news.imgSrc} title={news.title} info={news.info}/>
            )
          })
        }
      </ul>
  );
};

export default FunList;