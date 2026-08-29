import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/common/Stair'
import { MenuProvider } from './context/MenuContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MenuProvider>
        <Stair>
          <App />
        </Stair>
      </MenuProvider>
    </BrowserRouter>
  </StrictMode>
)