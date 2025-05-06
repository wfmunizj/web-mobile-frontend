import styles from "./page.module.css";

export default function Home() {
    return (
        <main className="main">
            <section className="card">
                <header>
                    <h1 className={styles.title}>
                        Nome da música
                    </h1>
                </header>
                <section>
                    <iframe width="420" height="315"
                        src="https://www.youtube.com/embed/tgbNymZ7vqY">
                    </iframe>
                </section>
            </section>
        </main>
    );
}
