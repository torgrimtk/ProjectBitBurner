import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { HiddenPostsProvider } from './context/HiddenPostsContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HiddenPostsProvider>
    <App />
  </HiddenPostsProvider>
)
