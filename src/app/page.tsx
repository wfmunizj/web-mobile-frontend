import styles from './styles/Home.module.css';
import SearchBar from './components/SearchBar';

export default function Home() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Assista aos videoclipes de todas as músicas da sua playlist favorita em um só lugar — com mais facilidade!
        </h1>
        <SearchBar />
      </div>
    </main>
  );
}