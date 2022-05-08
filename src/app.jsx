import React, { useEffect, useState } from 'react';
import Header from './components/header/header';
import VideoList from './components/video_list/videoList';
import styles from './app.module.css';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular()
      .then(videos => setVideos(videos));
  }, []);

  const handleSearch = query => {
    youtube
      .search(query)
      .then(videos => setVideos(videos));
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