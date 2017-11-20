
import React from 'react';

const VideoDetails = ({ video }) => {

  if(!video){
    console.log('rendering...');
    return <div>Loading Database...</div>
  }
  const VideoID = video.id.videoId;
  const url = 'https://www.youtube.com/embed/' + VideoID;

  return(
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetails;
