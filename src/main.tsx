import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import store from './core/redux/configureStore.ts';
import { setLoading } from './core/redux/tasks.ts';

store.subscribe(() => console.log("updated", store.getState()
))
store.dispatch(setLoading(false));
store.dispatch({type:"SHOW_ERROR",payload:{error:"Not found"}});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
