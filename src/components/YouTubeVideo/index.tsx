import React from 'react';

type Props = {
  /** Link completo do YouTube (youtu.be/..., watch?v=..., embed/...) ou só o ID do vídeo. */
  url: string;
  /** Título acessível do vídeo (usado pelo iframe). */
  title: string;
};

/** Extrai o ID de 11 caracteres de qualquer formato comum de link do YouTube. */
function getVideoId(input: string): string | null {
  const value = (input || '').trim();
  if (/^[\w-]{11}$/.test(value)) return value;

  const match = value.match(
    /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/|live\/))([\w-]{11})/,
  );
  return match ? match[1] : null;
}

export default function YouTubeVideo({url, title}: Props): React.ReactElement {
  const id = getVideoId(url);

  if (!id) {
    return (
      <div className="alert alert--warning" role="alert">
        Link do YouTube ausente ou inválido para o vídeo "{title}".
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16 / 9',
        marginBottom: '1rem',
      }}>
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0}}
      />
    </div>
  );
}
