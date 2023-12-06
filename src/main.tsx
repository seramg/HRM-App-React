import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {  fetchFirebaseData, setLoading } from './core/redux/actions.ts';
import store from './core/redux/configureStore.ts';

store.subscribe(() => console.log("updated", store.getState()
))
store.dispatch(fetchFirebaseData());
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
