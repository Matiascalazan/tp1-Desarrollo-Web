export default function Titulo({ texto, subtitulo }) {
  return (
    <header style={{ marginBottom: 16 }}>
      <h1>{texto}</h1>
      {subtitulo && <p style={{ opacity: 0.75 }}>{subtitulo}</p>}
    </header>
  );
}