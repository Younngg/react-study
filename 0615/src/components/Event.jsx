import React, { useEffect, useState } from 'react';
import eventStyles from '../style/event.module.css';
import EventItem from './EventItem';
import { HiOutlinePlus } from 'react-icons/hi';

const Event = () => {
  const listPlusNum = 3;
  const dataUrl = './data/eventData.json';
  const [dataList, setDataList] = useState([]);
  const [moreNum, setMoreNum] = useState(3);

  useEffect(() => {
    (async () => {
      await fetch(dataUrl)
        .then((res) => res.json())
        .then((res) => setDataList(res));
    })();
  }, []);

  const fncMore = () => {
    setMoreNum(moreNum + listPlusNum);
  };

  const viewData = dataList.filter((data, index) => index < moreNum);

  return (
    <div className={eventStyles.event}>
      <h2>Event</h2>
      <ul>
        {viewData.map((data, index) => {
          return <EventItem key={data.id} data={data} index={index} />;
        })}
      </ul>
      <div className={eventStyles.moreBtn}>
        <button type='button' onClick={fncMore}>
          <HiOutlinePlus />
        </button>
      </div>
    </div>
  );
};

export default Event;
