import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Style from './core/styles/global.styled.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Style.GlobalStyle />
    <App />
  </React.StrictMode>,
)
