import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoList from './components/video_list/videoList';
import VideoDetail from './components/video_detail/videoDetail';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(videos => setVideos(videos));
  }, []);

  const selectVideo = (video) => {
    setSelectedVideo(video);
  };

  const handleSearch = query => {
    youtube
      .search(query) //
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
      });
  };

  const onReturn = () => {
    console.log("return")
    youtube
      .mostPopular() //
      .then(videos => {
        setVideos(videos);
        setSelectedVideo(null);
        });
  };

  return (
    <div className={styles.app}>
      <Header onSearch={handleSearch} onReturn={onReturn} />
      <section className={styles.content}>
        {selectedVideo && (
          <div className={styles.detail}>
            <VideoDetail video={selectedVideo} />
          </div>
        )}
        <div className={styles.list}>
          <VideoList
            videos={videos}
            onVideoClick={selectVideo}
            display={selectedVideo ? 'list' : 'grid'}
          />
        </div>
      </section>

    </div>
  );
}

export default App;