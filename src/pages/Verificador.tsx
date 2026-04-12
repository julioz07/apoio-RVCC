import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import TextAnalyzer from '../components/TextAnalyzer'
import { analyzeText, getTextStats } from '../utils/textRules'

export default function Verificador() {
  const { highContrast } = useAccessibility()
  const [text, setText] = useState('')
  const [showResults, setShowResults] = useState(false)

  const issues = showResults ? analyzeText(text) : []
  const stats = getTextStats(text)

  function handleAnalyze() {
    if (text.trim().length === 0) return
    setShowResults(true)
  }

  function handleClear() {
    setText('')
    setShowResults(false)
  }

  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 py-10">
      {/* Page header */}
      <header className="mb-8 animate-fade-in">
        <h1 className={`text-4xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
          <span aria-hidden="true">🔍 </span>Verificador de Texto
        </h1>
        <p className={`text-xl ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Cole o seu texto abaixo e recebe sugestões de melhoria — o texto nunca é alterado automaticamente.
        </p>
      </header>

      {/* Warning note */}
      <div className={`rounded-xl border-2 p-4 mb-6 flex gap-3 items-start ${
        highContrast ? 'bg-black border-white text-white' : 'bg-blue-50 border-blue-200'
      }`} role="note">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">ℹ️</span>
        <p className={`text-sm ${highContrast ? 'text-white' : 'text-blue-800'}`}>
          Este verificador <strong>não corrige nada automaticamente</strong> — apenas aponta problemas e dá sugestões.
          Também não guarda nem envia o seu texto para nenhum servidor.
        </p>
      </div>

      {/* Text input */}
      <section aria-labelledby="text-input-label" className="mb-6">
        <label
          id="text-input-label"
          htmlFor="text-input"
          className={`block text-lg font-bold mb-2 ${highContrast ? 'text-white' : 'text-slate-700'}`}
        >
          Cole aqui o seu texto:
        </label>
        <textarea
          id="text-input"
          value={text}
          onChange={e => { setText(e.target.value); setShowResults(false) }}
          placeholder="Cole aqui o texto do seu portefólio para o verificar..."
          rows={14}
          aria-describedby="text-helper"
          className={`w-full rounded-xl border-2 p-4 text-base leading-relaxed resize-y transition-colors focus:outline-none focus-visible:ring-2 ${
            highContrast
              ? 'bg-black text-white border-white placeholder-slate-400 focus-visible:ring-yellow-400'
              : 'border-slate-300 bg-slate-50 focus:border-blue-400 focus-visible:ring-blue-400'
          }`}
        />
        <p id="text-helper" className={`mt-1 text-sm ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          {stats.words > 0 ? `${stats.words} palavra(s) — pronto para verificar` : 'Escreva ou cole o texto acima.'}
        </p>
      </section>

      {/* Actions */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button
          type="button"
          onClick={handleAnalyze}
          disabled={text.trim().length === 0}
          aria-disabled={text.trim().length === 0}
          className={`px-8 py-3 rounded-xl font-bold text-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            text.trim().length === 0
              ? 'opacity-50 cursor-not-allowed bg-slate-300 text-slate-500'
              : highContrast
              ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-white'
              : 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-blue-900 shadow-md shadow-blue-200'
          }`}
        >
          🔍 Verificar texto
        </button>
        {text.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className={`px-6 py-3 rounded-xl font-semibold border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              highContrast
                ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600'
            }`}
          >
            🗑️ Limpar
          </button>
        )}
      </div>

      {/* Results */}
      {showResults && (
        <section aria-live="polite" aria-atomic="true" className="animate-fade-in">
          <h2 className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}>
            Resultados da verificação
          </h2>
          <TextAnalyzer issues={issues} stats={stats} />
        </section>
      )}
    </main>
  )
}
