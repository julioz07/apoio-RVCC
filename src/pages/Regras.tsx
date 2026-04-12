import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import { portfolioRules, textRulesChecklist } from '../data/rules'

export default function Regras() {
  const { highContrast } = useAccessibility()
  const [checked, setChecked] = useState<Record<string, boolean>>({})

  const toggle = (id: string) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  const total = portfolioRules.length + textRulesChecklist.length
  const done = Object.values(checked).filter(Boolean).length
  const pct = Math.round((done / total) * 100)

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-10">
      {/* Page header */}
      <header className="mb-8 animate-fade-in">
        <h1 className={`text-4xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
          <span aria-hidden="true">✅ </span>Regras do RVCC
        </h1>
        <p className={`text-xl ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Checklist para garantir que o seu portefólio está completo e bem estruturado.
        </p>
      </header>

      {/* Aviso de variação regional */}
      <div className={`rounded-xl border-2 p-4 mb-8 flex gap-3 items-start ${
        highContrast ? 'bg-black border-white text-white' : 'bg-amber-50 border-amber-300'
      }`} role="note">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">⚠️</span>
        <p className={`text-sm ${highContrast ? 'text-white' : 'text-amber-800'}`}>
          Estas são as regras de <strong>base comuns</strong> ao processo RVCC. Cada centro pode ter
          requisitos adicionais ou ligeiramente diferentes — confirme sempre com a sua formadora ou formador.
        </p>
      </div>

      {/* Progress */}
      <div
        className={`rounded-2xl border-2 p-5 mb-8 ${
          highContrast ? 'bg-black border-white' : 'bg-white border-slate-200'
        }`}
        role="status"
        aria-live="polite"
        aria-label={`Progresso: ${done} de ${total} itens concluídos`}
      >
        <div className="flex justify-between items-center mb-2">
          <p className={`font-bold text-lg ${highContrast ? 'text-white' : 'text-slate-700'}`}>
            Progresso da checklist
          </p>
          <p className={`text-2xl font-extrabold ${highContrast ? 'text-yellow-400' : 'text-blue-700'}`}>
            {done}/{total}
          </p>
        </div>
        <div className={`h-4 rounded-full ${highContrast ? 'bg-white/20' : 'bg-slate-200'}`} role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
          <div
            className={`h-4 rounded-full transition-all duration-500 ${
              pct === 100
                ? highContrast ? 'bg-yellow-400' : 'bg-green-500'
                : highContrast ? 'bg-yellow-400' : 'bg-blue-600'
            }`}
            style={{ width: `${pct}%` }}
          />
        </div>
        {pct === 100 && (
          <p className={`mt-2 font-semibold text-center ${highContrast ? 'text-yellow-400' : 'text-green-700'}`}>
            🎉 Portefólio completo! Parabéns!
          </p>
        )}
      </div>

      {/* Sections checklist */}
      <section aria-labelledby="portfolio-structure-heading" className="mb-8">
        <h2
          id="portfolio-structure-heading"
          className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}
        >
          📋 Estrutura obrigatória do portefólio
        </h2>

        <ul className="flex flex-col gap-3" role="list">
          {portfolioRules.map(rule => {
            const isChecked = !!checked[rule.id]
            return (
              <li key={rule.id}>
                <label
                  htmlFor={`check-${rule.id}`}
                  className={`flex gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    isChecked
                      ? highContrast
                        ? 'bg-yellow-400 text-black border-yellow-400'
                        : 'bg-green-50 border-green-400'
                      : highContrast
                      ? 'bg-black text-white border-white hover:bg-white hover:text-black'
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`check-${rule.id}`}
                    checked={isChecked}
                    onChange={() => toggle(rule.id)}
                    className={`w-6 h-6 flex-shrink-0 mt-0.5 rounded cursor-pointer accent-blue-600 ${
                      highContrast ? 'accent-yellow-400' : ''
                    }`}
                    aria-label={`Marcar como concluído: ${rule.title}`}
                  />
                  <div className="flex flex-col gap-1">
                    <p className={`font-bold text-lg ${isChecked && !highContrast ? 'text-green-700 line-through' : ''}`}>
                      {rule.title}
                      {rule.required && (
                        <span className={`ml-2 text-xs font-semibold px-2 py-0.5 rounded-full ${
                          highContrast ? 'border border-current' : 'bg-red-100 text-red-700'
                        }`}>
                          Obrigatório
                        </span>
                      )}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      isChecked && !highContrast ? 'text-green-600' : highContrast ? '' : 'text-slate-500'
                    }`}>
                      {rule.description}
                    </p>
                    {rule.tip && (
                      <p className={`text-sm font-medium flex gap-1 items-start ${
                        highContrast ? '' : 'text-amber-700'
                      }`}>
                        <span aria-hidden="true">💡</span>
                        {rule.tip}
                      </p>
                    )}
                  </div>
                </label>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Text quality checklist */}
      <section aria-labelledby="text-quality-heading">
        <h2
          id="text-quality-heading"
          className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}
        >
          📝 Qualidade do texto
        </h2>

        <ul className="flex flex-col gap-3" role="list">
          {textRulesChecklist.map(item => {
            const isChecked = !!checked[item.id]
            return (
              <li key={item.id}>
                <label
                  htmlFor={`check-text-${item.id}`}
                  className={`flex gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                    isChecked
                      ? highContrast
                        ? 'bg-yellow-400 text-black border-yellow-400'
                        : 'bg-green-50 border-green-400'
                      : highContrast
                      ? 'bg-black text-white border-white hover:bg-white hover:text-black'
                      : 'bg-white border-slate-200 hover:border-blue-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    id={`check-text-${item.id}`}
                    checked={isChecked}
                    onChange={() => toggle(item.id)}
                    className={`w-6 h-6 flex-shrink-0 mt-0.5 rounded cursor-pointer ${
                      highContrast ? 'accent-yellow-400' : 'accent-blue-600'
                    }`}
                    aria-label={`Marcar como concluído: ${item.label}`}
                  />
                  <div>
                    <p className={`font-bold ${isChecked && !highContrast ? 'text-green-700 line-through' : ''}`}>
                      {item.label}
                    </p>
                    <p className={`text-sm leading-relaxed ${
                      isChecked && !highContrast ? 'text-green-600' : highContrast ? '' : 'text-slate-500'
                    }`}>
                      {item.description}
                    </p>
                  </div>
                </label>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Reset */}
      {done > 0 && (
        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setChecked({})}
            className={`px-5 py-2 rounded-lg border-2 font-semibold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              highContrast
                ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600'
            }`}
          >
            🔄 Limpar checklist
          </button>
        </div>
      )}
    </main>
  )
}
