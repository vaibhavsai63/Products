import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App'
import { CustomNavbar } from './components/CustomNavbar.jsx'
import { CustomCarousel } from './components/CustomCarousel.jsx'
import Products from './components/Products.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomNavbar/>
    <CustomCarousel/>
    <Products/>
    <App/>
  </StrictMode>
)
