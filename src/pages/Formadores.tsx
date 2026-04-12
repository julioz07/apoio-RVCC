import { useAccessibility } from '../context/AccessibilityContext'
import { formadorLinks } from '../data/rules'
import { tutorials } from '../data/tutorials'

const faqs = [
  {
    q: 'Qual é a estrutura obrigatória do portefólio?',
    a: 'Capa, Introdução, Autobiografia Reflexiva (Infância, Adolescência, Vida Adulta, Atualidade), Balanço Final e Webgrafia.',
  },
  {
    q: 'Qual é o formato correto da webgrafia?',
    a: 'TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link\nEx: Informática - [Wikipedia]. [consultado em 12/04/2025]. Disponível em: https://pt.wikipedia.org/wiki/Informática',
  },
  {
    q: 'Quantas palavras deve ter cada secção?',
    a: 'Recomenda-se um mínimo de 50 palavras por secção da autobiografia. A introdução e o balanço final devem ter pelo menos 30 palavras.',
  },
  {
    q: 'Posso usar o Word Online (gratuito)?',
    a: 'Sim! O Word Online funciona no browser, é gratuito e guarda automaticamente. Aceda em office.com com uma conta Microsoft.',
  },
  {
    q: 'O portefólio deve ter reflexão pessoal?',
    a: 'Sim. Não basta apenas listar factos — o formando deve refletir sobre o impacto das experiências na sua vida e aprendizagens.',
  },
  {
    q: 'Posso usar esta plataforma para gerar texto automaticamente?',
    a: 'Não. Esta plataforma não gera texto — apenas ajuda na estrutura, orienta e verifica o que o formando escreve.',
  },
]

export default function Formadores() {
  const { highContrast } = useAccessibility()

  const tutorialsWithVideo = tutorials.filter(t => t.videoUrl)

  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 py-10">
      {/* Page header */}
      <header className="mb-8 animate-fade-in">
        <h1 className={`text-4xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
          <span aria-hidden="true">👩‍🏫 </span>Área de Formadores
        </h1>
        <p className={`text-xl ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Recursos, links oficiais, vídeos de apoio e respostas às dúvidas mais comuns.
        </p>
      </header>

      <div className="flex flex-col gap-10">
        {/* Quick links */}
        <section aria-labelledby="links-heading">
          <h2
            id="links-heading"
            className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            🔗 Links úteis
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {formadorLinks.map(link => (
              <li key={link.url}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col gap-1 p-5 rounded-xl border-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                    highContrast
                      ? 'bg-black text-yellow-400 border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:shadow-md focus-visible:outline-blue-600'
                  }`}
                  aria-label={`${link.label} (abre em nova janela)`}
                >
                  <span className={`font-bold ${highContrast ? 'underline' : 'text-blue-700'}`}>
                    {link.label} ↗
                  </span>
                  <span className={`text-sm ${highContrast ? 'text-white' : 'text-slate-500'}`}>
                    {link.description}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Video resources */}
        <section aria-labelledby="videos-heading">
          <h2
            id="videos-heading"
            className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            🎥 Vídeos de apoio para formandos
          </h2>
          <p className={`mb-4 ${highContrast ? 'text-white' : 'text-slate-500'}`}>
            Partilhe estes vídeos com os formandos que têm mais dificuldades.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5" role="list">
            {tutorialsWithVideo.map(t => (
              <li key={t.id} className={`rounded-xl border-2 overflow-hidden ${
                highContrast ? 'border-white bg-black' : 'border-slate-200 bg-white'
              }`}>
                <div className={`px-5 py-3 border-b ${highContrast ? 'border-white' : 'border-slate-200 bg-slate-50'}`}>
                  <p className={`font-bold flex items-center gap-2 ${highContrast ? 'text-white' : 'text-slate-700'}`}>
                    <span aria-hidden="true">{t.icon}</span> {t.title}
                  </p>
                </div>
                <div className="p-4">
                  <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-100">
                    <iframe
                      src={t.videoUrl}
                      title={`Vídeo: ${t.title}`}
                      className="absolute inset-0 w-full h-full"
                      allowFullScreen
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            ❓ Dúvidas frequentes
          </h2>
          <dl className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-5 ${
                  highContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200'
                }`}
              >
                <dt className={`font-bold text-lg mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
                  {faq.q}
                </dt>
                <dd className={`text-base leading-relaxed whitespace-pre-line ${highContrast ? 'text-white' : 'text-slate-600'}`}>
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Platform summary */}
        <section
          className={`rounded-2xl border-2 p-6 ${
            highContrast ? 'bg-black border-white' : 'bg-blue-50 border-blue-200'
          }`}
          aria-labelledby="platform-summary-heading"
        >
          <h2
            id="platform-summary-heading"
            className={`text-xl font-bold mb-3 ${highContrast ? 'text-yellow-400' : 'text-blue-800'}`}
          >
            📋 Resumo da plataforma
          </h2>
          <ul className={`flex flex-col gap-2 text-sm ${highContrast ? 'text-white' : 'text-blue-700'}`} role="list">
            {[
              'Sem registo nem dados pessoais guardados em servidores',
              'Sem inteligência artificial — não gera texto automaticamente',
              'Compatible com GitHub Pages — funciona sem backend',
              'Acessível: modo alto contraste, tamanho de letra ajustável, navegação por teclado',
              'Exportação do portefólio em ficheiro .docx',
              'Verificador de texto com sugestões (sem correção automática)',
              'Tutoriais passo a passo com vídeos incorporados',
            ].map(item => (
              <li key={item} className="flex gap-2 items-start">
                <span aria-hidden="true" className={highContrast ? 'text-yellow-400' : 'text-blue-500'}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
