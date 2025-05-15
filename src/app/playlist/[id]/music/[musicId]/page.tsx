"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";

export default function MusicPage() {
  // Obtém os parâmetros da URL, especificamente o 'id' da playlist e o 'musicId' da música
  const { id, musicId } = useParams() as { id: string; musicId: string };
  const router = useRouter();

  // Estado para armazenar as músicas da playlist
  const [musicas, setMusicas] = useState<
    {
      youtubeUrl: string; // URL do vídeo no YouTube
      title: string; // Título da música
    }[]
  >([]);

  // Hook useEffect que é executado ao montar o componente
  useEffect(() => {
    // Tenta pegar as músicas armazenadas no localStorage
    const stored = localStorage.getItem("playlistTracks");
    if (stored) {
      // Se encontrar, converte o valor armazenado em JSON e atualiza o estado 'musicas'
      setMusicas(JSON.parse(stored));
    }
  }, []); // O array vazio [] garante que o código será executado apenas uma vez ao montar o componente

  // Ajusta o índice da música para começar do 0 (pois musicId começa do 1 na URL)
  const musicIndex = parseInt(musicId) - 1;

  // Verifica se o índice da música é válido
  if (isNaN(musicIndex) || musicIndex < 0 || musicIndex >= musicas.length) {
    // Caso o índice da música esteja fora do intervalo, exibe uma mensagem
    return <div>Índice de música fora do intervalo</div>;
  }

  // Obtém a música do estado com base no índice
  const musica = musicas[musicIndex];

  const irParaAnterior = () => {
    if (musicIndex > 0) {
      // Redireciona para a página da música anterior
      router.push(`/playlist/${id}/music/${musicIndex}`);
    }
  };

  const irParaProxima = () => {
    if (musicIndex < musicas.length - 1) {
      // Redireciona para a página da próxima música
      router.push(`/playlist/${id}/music/${musicIndex + 2}`);
    }
  };

  function getYouTubeId(url: string | null | undefined): string | null {
    if (!url) return null;

    const match = url.match(/(?:v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? match[1] : null;
  }

  const youtubeId = getYouTubeId(musica.youtubeUrl);

  return (
    <main className="main">
      {/* Seção de breadcrumb de navegação */}
      <section className={`card ${styles.breadcrumbContainer}`}>
        <header>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              🏠 Início
            </Link>
            <span className={styles.separator}>/</span>
            <Link href={`/playlist/${id}`} className={styles.breadcrumbLink}>
              Playlist
            </Link>
            <span className={styles.separator}>/</span>
            <span className={styles.breadcrumbLink}>
              Música {musicIndex + 1}
            </span>
          </nav>
        </header>
      </section>
      <br />
      <section className="card">
        <section>
          {/* Player do YouTube incorporado com a URL da música */}
          <iframe
            className={styles.youtubePlayer}
            src={youtubeId ? `https://www.youtube.com/embed/${youtubeId}` : ""}
          ></iframe>
        </section>
      </section>
      <br />
      <section className="card">
        <header>
          <h1 className={styles.title}>{musica.title}</h1>
        </header>
        <div className={styles.controls}>
          <button
            onClick={irParaAnterior}
            className={styles.playButton}
            disabled={musicIndex === 0} // Desabilita o botão se for a primeira música
          >
            ⏮ Anterior
          </button>

          <button
            onClick={irParaProxima}
            className={styles.playButton}
            disabled={musicIndex === musicas.length - 1} // Desabilita o botão se for a última música
          >
            Próxima ⏭
          </button>
        </div>
      </section>
    </main>
  );
}
