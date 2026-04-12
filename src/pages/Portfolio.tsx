import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import StepForm, { type FormStep } from '../components/StepForm'
import { generatePortfolioDocx, type PortfolioData } from '../utils/generateDocx'

const steps: FormStep[] = [
  {
    id: 'nome',
    label: 'O seu nome completo',
    icon: '👤',
    type: 'input',
    description: 'Escreva o seu nome completo como aparecerá na capa do portefólio.',
    placeholder: 'Ex: Maria da Silva Rodrigues',
    minWords: 1,
  },
  {
    id: 'grupo',
    label: 'Grupo / Turma',
    icon: '🏫',
    type: 'input',
    description: 'Indique o nome do grupo ou turma RVCC a que pertence.',
    placeholder: 'Ex: Grupo A — Centro de Qualificação XYZ 2025',
    minWords: 1,
  },
  {
    id: 'introducao',
    label: 'Introdução',
    icon: '✍️',
    type: 'info',
    description: 'O que escrever na introdução do portefólio',
    guidance: [
      'OBJECTIVO: 1 a 2 páginas (aproximadamente 500–800 palavras).',
      '',
      'A introdução deve responder a estas perguntas:',
      '  • Quem é? (apresente-se brevemente)',
      '  • Porque decidiu fazer o RVCC agora?',
      '  • O que espera ganhar com este processo?',
      '  • Como está a viver este momento?',
      '',
      'Escreva na primeira pessoa ("Eu…", "A minha…") com um tom pessoal e honesto.',
      'Não precisa de se preocupar com perfeição — o mais importante é ser autêntico/a.',
      '',
      '💡 Este texto será incluído no documento como orientação a apagar após ler.',
    ],
  },
  {
    id: 'infancia',
    label: 'Infância',
    icon: '🧒',
    type: 'info',
    description: 'Orientações para escrever sobre a sua infância',
    guidance: [
      'OBJECTIVO: 5 a 7 páginas (aproximadamente 2 000–2 800 palavras). Resumo, não enciclopédia.',
      '',
      'Tópicos a abordar (escolha os mais marcantes):',
      '  • Onde nasceu e onde cresceu — contexto familiar e social',
      '  • Relação com os pais, irmãos, avós — figuras importantes',
      '  • A escola primária: como foi a relação com o estudo?',
      '  • Brincadeiras, amigos, vizinhos — o mundo que existia em redor',
      '  • Um momento difícil que superou — o que aprendeu',
      '  • Um momento feliz que ainda se lembra com clareza',
      '',
      'Dica: escolha 4 a 6 episódios concretos em vez de fazer uma lista geral.',
      'Termine esta secção com: "A minha infância influenciou-me porque…"',
    ],
  },
  {
    id: 'adolescencia',
    label: 'Adolescência',
    icon: '🧑',
    type: 'info',
    description: 'Orientações para escrever sobre a sua adolescência',
    guidance: [
      'OBJECTIVO: 7 a 9 páginas (aproximadamente 2 800–3 600 palavras).',
      '',
      'Tópicos a abordar (escolha os mais marcantes):',
      '  • O ensino básico/secundário — como correu? Porquê saiu da escola, se foi o caso?',
      '  • Primeiros empregos, estágios, cursos — o primeiro contacto com o trabalho',
      '  • Relações de amizade e amorosas — o que aprendeu sobre si e sobre os outros',
      '  • Desafios e dificuldades desse período — como os enfrentou?',
      '  • Interesses, hobbies, desportos — o que descobriu que gostava',
      '  • Alguém que o/a influenciou muito nessa fase',
      '',
      'Dica: as dificuldades e como as superou têm muito valor no RVCC.',
      'Termine com: "Esta fase da minha vida ensinou-me que…"',
    ],
  },
  {
    id: 'vidaAdulta',
    label: 'Vida Adulta',
    icon: '👩‍💼',
    type: 'info',
    description: 'Orientações para a secção mais importante — a sua vida adulta',
    guidance: [
      'OBJECTIVO: 25 a 30 páginas — esta é a SECÇÃO MAIS IMPORTANTE do portefólio.',
      'Deve conter entre 10 000 e 13 000 palavras, divididas em sub-temas.',
      '',
      'Esta secção cobre desde o fim da adolescência até há 2–5 anos atrás.',
      'O foco não é listar factos, mas mostrar COMPETÊNCIAS adquiridas através da vida.',
      '',
      '▌VIDA PROFISSIONAL',
      '  • Empregos que teve — funções, responsabilidades, aprendizagens',
      '  • Situações difíceis no trabalho — como as resolveu?',
      '  • Formações, cursos, certificações ao longo da vida',
      '  • Se foi emigrante: a experiência de viver noutro país',
      '',
      '▌VIDA FAMILIAR',
      '  • Casamento, relações, filhos — responsabilidades e aprendizagens',
      '  • Cuidar de familiares (doença, velhice)',
      '  • Como geriu a casa, as finanças, a vida familiar',
      '',
      '▌VIDA SOCIAL E COMUNITÁRIA',
      '  • Participação em associações, grupos, voluntariado',
      '  • Cargos de responsabilidade — como resolveu conflitos',
      '',
      '▌SAÚDE E SUPERAÇÃO',
      '  • Doenças, acidentes, crises — como os enfrentou e o que aprendeu',
      '',
      'Para cada sub-tema, use: 1) O que aconteceu  2) Como reagiu  3) O que aprendeu',
    ],
  },
  {
    id: 'atualidade',
    label: 'Atualidade',
    icon: '📅',
    type: 'info',
    description: 'Orientações para escrever sobre os últimos 2–5 anos',
    guidance: [
      'OBJECTIVO: 8 a 12 páginas (aproximadamente 3 200–5 000 palavras).',
      'Cobre os últimos 2 a 5 anos da sua vida.',
      '',
      'Tópicos a abordar:',
      '  • Onde está neste momento — situação profissional, familiar, pessoal',
      '  • O que mudou na sua vida nos últimos anos',
      '  • Desafios recentes — como os está a enfrentar',
      '  • Uso das novas tecnologias no dia-a-dia',
      '  • Como se mantém informado/a e formado/a',
      '  • O que o/a motivou a inscrever-se no RVCC agora',
      '  • Que competências sente que este processo vai reconhecer',
      '  • Planos após o RVCC (emprego, novos estudos, projecto pessoal)',
      '',
      'Esta secção liga a sua história ao PRESENTE — mostre aprendizagem contínua.',
    ],
  },
  {
    id: 'balanco',
    label: 'Balanço Final',
    icon: '🌟',
    type: 'info',
    description: 'Orientações para a reflexão final sobre o processo',
    guidance: [
      'OBJECTIVO: 2 a 3 páginas (aproximadamente 800–1 200 palavras).',
      '',
      'O balanço final é uma reflexão sobre o PROCESSO em si — não sobre a sua vida.',
      '',
      'Perguntas a responder:',
      '  • O que foi mais difícil neste processo? Porquê?',
      '  • O que o/a surpreendeu ao escrever sobre a sua própria vida?',
      '  • O que mudou na sua forma de se ver depois de fazer este trabalho?',
      '  • Que mensagem daria a alguém que estivesse a pensar em fazer o RVCC?',
      '',
      'Escreva com autenticidade — este é o momento de mostrar que o processo',
      'de redacção do portefólio foi, ele próprio, uma aprendizagem.',
    ],
  },
  {
    id: 'webgrafia',
    label: 'Webgrafia',
    icon: '🌐',
    type: 'info',
    description: 'Como organizar as fontes consultadas',
    guidance: [
      'Liste TODAS as fontes consultadas durante o processo.',
      '',
      'Formato obrigatório para cada fonte:',
      '  TEMA - [Nome do site ou livro]. [Consultado em dd/mm/aaaa]. Disponível em: URL',
      '',
      'Exemplos:',
      '  Saúde - [Portal SNS]. [Consultado em 10/03/2025]. Disponível em: https://www.sns.gov.pt',
      '  Informática - [Wikipedia]. [Consultado em 12/04/2025]. Disponível em: https://pt.wikipedia.org',
      '',
      'Inclua pelo menos 5 a 10 fontes.',
      'Cada área temática do portefólio deve ter pelo menos uma fonte associada.',
    ],
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
      await generatePortfolioDocx({ nome: values['nome'] || '', grupo: values['grupo'] || '' } as PortfolioData)
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
          Siga os passos para gerar um documento Word com toda a estrutura e orientações prontas.
        </p>
      </header>

      {/* Info tip */}
      <div className={`rounded-xl border-2 p-4 mb-6 flex gap-3 items-start ${
        highContrast ? 'bg-black border-white text-white' : 'bg-amber-50 border-amber-300'
      }`} role="note">
        <span className="text-2xl flex-shrink-0" aria-hidden="true">💡</span>
        <p className={`text-sm ${highContrast ? 'text-white' : 'text-amber-800'}`}>
          O documento gerado já contém a estrutura completa e orientações detalhadas em cada secção.
          Basta escrever por cima das instruções no Word e apagá-las quando terminar.
          Objetivo: <strong>entre 50 a 70 páginas</strong>.
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
            Documento gerado com sucesso!
          </h2>
          <p className={`text-lg mb-2 ${highContrast ? 'text-white' : 'text-green-600'}`}>
            O ficheiro Word foi descarregado para o seu computador.
          </p>
          <p className={`text-sm mb-6 ${highContrast ? 'text-white/80' : 'text-green-500'}`}>
            Abra o ficheiro no Word, leia as instruções em cada secção e escreva o seu texto por cima.
            Quando terminar uma secção, apague o bloco de orientações.
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



