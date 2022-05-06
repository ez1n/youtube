import VideoItem from '../video_item/videoItem';
import styles from './videoList.module.css'

const VideoList = props => (
  <div className={styles.videos}>
    <ul className={styles.list}>
      {props.videos.map(video => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  </div>
);

export default VideoList;