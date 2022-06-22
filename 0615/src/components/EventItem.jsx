import React from 'react';
import eventStyles from '../style/event.module.css';
import { Link } from 'react-router-dom';

const EventItem = ({ data, index }) => {
  return (
    <li>
      <div className={eventStyles.num}>{index + 1}</div>
      <div className={eventStyles.imgBox}>
        <img src={`${data.image}`} alt='' />
      </div>
      <dl className={eventStyles.des}>
        <dt>{data.title}</dt>
        <dd>{data.content}</dd>
        <dd>
          <Link to='#'>자세히 보기</Link>
        </dd>
      </dl>
    </li>
  );
};

export default EventItem;
