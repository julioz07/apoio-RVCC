import { useAccessibility } from '../context/AccessibilityContext'

export default function Footer() {
  const { highContrast } = useAccessibility()

  return (
    <footer
      className={`mt-16 py-8 px-4 border-t ${
        highContrast
          ? 'bg-black text-white border-white'
          : 'bg-blue-900 text-blue-100 border-blue-800'
      }`}
      role="contentinfo"
      aria-label="Rodapé da página"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
        <p>
          <span aria-hidden="true">📚 </span>
          Plataforma de Apoio ao RVCC — gratuita, sem registo, sem dados pessoais.
        </p>
        <p className="flex items-center gap-2">
          <span>Criado por</span>
          <a
            href="https://github.com/julioz07"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-semibold underline hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-yellow-400 rounded ${
              highContrast ? 'text-yellow-400' : 'text-white'
            }`}
            aria-label="Perfil de Júlio Rodrigues no GitHub (abre em nova janela)"
          >
            Júlio Rodrigues
          </a>
          <a
            href="https://github.com/julioz07"
            target="_blank"
            rel="noopener noreferrer"
            aria-hidden="true"
            tabIndex={-1}
            className="hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.9.57.1.78-.25.78-.55v-1.93c-3.19.7-3.86-1.54-3.86-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.96 10.96 0 0 1 2.87-.39c.97.01 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.74.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.38-5.25 5.66.41.36.78 1.06.78 2.14v3.17c0 .3.21.66.79.55C20.71 21.38 24 17.08 24 12 24 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
        </p>
      </div>
    </footer>
  )
}
