import './App.css';
import React, { useState } from "react";
import Titulo from "./Titulo";
import TarjetaDePerfil from "./TarjetaDePerfil";
import ListaDeHabilidades from "./ListaDeHabilidades";

function App() {
  const usuario = {
    nombre: "Calazan, Matias",
    profesion: "Operario en Aguas del Norte-Cafayate",
    edad: 27
  };
  const [mostrarLista, setMostrarLista] = useState(true);
  const toggleLista = () => {
    setMostrarLista(!mostrarLista);
  };
  const habilidades = ["Adaptabilidad rapida a cualquier entorno de trabajo", "Tecnicas y practicas (Electricidad, Mecanica, Soldadura)", "Pensamiento critico", "Actitud de aprendisaje constante y orientacion a resolver problemas reales"];

  return (
    <div className="App">
      <Titulo />
      <TarjetaDePerfil usuario={usuario} />

      <button onClick={toggleLista}>
        {mostrarLista ? "Ocultar habilidades" : "Mostrar habilidades"}
      </button>
      {mostrarLista && <ListaDeHabilidades habilidades={habilidades} />}
    </div>
  );
}

export default App;
