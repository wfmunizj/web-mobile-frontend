import styles from '../styles/Playlist.module.css';
import MusicList from '../components/MusicList';
import VideoPlayer from '../components/VideoPlayer';
import NextButton from '../components/NextButton';
import Link from 'next/link';

export default function PlaylistPage() {
  return (
    <main className={styles.container}>
      <aside className={styles.sidebar}>
        <MusicList />
      </aside>
      <section className={styles.mainContent}>
        {/* Novo header para o logo */}
        <header className={styles.header}>
          <Link href="/">
            <h1 className={styles.logo}>MyMusicApp</h1>
          </Link>
        </header>

        {/* Conteúdo centralizado */}
        <div className={styles.content}>
          <VideoPlayer />
          <NextButton />
        </div>
      </section>
    </main>
  );
}