import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useAccessibility } from '../context/AccessibilityContext'

const navItems = [
  { to: '/', label: 'Início', icon: '🏠' },
  { to: '/aprender', label: 'Aprender', icon: '📚' },
  { to: '/portfolio', label: 'Portefólio', icon: '✍️' },
  { to: '/verificador', label: 'Verificar Texto', icon: '🔍' },
  { to: '/regras', label: 'Regras RVCC', icon: '✅' },
  { to: '/formadores', label: 'Formadores', icon: '👩‍🏫' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { highContrast, toggleHighContrast, fontSize, setFontSize } = useAccessibility()

  return (
    <header
      className={`sticky top-0 z-40 shadow-md ${
        highContrast
          ? 'bg-black text-white border-b-2 border-white'
          : 'bg-blue-800 text-white'
      }`}
      role="banner"
    >
      {/* Accessibility bar */}
      <div
        className={`flex items-center justify-end gap-2 px-4 py-1 text-sm ${
          highContrast ? 'bg-black border-b border-white' : 'bg-blue-900'
        }`}
        aria-label="Barra de acessibilidade"
      >
        <span className="hidden sm:inline text-blue-200 text-xs mr-2">Acessibilidade:</span>

        <button
          onClick={toggleHighContrast}
          className={`px-3 py-1 rounded text-xs font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-yellow-400 ${
            highContrast
              ? 'bg-yellow-400 text-black hover:bg-yellow-300'
              : 'bg-blue-700 text-white hover:bg-blue-600 border border-blue-500'
          }`}
          aria-pressed={highContrast}
          aria-label="Ativar ou desativar modo de alto contraste"
          title="Alto contraste"
        >
          {highContrast ? '◑ Contraste Normal' : '◑ Alto Contraste'}
        </button>

        <div
          className="flex gap-1"
          role="group"
          aria-label="Tamanho da letra"
        >
          {(['normal', 'large', 'xlarge'] as const).map(size => (
            <button
              key={size}
              onClick={() => setFontSize(size)}
              aria-pressed={fontSize === size}
              aria-label={`Tamanho de letra: ${size === 'normal' ? 'normal' : size === 'large' ? 'grande' : 'muito grande'}`}
              className={`px-2 py-0.5 rounded text-xs font-bold transition-colors ${
                fontSize === size
                  ? 'bg-yellow-400 text-black'
                  : highContrast
                  ? 'bg-black text-white border border-white hover:bg-white hover:text-black'
                  : 'bg-blue-700 text-white hover:bg-blue-600'
              }`}
            >
              {size === 'normal' ? 'A' : size === 'large' ? 'A+' : 'A++'}
            </button>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav
        className="max-w-7xl mx-auto px-4"
        aria-label="Navegação principal"
      >
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-2 font-bold text-lg hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 rounded"
            aria-label="Apoio RVCC — ir para a página inicial"
          >
            <span aria-hidden="true">📚</span>
            <span>Apoio RVCC</span>
          </NavLink>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 ${
                      isActive
                        ? highContrast
                          ? 'bg-yellow-400 text-black'
                          : 'bg-blue-600 text-white'
                        : highContrast
                        ? 'text-white hover:bg-white hover:text-black'
                        : 'text-blue-100 hover:bg-blue-700'
                    }`
                  }
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 ${
              highContrast ? 'hover:bg-white hover:text-black' : 'hover:bg-blue-700'
            }`}
            onClick={() => setMenuOpen(v => !v)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
          >
            <span aria-hidden="true" className="text-2xl">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul id="mobile-menu" className="md:hidden pb-3 flex flex-col gap-1" role="list">
            {navItems.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 ${
                      isActive
                        ? highContrast
                          ? 'bg-yellow-400 text-black'
                          : 'bg-blue-600 text-white'
                        : highContrast
                        ? 'text-white hover:bg-white hover:text-black'
                        : 'text-blue-100 hover:bg-blue-700'
                    }`
                  }
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
