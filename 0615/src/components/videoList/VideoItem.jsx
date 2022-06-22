import React from 'react';
import videoStyle from './video.module.css';
import { BsPlay } from 'react-icons/bs';

const VideoItem = ({ data, index }) => {
  return (
    <li>
      <div className={videoStyle.thumbnail}>
        <img src={`${data.image}`} alt='' />
      </div>
      <div className={videoStyle.videoInfo}>
        <div className={videoStyle.channelInfo}>
          <div className={videoStyle.channelImg}>
            <img src={`${data.channelImg}`} alt='' />
          </div>
          <div className={videoStyle.channelName}>{data.channelName}</div>
        </div>
        {/* channelInfo */}
        <div className={videoStyle.content}>{data.content}</div>
        <div className={videoStyle.etcInfo}>
          <span className={videoStyle.viewIcon}>
            <BsPlay />
          </span>
          <span>{data.view}</span>
          <span class={videoStyle.txt_dot}>·</span>
          <span>{data.day}</span>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
