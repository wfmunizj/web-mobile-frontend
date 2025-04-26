import styles from '../styles/components/MusicList.module.css';

export default function MusicList() {
  // Apenas exemplo fixo para o layout
  const songs = [
    'Música 1',
    'Música 2',
    'Música 3',
    'Música 4',
    'Música 5',
  ];

  return (
    <ul className={styles.list}>
      {songs.map((song, index) => (
        <li key={index} className={styles.listItem}>
          {song}
        </li>
      ))}
    </ul>
  );
}