import { useAccessibility } from '../context/AccessibilityContext'
import { getVideoForTutorial } from '../data/videos'

interface TutorialBlockProps {
  id: string
  icon: string
  title: string
  description: string
  steps: string[]
  tips: string[]
  videoUrl?: string
  onBack?: () => void
  onViewVideo?: () => void
}

export default function TutorialBlock({ id, icon, title, description, steps, tips, onBack, onViewVideo }: TutorialBlockProps) {
  const relatedVideo = getVideoForTutorial(id)
  const { highContrast } = useAccessibility()

  return (
    <article
      className={`rounded-2xl border-2 overflow-hidden ${
        highContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200'
      }`}
      aria-labelledby={`tutorial-title-${title.replace(/\s/g, '-')}`}
    >
      {/* Header */}
      <div className={`px-6 py-5 border-b-2 ${
        highContrast ? 'border-white bg-black' : 'border-slate-100 bg-gradient-to-r from-blue-50 to-indigo-50'
      }`}>
        <div className="flex items-center gap-3">
          <span className="text-4xl" aria-hidden="true">{icon}</span>
          <h2
            id={`tutorial-title-${title.replace(/\s/g, '-')}`}
            className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-slate-800'}`}
          >
            {title}
          </h2>
        </div>
        <p className={`mt-2 text-base leading-relaxed ${highContrast ? 'text-white' : 'text-slate-600'}`}>
          {description}
        </p>
      </div>

      <div className="px-6 py-5 flex flex-col gap-6">
        {/* Steps */}
        <section aria-labelledby={`steps-${title.replace(/\s/g, '-')}`}>
          <h3
            id={`steps-${title.replace(/\s/g, '-')}`}
            className={`text-lg font-bold mb-3 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            Passo a passo
          </h3>
          <ol className="flex flex-col gap-2" role="list">
            {steps.map((step, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    highContrast ? 'bg-yellow-400 text-black' : 'bg-blue-100 text-blue-700'
                  }`}
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <p className={`pt-1 leading-relaxed ${highContrast ? 'text-white' : 'text-slate-700'}`}>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* Tips */}
        {tips.length > 0 && (
          <section
            className={`rounded-xl p-4 border-l-4 ${
              highContrast ? 'border-yellow-400 bg-black' : 'border-amber-400 bg-amber-50'
            }`}
            aria-labelledby={`tips-${title.replace(/\s/g, '-')}`}
          >
            <h3
              id={`tips-${title.replace(/\s/g, '-')}`}
              className={`font-bold mb-2 flex items-center gap-2 ${highContrast ? 'text-yellow-400' : 'text-amber-800'}`}
            >
              <span aria-hidden="true">💡</span> Dicas úteis
            </h3>
            <ul className={`flex flex-col gap-1.5 text-sm ${highContrast ? 'text-white' : 'text-amber-900'}`} role="list">
              {tips.map((tip, i) => (
                <li key={i} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

{/* Video link */}
        {relatedVideo && onViewVideo && (
          <div
            className={`rounded-xl p-4 flex items-center justify-between gap-4 border-2 ${
              highContrast ? 'border-yellow-400 bg-black' : 'border-indigo-200 bg-indigo-50'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" aria-hidden="true">🎥</span>
              <div>
                <p className={`font-semibold text-sm ${highContrast ? 'text-white' : 'text-indigo-900'}`}>
                  {relatedVideo.title}
                </p>
                <p className={`text-xs ${highContrast ? 'text-white/70' : 'text-indigo-600'}`}>
                  Vídeo relacionado com este tema
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={onViewVideo}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-white focus-visible:outline-white'
                  : 'bg-indigo-700 text-white hover:bg-indigo-800 focus-visible:outline-indigo-900'
              }`}
              aria-label={`Ver vídeo relacionado: ${relatedVideo.title}`}
            >
              Ver vídeo →
            </button>
          </div>
        )}

        {/* Bottom back button */}
        {onBack && (
          <div className="pt-2">
            <button
              type="button"
              onClick={onBack}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                highContrast
                  ? 'bg-white text-black hover:bg-yellow-400 focus-visible:outline-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 focus-visible:outline-blue-600'
              }`}
              aria-label="Voltar à lista de tutoriais"
            >
              <span aria-hidden="true">←</span> Voltar à lista de tutoriais
            </button>
          </div>
        )}
      </div>
    </article>
  )
}
