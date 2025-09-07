export default function ListaDeHabilidades({ habilidades = [] }) {
  if (!habilidades.length) return <p>Sin habilidades cargadas.</p>;

  return (
    <section>
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </section>
  );
}
