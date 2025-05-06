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
                    <p>Exibir player</p>
                </section>
            </section>
        </main>
    );
}
