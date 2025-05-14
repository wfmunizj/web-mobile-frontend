"use client";

import styles from "./page.module.css";
import slugify from "slugify";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  // Definindo os estados locais para o link, carregamento, progresso e total de músicas.
  const [link, setLink] = useState(""); // Estado para armazenar o link da playlist
  const [loading, setLoading] = useState(false); // Estado para controlar o carregamento
  const [progress, setProgress] = useState(0); // Estado para controlar o progresso das músicas carregadas
  const [total, setTotal] = useState(0); // Estado para armazenar o total de músicas na playlist
  const router = useRouter(); // Hook para navegar para outra página após a busca da playlist

  // Função que lida com a busca da playlist e o processo de carregamento das músicas
  const handleBuscar = async () => {
    // Inicia o processo de busca
    setLoading(true); 
    setProgress(0); 
    setTotal(0); 
    
    console.time("Tempo de requisição da API"); // Marca o tempo de requisição à API

    // Realiza uma requisição POST para a API que buscará as músicas da playlist
    const res = await fetch("http://localhost:3001/api/playlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ link }), // Envia o link da playlist no corpo da requisição
    });

    console.timeEnd("Tempo de requisição da API"); // Marca o tempo final da requisição à API

    // Aguarda a resposta da API e converte a resposta para JSON
    const data = await res.json();

    // Se a resposta contiver informações da playlist, processa as músicas
    if (data.tracks && data.name) {
      setTotal(data.tracks.length); // Define o total de músicas na playlist

      const loadedTracks = []; // Array para armazenar as músicas carregadas

      console.time("Testando eficiência"); // Marca o tempo para testar a eficiência do carregamento

      // Itera sobre as músicas retornadas pela API
      for (let i = 0; i < data.tracks.length; i++) {
        loadedTracks.push(data.tracks[i]); // Adiciona a música ao array
        setProgress(i + 1); // Atualiza o progresso
        await new Promise((r) => setTimeout(r, 100)); // Adiciona um atraso para evitar sobrecarga
      }

      console.timeEnd("Testando eficiência fim"); // Marca o tempo final de teste de eficiência

      // Armazena as músicas carregadas no localStorage para acesso posterior
      localStorage.setItem("playlistTracks", JSON.stringify(loadedTracks));

      // Cria uma versão do nome da playlist para usá-lo na URL
      const playlistSlug = slugify(data.name, { lower: true });

      // Navega para a página da playlist com o nome da na URL
      router.push(`/playlist/${playlistSlug}`);
    }

    setLoading(false); 
  };

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
            value={link} // O valor do input é controlado pelo estado 'link'
            onChange={(e) => setLink(e.target.value)} // Atualiza o estado 'link' com o valor do input
          />
          <button
            className={styles.button}
            onClick={handleBuscar}
            disabled={loading} // Desabilita o botão durante o carregamento
          >
            {loading ? "Buscando..." : "Buscar"} {/* Exibe texto diferente baseado no estado de carregamento */}
          </button>
        </section>
      </section>

      {/* Exibe o overlay de carregamento caso o estado 'loading' seja verdadeiro */}
      {loading && (
        <div className={styles.overlay}>
          <div className={styles.loaderCard}>
            <h2 className={styles.loaderTitle}>Carregando playlist</h2>
            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{ width: `${(progress / total) * 100}%` }} // A largura da barra de progresso é calculada dinamicamente
              ></div>
            </div>
            <p className={styles.progressText}>
              {progress} de {total} músicas carregadas (
              {total > 0 ? Math.round((progress / total) * 100) : 0}%)
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
