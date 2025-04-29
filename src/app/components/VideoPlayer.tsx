import styles from '../styles/components/VideoPlayer.module.css';

export default function VideoPlayer() {
  return (
    <div className={styles.videoContainer}>
      {/* Apenas um iframe de exemplo */}
      <iframe
        className={styles.video}
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Videoclipe"
        allowFullScreen
      ></iframe>
    </div>
  );
}