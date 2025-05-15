import styles from '../styles/components/NextButton.module.css';
// import { ArrowRight } from 'lucide-react';

export default function NextButton() {
  return (
    <button className={styles.button}>
      {/* <ArrowRight size={20} /> */}
      <span>Avançar para a próxima música</span>
    </button>
  );
}