import styles from './Card.module.css'

export default function Card({ children }) {
    return (
        <section className={styles.card}>
            {children}
        </section>
    )
}