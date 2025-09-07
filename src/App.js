import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import TarjetaDePerfil from './TarjetaDePerfil';
import ListaDeHabilidades from './ListaDeHabilidades';

function App() {
  const usuario = {
    nombre: "Matías Calazan",
    edad: 27,
    profesion: "Técnico Electromecanico / Estudiante de Análisis de Sistemas",
    ubicacion: "Aguas del Norte - Cafayate"
  };

  const habilidades = [
    "Electricidad y tableros, Mecanica, Soldadura",
    "Capacidad de adaptarme a cualquier entorno laboral",
    "Aprendiendo Git y GitHub",
    "Aprendiendo distintos lenguajes de programación",
    "Análisis crítico y resolución de problemas"
  ];

  return (
    <div className="App" style={{ maxWidth: 800, margin: "40px auto", padding: "0 16px" }}>
      <Titulo
        texto="Mi portfolio simple en React"
        subtitulo="TP - Desarrollo Web"
      />

      <TarjetaDePerfil
        nombre={usuario.nombre}
        edad={usuario.edad}
        profesion={usuario.profesion}
        ubicacion={usuario.ubicacion}
      />

      <ListaDeHabilidades habilidades={habilidades} />
    </div>
  );
}

export default App;
