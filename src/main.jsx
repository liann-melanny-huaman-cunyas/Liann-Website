// Renderizar una aplicacion con React
import React from 'react'
//Biblioteca para definir componente y UI
import ReactDOM from 'react-dom/client'
//Imprtar el coompnente principal
import App from './App.jsx'
//Importar estilos
import './index.css'

//Crear un "root" para renderizar y elegir el elemento #root y renderizar
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
