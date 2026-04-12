import { useAccessibility } from '../context/AccessibilityContext'
import type { TextIssue } from '../utils/textRules'

interface TextAnalyzerProps {
  issues: TextIssue[]
  stats: { words: number; chars: number; paragraphs: number; sentences: number }
}

const typeConfig = {
  error:   { icon: '🔴', label: 'Erro',       bg: 'bg-red-50',    border: 'border-red-300',    text: 'text-red-800',    badgeBg: 'bg-red-100',   badgeText: 'text-red-700'   },
  warning: { icon: '🟡', label: 'Atenção',    bg: 'bg-amber-50',  border: 'border-amber-300',  text: 'text-amber-800',  badgeBg: 'bg-amber-100', badgeText: 'text-amber-700' },
  info:    { icon: '🔵', label: 'Sugestão',   bg: 'bg-blue-50',   border: 'border-blue-300',   text: 'text-blue-800',   badgeBg: 'bg-blue-100',  badgeText: 'text-blue-700'  },
}

const hcConfig = {
  error:   { icon: '✖', label: 'Erro'    },
  warning: { icon: '⚠', label: 'Atenção' },
  info:    { icon: '●', label: 'Info'    },
}

export default function TextAnalyzer({ issues, stats }: TextAnalyzerProps) {
  const { highContrast } = useAccessibility()

  const errors   = issues.filter(i => i.type === 'error')
  const warnings = issues.filter(i => i.type === 'warning')
  const infos    = issues.filter(i => i.type === 'info')

  return (
    <div className="flex flex-col gap-6" role="region" aria-label="Resultados da análise de texto">
      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Palavras',   value: stats.words },
          { label: 'Caracteres', value: stats.chars },
          { label: 'Parágrafos', value: stats.paragraphs },
          { label: 'Frases',     value: stats.sentences },
        ].map(s => (
          <div
            key={s.label}
            className={`rounded-xl border-2 p-4 text-center ${
              highContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200'
            }`}
          >
            <p className={`text-3xl font-extrabold ${highContrast ? 'text-yellow-400' : 'text-blue-700'}`}>
              {s.value.toLocaleString('pt-PT')}
            </p>
            <p className={`text-sm font-medium ${highContrast ? 'text-white' : 'text-slate-500'}`}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Summary badges */}
      <div className="flex flex-wrap gap-3" aria-label="Resumo dos problemas encontrados">
        {[
          { count: errors.length,   label: 'erro(s)',    color: highContrast ? 'border-white text-white' : 'border-red-300 text-red-700 bg-red-50' },
          { count: warnings.length, label: 'aviso(s)',   color: highContrast ? 'border-white text-white' : 'border-amber-300 text-amber-700 bg-amber-50' },
          { count: infos.length,    label: 'sugestão(oes)', color: highContrast ? 'border-white text-white' : 'border-blue-300 text-blue-700 bg-blue-50' },
        ].map(b => (
          <span
            key={b.label}
            className={`px-4 py-2 rounded-full border-2 font-semibold text-sm ${b.color} ${highContrast ? 'bg-black' : ''}`}
          >
            {b.count} {b.label}
          </span>
        ))}
      </div>

      {issues.length === 0 ? (
        <div className={`rounded-2xl border-2 p-8 text-center ${
          highContrast ? 'bg-black border-white' : 'bg-green-50 border-green-300'
        }`}>
          <p className={`text-5xl mb-3`} aria-hidden="true">✅</p>
          <p className={`text-xl font-bold ${highContrast ? 'text-yellow-400' : 'text-green-700'}`}>
            Nenhum problema encontrado!
          </p>
          <p className={`mt-1 ${highContrast ? 'text-white' : 'text-green-600'}`}>
            O seu texto parece estar bem estruturado.
          </p>
        </div>
      ) : (
        <ul className="flex flex-col gap-3" role="list" aria-label="Lista de problemas encontrados">
          {issues.map((issue, i) => {
            if (highContrast) {
              const hc = hcConfig[issue.type]
              return (
                <li
                  key={i}
                  className="rounded-xl border-2 border-white bg-black p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-yellow-400" aria-hidden="true">{hc.icon}</span>
                    <span className="font-bold text-white">[{hc.label}] {issue.label}</span>
                  </div>
                  <p className="text-white text-sm">{issue.description}</p>
                  <p className="text-yellow-400 text-sm mt-1 font-medium">→ {issue.suggestion}</p>
                  {issue.excerpts && issue.excerpts.length > 0 && (
                    <div className="mt-2">
                      <p className="text-xs font-semibold mb-1 text-white/60">
                        📍 Exemplos de onde este problema aparece no texto:
                      </p>
                      <ul className="flex flex-col gap-1">
                        {issue.excerpts.map((ex, j) => (
                          <li key={j} className="text-xs font-mono italic text-white/80 border border-white/30 rounded px-2 py-1">
                            &ldquo;{ex}&rdquo;
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            }
            const cfg = typeConfig[issue.type]
            return (
              <li
                key={i}
                className={`rounded-xl border-2 p-4 ${cfg.bg} ${cfg.border}`}
                role="listitem"
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">{cfg.icon}</span>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${cfg.badgeBg} ${cfg.badgeText}`}>
                        {cfg.label}
                      </span>
                      <p className={`font-bold ${cfg.text}`}>{issue.label}</p>
                    </div>
                    <p className={`text-sm ${cfg.text}`}>{issue.description}</p>
                    <p className={`text-sm mt-1 font-medium ${cfg.text} opacity-80`}>
                      💡 {issue.suggestion}
                    </p>
                    {issue.excerpts && issue.excerpts.length > 0 && (
                      <div className="mt-2">
                        <p className={`text-xs font-semibold mb-1 ${cfg.text} opacity-70`}>
                          📍 Exemplos de onde este problema aparece no texto:
                        </p>
                        <ul className="flex flex-col gap-1" aria-label="Trechos com este problema">
                          {issue.excerpts.map((ex, j) => (
                            <li
                              key={j}
                              className={`text-xs rounded-lg px-3 py-1.5 font-mono italic border ${cfg.border} bg-white/60 ${cfg.text}`}
                            >
                              &ldquo;{ex}&rdquo;
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
