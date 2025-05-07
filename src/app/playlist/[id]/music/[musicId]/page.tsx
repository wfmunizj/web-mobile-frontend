import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className="main">
            <section className={`card ${styles.breadcrumbContainer}`}>
                <header>
                    <nav className={styles.breadcrumb}>
                        <Link href="/" className={styles.breadcrumbLink}>
                            🏠 Início
                        </Link>
                        <span className={styles.separator}>/</span>
                        <Link href="/playlist/algum-Id" className={styles.breadcrumbLink}>
                            Playlist
                        </Link>
                    </nav>
                </header>
            </section>
            <br />
            <section className="card">
                <section>
                    <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </section>
            </section>
            <br />
            <section className="card">
                <header>
                    <h1 className={styles.title}>
                        controlers
                    </h1>
                </header>
            </section>
        </main>
    );
}
