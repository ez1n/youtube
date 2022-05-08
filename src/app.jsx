import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import VideoList from './components/video_list/videoList';
import styles from './app.module.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyCSLsx5JrJEyfnzXdXxYN05MeZQiL2jpnQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  }, []);

  const handleSearch = query => {
    console.log(`search : ${query}`)
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${query}&type=video&key=AIzaSyCSLsx5JrJEyfnzXdXxYN05MeZQiL2jpnQ`, requestOptions)
      .then(response => response.json())
      .then(
        result => result.items.map(item => ({ ...item, id: item.id.videoId }))
      )
      .then(items => setVideos(items))
      .catch(error => console.log('error', error));
  };

  return (
    <div className={styles.app}>
      <Header
        onSearch={handleSearch} />
      <VideoList
        videos={videos} />
    </div>
  );
}

export default App;