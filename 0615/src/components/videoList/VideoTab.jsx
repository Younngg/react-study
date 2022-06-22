import React from 'react';
import VideoList from './VideoList';
import videoStyle from './video.module.css';

const VideoTab = () => {
  return (
    <div className={videoStyle.videoTabWrap}>
      <h2 className={videoStyle.title}>인기 TV 영상</h2>
      <VideoList />
    </div>
  );
};

export default VideoTab;
