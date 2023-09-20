import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import dataDestacados from './components/destacados/dataDestacados.json'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App dataDestacados = {dataDestacados} />
  </React.StrictMode>,
)
