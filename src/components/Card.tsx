import { useAccessibility } from '../context/AccessibilityContext'

interface CardProps {
  icon: string
  title: string
  description: string
  onClick?: () => void
  href?: string
  accent?: boolean
  className?: string
}

export default function Card({ icon, title, description, onClick, href, accent, className = '' }: CardProps) {
  const { highContrast } = useAccessibility()

  const base = `
    group relative flex flex-col gap-3 p-6 rounded-2xl border-2 transition-all duration-200
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    ${
      highContrast
        ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
        : accent
        ? 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-blue-500 hover:from-blue-500 hover:to-indigo-600 shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-0.5 focus-visible:outline-blue-600'
        : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-100 hover:-translate-y-0.5 focus-visible:outline-blue-600'
    }
    ${className}
  `

  const content = (
    <>
      <span className="text-4xl" aria-hidden="true">{icon}</span>
      <h3 className={`text-xl font-bold ${accent && !highContrast ? 'text-white' : ''}`}>
        {title}
      </h3>
      <p className={`text-base leading-relaxed ${
        highContrast ? '' : accent ? 'text-blue-100' : 'text-slate-600'
      }`}>
        {description}
      </p>
      {(onClick || href) && (
        <span className={`mt-auto text-sm font-semibold flex items-center gap-1 ${
          highContrast ? '' : accent ? 'text-blue-200' : 'text-blue-600'
        }`} aria-hidden="true">
          Entrar <span className="group-hover:translate-x-1 transition-transform">→</span>
        </span>
      )}
    </>
  )

  if (href) {
    return (
      <a href={href} className={base}>
        {content}
      </a>
    )
  }

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={base}>
        {content}
      </button>
    )
  }

  return <div className={base}>{content}</div>
}
