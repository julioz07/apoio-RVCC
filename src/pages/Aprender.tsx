import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import TutorialBlock from '../components/TutorialBlock'
import { tutorials, tutorialCategories } from '../data/tutorials'

export default function Aprender() {
  const { highContrast } = useAccessibility()
  const [activeCategory, setActiveCategory] = useState<string>('basico')
  const [openTutorial, setOpenTutorial] = useState<string | null>(null)

  const filtered = tutorials.filter(t => t.category === activeCategory)
  const selectedTutorial = tutorials.find(t => t.id === openTutorial)

  return (
    <main id="main-content" className="max-w-7xl mx-auto px-4 py-10">
      {/* Page header */}
      <header className="mb-8 animate-fade-in">
        <h1 className={`text-4xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
          <span aria-hidden="true">📚 </span>Aprender a usar o computador
        </h1>
        <p className={`text-xl ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Escolha um tema e aprenda ao seu ritmo — passo a passo, com dicas e vídeos.
        </p>
      </header>

      {/* Category tabs */}
      <nav aria-label="Categorias de tutoriais" className="mb-8">
        <ul className="flex flex-wrap gap-3" role="list">
          {tutorialCategories.map(cat => (
            <li key={cat.id}>
              <button
                type="button"
                onClick={() => { setActiveCategory(cat.id); setOpenTutorial(null) }}
                aria-pressed={activeCategory === cat.id}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold border-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  activeCategory === cat.id
                    ? highContrast
                      ? 'bg-yellow-400 text-black border-yellow-400 focus-visible:outline-white'
                      : 'bg-blue-700 text-white border-blue-700 shadow-md focus-visible:outline-blue-900'
                    : highContrast
                    ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-blue-400 hover:text-blue-700 focus-visible:outline-blue-600'
                }`}
              >
                <span aria-hidden="true">{cat.icon}</span>
                <span>{cat.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Tutorial list or detail */}
      {selectedTutorial ? (
        <div className="animate-fade-in">
          <button
            type="button"
            onClick={() => setOpenTutorial(null)}
            className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              highContrast
                ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600'
            }`}
            aria-label="Voltar à lista de tutoriais"
          >
            ← Voltar à lista
          </button>
          <TutorialBlock {...selectedTutorial} onBack={() => setOpenTutorial(null)} />
        </div>
      ) : (
        <section aria-labelledby="tutorial-list-heading" className="animate-fade-in">
          <h2 id="tutorial-list-heading" className="sr-only">
            Tutoriais de {tutorialCategories.find(c => c.id === activeCategory)?.label}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {filtered.map(tutorial => (
              <li key={tutorial.id}>
                <button
                  type="button"
                  onClick={() => setOpenTutorial(tutorial.id)}
                  className={`group w-full text-left flex flex-col gap-3 p-6 rounded-2xl border-2 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 h-full ${
                    highContrast
                      ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 focus-visible:outline-blue-600'
                  }`}
                  aria-label={`Ver tutorial: ${tutorial.title}`}
                >
                  <span className="text-4xl" aria-hidden="true">{tutorial.icon}</span>
                  <h3 className={`text-lg font-bold ${highContrast ? '' : 'text-slate-800'}`}>
                    {tutorial.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${highContrast ? '' : 'text-slate-500'}`}>
                    {tutorial.description.slice(0, 100)}…
                  </p>
                  {tutorial.videoUrl && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full w-fit ${
                      highContrast ? 'border border-white' : 'bg-blue-50 text-blue-600'
                    }`} aria-label="Inclui vídeo de apoio">
                      🎥 Inclui vídeo
                    </span>
                  )}
                  <span className={`mt-auto text-sm font-semibold flex items-center gap-1 ${
                    highContrast ? '' : 'text-blue-600'
                  }`} aria-hidden="true">
                    Ver tutorial <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
