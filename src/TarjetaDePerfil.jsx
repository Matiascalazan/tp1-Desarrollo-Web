export default function TarjetaDePerfil({ nombre, edad, profesion, ubicacion }) {
  return (
    <div style={{
      border: "1px solid #e5e5e5",
      borderRadius: 12,
      padding: 16,
      marginBottom: 16,
      boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
    }}>
      <h2 style={{ marginTop: 0 }}>Perfil</h2>
      <p><strong>Nombre:</strong> {nombre}</p>
      <p><strong>Edad:</strong> {edad}</p>
      <p><strong>Profesión:</strong> {profesion}</p>
      <p><strong>Ubicación:</strong> {ubicacion}</p>
    </div>
  );
}

