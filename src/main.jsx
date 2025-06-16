import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './layout/header.jsx';
import Footer from './layout/footer.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="container-fluid p-0">
      <App />
      <Footer />
    </div>

  </StrictMode>,
)
