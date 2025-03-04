import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import "./QrCode.css"
import { QrCode } from './QrCode'
// import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <QrCode/>
  </StrictMode>,
)
