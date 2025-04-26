import styles from '../styles/components/SearchBar.module.css';

export default function SearchBar() {
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Cole o link da playlist do Spotify"
        className={styles.input}
      />
      <button className={styles.button}>Buscar</button>
    </div>
  );
}