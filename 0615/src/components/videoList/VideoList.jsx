import React, { useEffect, useState } from 'react';
import VideoItem from './VideoItem';
import videoStyle from './video.module.css';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

const VideoList = () => {
  const dataUrl = './data/videoData.json';
  const [dataList, setDataList] = useState([]);
  const [moreNum, setMoreNum] = useState(10);

  const plusNum = 10;

  useEffect(() => {
    (async () => {
      await fetch(dataUrl)
        .then((res) => res.json())
        .then((res) => setDataList(res));
    })();
  }, []);

  const fncMore = () => (moreNum < 11 ? setMoreNum(moreNum + plusNum) : setMoreNum(10));

  const viewData = dataList.filter((data, index) => index < moreNum);

  return (
    <div className={videoStyle.videoList}>
      <ul className={videoStyle.videoBox}>
        {viewData.map((data, index) => {
          return <VideoItem key={data.id} data={data} index={index} />;
        })}
      </ul>
      <div className={videoStyle.moreBtn}>
        {moreNum < 11 ? (
          <p type='button' onClick={fncMore}>
            <span>인기영상</span> 펼쳐보기 <FaAngleDown />
          </p>
        ) : (
          <p type='button' onClick={fncMore}>
            <span>인기영상</span> 접어두기 <FaAngleUp />
          </p>
        )}
      </div>
    </div>
  );
};

export default VideoList;
