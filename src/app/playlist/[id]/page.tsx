import styles from "./page.module.css";

export default function Home() {
    return (
        <main className="main">
            <section className="card">
                <header>
                    <h1 className={styles.title}>
                        Músicas encontradas na playlist
                    </h1>
                </header>
                <section>
                    <p>Exibir lista de musicas</p>
                </section>
            </section>
        </main>
    );
}
