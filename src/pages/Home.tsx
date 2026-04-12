import { useNavigate } from 'react-router-dom'
import { useAccessibility } from '../context/AccessibilityContext'

const mainFeatures = [
  {
    to: '/aprender',
    icon: '🖥️',
    title: 'Aprender a usar o computador',
    description: 'Tutoriais simples sobre rato, teclado, Word, Teams e como guardar e enviar ficheiros.',
    accent: true,
  },
  {
    to: '/portfolio',
    icon: '✍️',
    title: 'Criar o Portefólio',
    description: 'Gera um documento Word base com a estrutura completa e orientações detalhadas em cada secção. Pronto a escrever.',
    accent: true,
  },
  {
    to: '/verificador',
    icon: '🔍',
    title: 'Verificar Texto',
    description: 'Cole o seu texto e receba sugestões de melhoria com exemplos de onde estão os problemas — sem alterar nada automaticamente.',
    accent: false,
  },
  {
    to: '/regras',
    icon: '✅',
    title: 'Regras do RVCC',
    description: 'Checklist interativa com objetivos de páginas por secção. Verifique se o seu portefólio está completo.',
    accent: false,
  },
  {
    to: '/aprender',
    icon: '🎥',
    title: 'Vídeos de Apoio',
    description: 'Galeria de vídeos do YouTube organizados por tema — Word, Teams, internet, ficheiros e muito mais.',
    accent: false,
  },
  {
    to: '/formadores',
    icon: '👩‍🏫',
    title: 'Área de Formadores',
    description: 'Ferramentas úteis, vídeos para partilhar com formandos, FAQ e guias para o processo RVCC.',
    accent: false,
  },
]

export default function Home() {
  const navigate = useNavigate()
  const { highContrast } = useAccessibility()

  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 py-10">
      {/* Hero */}
      <section
        className={`rounded-3xl p-8 sm:p-12 mb-10 text-center relative overflow-hidden ${
          highContrast
            ? 'bg-black border-2 border-white text-white'
            : 'bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white'
        }`}
        aria-labelledby="hero-title"
      >
        {!highContrast && (
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none" aria-hidden="true">
            <div className="absolute top-6 left-8 text-8xl">📚</div>
            <div className="absolute bottom-6 right-8 text-8xl">✍️</div>
          </div>
        )}
        <div className="relative animate-fade-in">
          <p className={`text-5xl mb-4`} aria-hidden="true">📚</p>
          <h1
            id="hero-title"
            className={`text-4xl sm:text-5xl font-extrabold mb-4 leading-tight ${
              highContrast ? 'text-yellow-400' : 'text-white'
            }`}
          >
            Apoio ao RVCC
          </h1>
          <p className={`text-xl sm:text-2xl max-w-2xl mx-auto leading-relaxed ${
            highContrast ? 'text-white' : 'text-blue-100'
          }`}>
            Uma plataforma gratuita para o ajudar a criar o seu portefólio RVCC,
            aprender a usar o computador e verificar o seu texto.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => navigate('/portfolio')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-white border-2 border-white'
                  : 'bg-white text-blue-800 hover:bg-blue-50 focus-visible:outline-white shadow-lg'
              }`}
            >
              Começar o Portefólio →
            </button>
            <button
              onClick={() => navigate('/aprender')}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                highContrast
                  ? 'bg-black text-white border-2 border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                  : 'bg-blue-600 text-white hover:bg-blue-500 focus-visible:outline-white border-2 border-blue-500'
              }`}
            >
              Ver Tutoriais
            </button>
          </div>
        </div>
      </section>

      {/* Features grid */}
      <section aria-labelledby="features-title">
        <h2
          id="features-title"
          className={`text-3xl font-extrabold mb-2 text-center ${highContrast ? 'text-white' : 'text-slate-800'}`}
        >
          O que pode fazer aqui?
        </h2>
        <p className={`text-center mb-8 text-lg ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Cada ferramenta foi criada para ser simples e fácil de usar.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 animate-fade-in-delay" role="list">
          {mainFeatures.map(feature => (
            <li key={feature.title}>
              <button
                type="button"
                onClick={() => navigate(feature.to)}
                className={`
                  group w-full text-left flex flex-col gap-3 p-6 rounded-2xl border-2 transition-all duration-200
                  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                  ${
                    highContrast
                      ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                      : feature.accent
                      ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-blue-500 hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline-blue-600'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 focus-visible:outline-blue-600'
                  }
                `}
              >
                <span className="text-4xl" aria-hidden="true">{feature.icon}</span>
                <h3 className={`text-xl font-bold ${
                  feature.accent && !highContrast ? 'text-white' : ''
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-base leading-relaxed ${
                  highContrast ? '' : feature.accent ? 'text-blue-100' : 'text-slate-600'
                }`}>
                  {feature.description}
                </p>
                <span className={`mt-auto text-sm font-semibold flex items-center gap-1 ${
                  highContrast ? '' : feature.accent ? 'text-blue-200' : 'text-blue-600'
                }`} aria-hidden="true">
                  Entrar <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Info strip */}
      <section
        className={`mt-10 flex items-center gap-2 justify-center ${highContrast ? 'text-white' : 'text-slate-400'}`}
        aria-label="Informação sobre a plataforma"
      >
        <span className="text-sm" aria-hidden="true">🔒</span>
        <p className="text-sm">
          Sem registo · sem dados guardados · sem inteligência artificial · funciona totalmente no seu browser
        </p>
      </section>
    </main>
  )
}
