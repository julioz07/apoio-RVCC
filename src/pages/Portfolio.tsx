import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import StepForm, { type FormStep } from '../components/StepForm'
import { generatePortfolioDocx, type PortfolioData } from '../utils/generateDocx'

const steps: FormStep[] = [
  {
    id: 'nome',
    label: 'O seu nome completo',
    icon: '👤',
    description: 'Escreva o seu nome completo como aparecerá na capa do portefólio.',
    placeholder: 'Ex: Maria da Silva Rodrigues',
    minWords: 2,
  },
  {
    id: 'grupo',
    label: 'Grupo / Turma',
    icon: '🏫',
    description: 'Indique o nome do grupo ou turma RVCC a que pertence.',
    placeholder: 'Ex: Grupo A — Centro qualificação XYZ 2025',
    minWords: 1,
  },
  {
    id: 'introducao',
    label: 'Introdução',
    icon: '✍️',
    description: 'Apresente-se brevemente. Quem é? Porque está no RVCC? O que espera aprender?',
    placeholder: 'Escreva aqui a sua introdução...',
    minWords: 30,
  },
  {
    id: 'infancia',
    label: 'Infância',
    icon: '🧒',
    description: 'Fale sobre os seus primeiros anos: onde cresceu, a sua família, a escola, experiências marcantes.',
    placeholder: 'Escreva sobre a sua infância...',
    minWords: 50,
  },
  {
    id: 'adolescencia',
    label: 'Adolescência',
    icon: '🧑',
    description: 'Conte sobre os anos da adolescência: estudos, amizades, primeiros empregos, desafios que enfrentou.',
    placeholder: 'Escreva sobre a sua adolescência...',
    minWords: 50,
  },
  {
    id: 'vidaAdulta',
    label: 'Vida Adulta',
    icon: '👩‍💼',
    description: 'Aborde a sua vida enquanto adulto: trabalho, família, responsabilidades e aprendizagens.',
    placeholder: 'Escreva sobre a sua vida adulta...',
    minWords: 50,
  },
  {
    id: 'atualidade',
    label: 'Atualidade',
    icon: '📅',
    description: 'Descreva a sua situação atual, os seus objetivos e o que o motivou a fazer o RVCC agora.',
    placeholder: 'Escreva sobre a sua situação atual...',
    minWords: 30,
  },
  {
    id: 'balanco',
    label: 'Balanço Final',
    icon: '🌟',
    description: 'Reflita sobre o processo: o que aprendeu sobre si mesmo, como evoluiu, o que mudou.',
    placeholder: 'Escreva o seu balanço final...',
    minWords: 30,
  },
  {
    id: 'webgrafia',
    label: 'Webgrafia',
    icon: '🌐',
    description: 'Liste as fontes que consultou. Formato obrigatório: TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link',
    placeholder: 'Ex: Informática - [Wikipedia]. [consultado em 12/04/2025]. Disponível em: https://pt.wikipedia.org/wiki/Informática',
    minWords: 5,
  },
]

export default function Portfolio() {
  const { highContrast } = useAccessibility()
  const [currentStep, setCurrentStep] = useState(0)
  const [values, setValues] = useState<Record<string, string>>(() => {
    const saved = localStorage.getItem('portfolio-draft')
    return saved ? JSON.parse(saved) : {}
  })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  function handleChange(id: string, value: string) {
    const next = { ...values, [id]: value }
    setValues(next)
    localStorage.setItem('portfolio-draft', JSON.stringify(next))
  }

  function handleNext() {
    setCurrentStep(s => Math.min(s + 1, steps.length - 1))
  }

  function handleBack() {
    setCurrentStep(s => Math.max(s - 1, 0))
  }

  async function handleSubmit() {
    setLoading(true)
    try {
      await generatePortfolioDocx(values as unknown as PortfolioData)
      setDone(true)
    } catch (err) {
      console.error(err)
      alert('Ocorreu um erro ao gerar o documento. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  function handleRestart() {
    if (window.confirm('Tem a certeza? O progresso actual será apagado.')) {
      localStorage.removeItem('portfolio-draft')
      setValues({})
      setCurrentStep(0)
      setDone(false)
    }
  }

  return (
    <main id="main-content" className="max-w-3xl mx-auto px-4 py-10">
      {/* Page header */}
      <header className="mb-8 animate-fade-in">
        <h1 className={`text-4xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
          <span aria-hidden="true">✍️ </span>Criar o Portefólio
        </h1>
        <p className={`text-xl ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Preencha cada secção ao seu ritmo. O progresso é guardado automaticamente no browser.
        </p>
      </header>

      {/* Info tip */}
      <div className={`rounded-xl border-2 p-4 mb-6 flex gap-3 items-start ${
        highContrast ? 'bg-black border-white text-white' : 'bg-amber-50 border-amber-300'
      }`} role="note">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">💡</span>
        <p className={`text-sm ${highContrast ? 'text-white' : 'text-amber-800'}`}>
          O portefólio é <strong>guardado no seu browser</strong>. Se fechar esta página, o progresso não se perde.
          No fim, pode descarregar um ficheiro Word pronto a entregar.
        </p>
      </div>

      {done ? (
        <div
          className={`rounded-2xl border-2 p-8 text-center animate-fade-in ${
            highContrast ? 'bg-black border-white' : 'bg-green-50 border-green-300'
          }`}
          role="status"
          aria-live="polite"
        >
          <p className="text-6xl mb-4" aria-hidden="true">🎉</p>
          <h2 className={`text-3xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-green-700'}`}>
            Portefólio gerado com sucesso!
          </h2>
          <p className={`text-lg mb-6 ${highContrast ? 'text-white' : 'text-green-600'}`}>
            O ficheiro Word foi descarregado para o seu computador.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              type="button"
              onClick={handleSubmit}
              className={`px-6 py-3 rounded-xl font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                highContrast
                  ? 'bg-yellow-400 text-black hover:bg-yellow-300 border-2 border-white focus-visible:outline-white'
                  : 'bg-blue-700 text-white hover:bg-blue-800 focus-visible:outline-blue-900 shadow-md'
              }`}
            >
              ⬇️ Descarregar novamente
            </button>
            <button
              type="button"
              onClick={handleRestart}
              className={`px-6 py-3 rounded-xl font-bold border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                highContrast
                  ? 'bg-black text-white border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                  : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50 focus-visible:outline-blue-600'
              }`}
            >
              🔄 Recomeçar do zero
            </button>
          </div>
        </div>
      ) : (
        <div className="animate-fade-in">
          <StepForm
            steps={steps}
            values={values}
            onChange={handleChange}
            currentStep={currentStep}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
            loading={loading}
          />
        </div>
      )}
    </main>
  )
}
