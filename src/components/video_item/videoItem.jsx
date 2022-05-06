import React from 'react';
import styles from './videoItem.module.css'

const VideoItem = props => (
    <li className={styles.item}>
      <img
        src={props.video.snippet.thumbnails.default.url}
        className={styles.thumbnails}
      ></img>
      <li className={styles.description}>
        <li className={styles.title}>{props.video.snippet.title}</li>
        <li className={styles.channel}>{props.video.snippet.channelTitle}</li>
      </li>
    </li>
);

export default VideoItem;