import React from "react";

function TarjetaDePerfil({ usuario }) {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "15px",
            margin: "10px auto",
            maxWidth: "300px",
            textAlign: "center"
        }}>
            <h2>{usuario.nombre}</h2>
            <p><strong>Profesión:</strong> {usuario.profesion}</p>
            <p><strong>Edad:</strong> {usuario.edad} años</p>
        </div>
    );
}

export default TarjetaDePerfil;
