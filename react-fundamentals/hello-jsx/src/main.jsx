import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hello from './Hello.jsx'
import 'tachyons';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Hello greeting={'Hello' + ' React Ninja'}/>
  </StrictMode>,
)
