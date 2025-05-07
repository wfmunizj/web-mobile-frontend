import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    const musicas = [
        "Céu de Diamantes",
        "Ritmo da Chuva",
        "Noite Estrelada",
        "Caminhos do Coração",
        "Reflexos da Alma",
        "Acordes do Destino",
        "Luzes da Cidade",
        "Canção da Esperança",
        "Sussurros do Vento",
        "Além do Horizonte",
        "Ecos do Passado",
        "Versos Inesquecíveis",
    ];

    return (
        <main className="main">
            <section className={`card ${styles.breadcrumbContainer}`}>
                <header>
                    <nav className={styles.breadcrumb}>
                        <Link href="/" className={styles.breadcrumbLink}>
                            🏠 Início
                        </Link>
                    </nav>
                </header>
            </section>
            <br />
            <section className="card">
                <header>
                    <h1 className={styles.title}>
                        Músicas encontradas na playlist
                    </h1>
                </header>
                <section className={styles.musicList}>
                    {musicas.map((musica, index) => (
                        <div key={index} className={styles.musicItem}>
                            <span className={styles.musicIndex}>{index + 1}.</span>
                            <div className={styles.musicTitleWrapper}>
                                <span className={styles.musicTitle}>{musica}</span>
                            </div>
                            <button className={styles.playButton}>Play</button>
                        </div>
                    ))}
                </section>
            </section>
        </main>
    );
}
