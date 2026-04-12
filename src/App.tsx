import { HashRouter, Routes, Route } from 'react-router-dom'
import { AccessibilityProvider } from './context/AccessibilityContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Aprender from './pages/Aprender'
import Portfolio from './pages/Portfolio'
import Verificador from './pages/Verificador'
import Regras from './pages/Regras'
import Formadores from './pages/Formadores'

export default function App() {
  return (
    <AccessibilityProvider>
      <HashRouter>
        <div className="min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg)', color: 'var(--color-text)' }}>
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/aprender" element={<Aprender />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/verificador" element={<Verificador />} />
              <Route path="/regras" element={<Regras />} />
              <Route path="/formadores" element={<Formadores />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </AccessibilityProvider>
  )
}
