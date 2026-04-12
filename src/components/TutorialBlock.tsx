import { useAccessibility } from '../context/AccessibilityContext'

interface TutorialBlockProps {
  icon: string
  title: string
  description: string
  steps: string[]
  tips: string[]
  videoUrl?: string
}

export default function TutorialBlock({ icon, title, description, steps, tips, videoUrl }: TutorialBlockProps) {
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

        {/* Video embed */}
        {videoUrl && (
          <section aria-labelledby={`video-${title.replace(/\s/g, '-')}`}>
            <h3
              id={`video-${title.replace(/\s/g, '-')}`}
              className={`text-lg font-bold mb-3 ${highContrast ? 'text-white' : 'text-slate-700'}`}
            >
              <span aria-hidden="true">🎥 </span>Vídeo de apoio
            </h3>
            <div className="relative aspect-video rounded-xl overflow-hidden border-2 border-slate-200">
              <iframe
                src={videoUrl}
                title={`Vídeo de apoio: ${title}`}
                className="absolute inset-0 w-full h-full"
                allowFullScreen
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
          </section>
        )}
      </div>
    </article>
  )
}
