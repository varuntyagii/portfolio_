import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stair from './components/common/Stair'
import { MenuProvider } from './context/MenuContext'
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const lenis = new Lenis({
  duration: 1.2,
  smoothWheel: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

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