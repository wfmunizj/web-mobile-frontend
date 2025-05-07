import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main">
      <section className="card">
        <header>
          <h1 className={styles.title}>
            Seus clipes favoritos, em um só lugar e com mais facilidade!
          </h1>
        </header>
        <section className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Cole o link da playlist do Spotify"
            className={styles.input}
          />
          <button className={styles.button}>Buscar</button>
        </section>
      </section>
    </main>
  );
}
