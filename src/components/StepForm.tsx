import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'

export interface FormStep {
  id: string
  label: string
  icon: string
  description: string
  /** 'input' shows a text field; 'info' shows a guidance card (no textarea) */
  type?: 'input' | 'info'
  /** Only for type='input' */
  placeholder?: string
  /** Only for type='input' */
  minWords?: number
  /** Lines shown on type='info' steps */
  guidance?: string[]
}

interface StepFormProps {
  steps: FormStep[]
  values: Record<string, string>
  onChange: (id: string, value: string) => void
  currentStep: number
  onNext: () => void
  onBack: () => void
  onSubmit: () => void
  loading?: boolean
}

function countWords(text: string) {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

export default function StepForm({
  steps,
  values,
  onChange,
  currentStep,
  onNext,
  onBack,
  onSubmit,
  loading,
}: StepFormProps) {
  const { highContrast } = useAccessibility()
  const [touched, setTouched] = useState(false)

  const step = steps[currentStep]
  const isInfo = step.type === 'info'
  const value = isInfo ? '' : (values[step.id] ?? '')
  const words = countWords(value)
  const minW = step.minWords ?? 1
  const isValid = isInfo || words >= minW
  const isLast = currentStep === steps.length - 1
  const progress = Math.round(((currentStep + 1) / steps.length) * 100)

  function handleNext() {
    setTouched(true)
    if (isValid) {
      setTouched(false)
      onNext()
    }
  }

  function handleSubmit() {
    setTouched(true)
    if (isValid) onSubmit()
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Progress bar */}
      <div role="progressbar" aria-valuenow={currentStep + 1} aria-valuemin={1} aria-valuemax={steps.length} aria-label={`Passo ${currentStep + 1} de ${steps.length}`}>
        <div className="flex justify-between text-sm font-medium mb-2">
          <span className={highContrast ? 'text-white' : 'text-slate-600'}>
            Passo {currentStep + 1} de {steps.length}
          </span>
          <span className={highContrast ? 'text-yellow-400' : 'text-blue-600'}>{progress}%</span>
        </div>
        <div className={`h-3 rounded-full ${highContrast ? 'bg-white/20' : 'bg-slate-200'}`}>
          <div
            className={`h-3 rounded-full transition-all duration-500 ${
              highContrast ? 'bg-yellow-400' : 'bg-blue-600'
            }`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Step indicators */}
      <ol className="flex gap-1 flex-wrap" aria-label="Passos do formulário">
        {steps.map((s, i) => (
          <li
            key={s.id}
            className={`flex-1 h-1.5 rounded-full min-w-4 transition-colors ${
              i < currentStep
                ? highContrast ? 'bg-yellow-400' : 'bg-blue-500'
                : i === currentStep
                ? highContrast ? 'bg-yellow-400' : 'bg-blue-400'
                : highContrast ? 'bg-white/30' : 'bg-slate-200'
            }`}
            aria-current={i === currentStep ? 'step' : undefined}
          />
        ))}
      </ol>

      {/* Current step card */}
      <div className={`rounded-2xl border-2 p-6 ${
        highContrast ? 'bg-black border-white' : 'bg-white border-slate-200'
      }`}>
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl" aria-hidden="true">{step.icon}</span>
          <div>
            <h2 className={`text-2xl font-bold ${highContrast ? 'text-white' : 'text-slate-800'}`}>
              {step.label}
            </h2>
            <p className={`text-sm ${highContrast ? 'text-white' : 'text-slate-500'}`}>
              {step.description}
            </p>
          </div>
        </div>

        {isInfo ? (
          /* Guidance card — no textarea */
          <div className={`rounded-xl p-5 space-y-2 ${
            highContrast ? 'bg-white/10 border border-white' : 'bg-slate-50 border border-slate-200'
          }`} role="note" aria-label={`Orientações para ${step.label}`}>
            {step.guidance?.map((line, i) =>
              line === '' ? (
                <div key={i} className="h-2" />
              ) : line.startsWith('▌') ? (
                <p key={i} className={`font-bold text-base mt-3 ${highContrast ? 'text-yellow-400' : 'text-blue-700'}`}>
                  {line}
                </p>
              ) : line.startsWith('OBJECTIVO') ? (
                <p key={i} className={`font-semibold text-sm px-3 py-1.5 rounded-lg ${
                  highContrast ? 'bg-yellow-400/20 text-yellow-300' : 'bg-blue-50 text-blue-800 border border-blue-200'
                }`}>
                  🎯 {line}
                </p>
              ) : (
                <p key={i} className={`text-sm leading-relaxed ${highContrast ? 'text-white' : 'text-slate-700'}`}>
                  {line}
                </p>
              )
            )}
          </div>
        ) : (
          /* Input field */
          <>
            <label htmlFor={`step-input-${step.id}`} className="sr-only">
              {step.label}
            </label>
            <input
              id={`step-input-${step.id}`}
              type="text"
              value={value}
              onChange={e => onChange(step.id, e.target.value)}
              placeholder={step.placeholder ?? ''}
              aria-required="true"
              aria-invalid={touched && !isValid}
              aria-describedby={`step-hint-${step.id}`}
              className={`w-full rounded-xl border-2 p-4 text-base leading-relaxed transition-colors focus:outline-none focus-visible:ring-2 ${
                highContrast
                  ? 'bg-black text-white border-white placeholder-slate-400 focus-visible:ring-yellow-400'
                  : touched && !isValid
                  ? 'border-red-400 bg-red-50 focus-visible:ring-red-400'
                  : 'border-slate-300 bg-slate-50 focus:border-blue-400 focus-visible:ring-blue-400'
              }`}
            />
            <div id={`step-hint-${step.id}`} className="flex items-center justify-between mt-2 text-sm">
              <span className={
                touched && !isValid
                  ? 'text-red-600 font-medium'
                  : highContrast ? 'text-white' : 'text-slate-500'
              }>
                {touched && !isValid
                  ? `Preencha este campo`
                  : value.trim() ? '✓' : 'Campo obrigatório'}
              </span>
            </div>
          </>
        )}
      </div>

      {/* Navigation */}
      <div className="flex gap-3 justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={currentStep === 0}
          className={`px-6 py-3 rounded-xl font-semibold border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
            currentStep === 0
              ? 'opacity-40 cursor-not-allowed'
              : highContrast
              ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
              : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600'
          }`}
          aria-disabled={currentStep === 0}
        >
          ← Anterior
        </button>

        {isLast ? (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className={`flex-1 px-6 py-3 rounded-xl font-bold text-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              highContrast
                ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-white'
                : 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-blue-900 shadow-lg shadow-blue-200'
            }`}
          >
            {loading ? '⏳ A gerar...' : '⬇️ Gerar documento Word'}
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNext}
            className={`flex-1 px-6 py-3 rounded-xl font-bold text-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
              highContrast
                ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-white'
                : 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-blue-900 shadow-lg shadow-blue-200'
            }`}
          >
            Seguinte →
          </button>
        )}
      </div>
    </div>
  )
}
