import React, { useEffect, useState } from 'react';
import './app.css';
import Header from './components/header';
import VideoList from './components/video_list/videoList';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCSLsx5JrJEyfnzXdXxYN05MeZQiL2jpnQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  return (
    <>
      <Header />
      <VideoList
        videos={videos} />
    </>
  );
}

export default App;