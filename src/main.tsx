import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/scss/app.scss'
import './assets/css/tailwind.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { ModalProvider } from './components/modal/ModalProvider.tsx'
import { AlertProvider } from './components/alert/AlertProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <AlertProvider>
          <App />
        </AlertProvider>
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>,
)
