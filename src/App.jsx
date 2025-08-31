import React from 'react';
import './App.css';

function App() {
  // Objeto para estructurar la información según las buenas prácticas de React
  const continuidadData = {
    secciones: [
      {
        id: 1,
        
        descripcion: "Con la app Duplicación del iPhone puedes ver la pantalla de tu teléfono en el Mac y controlarlo a distancia. Las funcionalidades de Continuidad te permiten responder llamadas y mensajes directamente desde el Mac. Incluso puedes copiar imágenes, videos o texto del iPhone y pegar todo en otra app en el Mac. Y con iCloud, puedes acceder a tus archivos desde ambos dispositivos.",
        imagen: "https://www.apple.com/co/iphone/home/images/overview/augment/mac__b2km5lqjzk1y_large.jpg", // Aquí colocarás la imagen que subiste
        altText: "iPhone y MacBook mostrando la duplicación de pantalla con continuidad",
        expandido: true
      },
      {
        id: 2,
        titulo: "iPhone y Apple Watch",
        descripcion: "",
        imagen: "",
        altText: "",
        expandido: false
      },
      {
        id: 3,
        titulo: "iPhone y AirPods",
        descripcion: "",
        imagen: "",
        altText: "",
        expandido: false
      }
    ]
  };

  return (
    <div className="App">
      <section className="continuidad-section">
        <div className="container">
          {continuidadData.secciones.map((seccion) => (
            <div key={seccion.id} className="seccion-continuidad">
              <div className="seccion-header">
                <h2 className="seccion-titulo">{seccion.titulo}</h2>
                <button className="expand-button">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none"
                    className={seccion.expandido ? 'rotated' : ''}
                  >
                    <path 
                      d="M7 10L12 15L17 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              
              {seccion.expandido && (
                <div className="seccion-contenido">
                  <div className="contenido-wrapper">
                    <div className="texto-contenido">
                      <p className="descripcion">{seccion.descripcion}</p>
                    </div>
                    
                    {seccion.imagen && (
                      <div className="imagen-contenido">
                        <img 
                          src={seccion.imagen} 
                          alt={seccion.altText}
                          className="imagen-principal"
                        />
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;