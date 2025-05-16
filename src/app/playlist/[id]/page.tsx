"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/Card/Card";

export default function Home() {
  // Definindo o estado para armazenar a lista de músicas
  const [musicas, setMusicas] = useState<{ title: string }[]>([]); // O estado 'musicas' será um array de objetos com o título de cada música
  const router = useRouter(); // Hook de navegação para redirecionar o usuário para outra página

  // Hook useEffect que é executado ao montar o componente
  useEffect(() => {
    // Pega as músicas armazenadas no localStorage
    const stored = localStorage.getItem("playlistTracks");
    if (stored) {
      // Se encontrar, converte o valor armazenado em JSON e atualiza o estado 'musicas'
      setMusicas(JSON.parse(stored));
    }
  }, []); // O array vazio [] garante que o código será executado apenas uma vez ao montar o componente

  // Função para lidar com a ação de "Play" em uma música
  const handlePlay = (index: number) => {
    // Extrai o 'slug'/nome-da-playlist da URL da página atual
    const slug = window.location.pathname.split("/")[2];
    // Redireciona o usuário para a página da música específica, usando o index da música
    router.push(`/playlist/${slug}/music/${index + 1}`);
  };

  return (
    <main className="main">
      {/* Seção de breadcrumb de navegação */}
      <Card>
        <header className={` ${styles.breadcrumbContainer}`}>
          <nav className={styles.breadcrumb}>
            {/* Link que redireciona o usuário para a página inicial */}
            <Link href="/" className={styles.breadcrumbLink}>
              🏠 Início
            </Link>
          </nav>
        </header>
      </Card>
      <br />
      <Card>
        <header>
          {/* Título da página, informando que as músicas foram encontradas */}
          <h1 className={styles.title}>Músicas encontradas na playlist</h1>
        </header>
        <section className={styles.musicList}>
          {/* Itera sobre o array de músicas e renderiza cada uma */}
          {musicas.map((musica, index) => (
            <div key={index} className={styles.musicItem}>
              {/* Exibe o número da música */}
              <span className={styles.musicIndex}>{index + 1}.</span>
              <div className={styles.musicTitleWrapper}>
                {/* Exibe o título da música */}
                <span className={styles.musicTitle}>{musica.title}</span>
              </div>
              {/* Botão para acionar a função de "Play" */}
              <button
                className={styles.playButton}
                onClick={() => handlePlay(index)} 
              >
                Play
              </button>
            </div>
          ))}
        </section>
      </Card>
    </main>
  );
}
