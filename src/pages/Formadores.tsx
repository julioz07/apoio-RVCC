import { useState } from 'react'
import { useAccessibility } from '../context/AccessibilityContext'
import { formadorLinks } from '../data/rules'
import { videos } from '../data/videos'

const faqs = [
  {
    q: 'Qual é a estrutura obrigatória do portefólio?',
    a: 'Capa → Índice (opcional) → Introdução → Autobiografia Reflexiva (Infância, Adolescência, Vida Adulta, Atualidade) → Balanço Final → Webgrafia.',
  },
  {
    q: 'Qual é a extensão esperada do portefólio?',
    a: 'Entre 50 a 70 páginas é o objetivo ideal. Nunca menos de 40 páginas, nunca mais de 100 páginas. A secção Vida Adulta deve ser claramente a maior (25 a 30 páginas).',
  },
  {
    q: 'Qual é o formato correto da webgrafia?',
    a: 'TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link\nEx: Informática - [Wikipedia]. [consultado em 12/04/2025]. Disponível em: https://pt.wikipedia.org/wiki/Informática\n\nO formando deve incluir pelo menos 5 a 10 fontes — uma por área temática.',
  },
  {
    q: 'Que extensão deve ter cada secção?',
    a: 'Introdução: 1–2 páginas. Infância: 5–7 páginas. Adolescência: 7–9 páginas. Vida Adulta: 25–30 páginas (a mais importante). Atualidade: 8–12 páginas. Balanço Final: 2–3 páginas.',
  },
  {
    q: 'O formando pode usar o Word Online gratuito?',
    a: 'Sim! O Word Online funciona no browser, é gratuito e guarda automaticamente na nuvem. Basta aceder a office.com com uma conta Microsoft (Outlook/Hotmail). Não precisa de instalar nada.',
  },
  {
    q: 'E se o formando não tiver o Word instalado?',
    a: 'Pode usar o Word Online (office.com) ou o Google Docs (docs.google.com) — ambos gratuitos, funcionam no browser e guardam automaticamente. Pode descarregar o ficheiro como .docx quando terminar.',
  },
  {
    q: 'O portefólio deve ter reflexão pessoal?',
    a: 'Sim, é fundamental. Não basta listar factos — o formando deve refletir sobre o impacto de cada experiência na sua vida e o que aprendeu com ela. A fórmula recomendada para cada episódio: o que aconteceu → como reagiu → o que aprendeu.',
  },
  {
    q: 'Como converter o ficheiro Word para PDF?',
    a: 'No Word: Ficheiro → Guardar como → PDF. Ou usar o iLovePDF (ilovepdf.com) — gratuito, sem instalação, funciona em qualquer browser.',
  },
  {
    q: 'Como enviar um ficheiro grande por email?',
    a: 'Usar o WeTransfer (wetransfer.com) — gratuito até 2 GB, sem registo, o formando recebe um link de download por email.',
  },
  {
    q: 'Esta plataforma gera texto automaticamente com IA?',
    a: 'Não. Esta plataforma não usa inteligência artificial nem gera texto. Apenas orienta a estrutura, explica o que escrever em cada secção, e verifica o que o formando já escreveu.',
  },
  {
    q: 'Como usar esta plataforma com os formandos?',
    a: 'Sugestão de fluxo:\n1. Mostrar a página "Regras" — estrutura e checklist\n2. Usar "Criar Portefólio" para gerar o documento base (.docx) com as orientações\n3. O formando escreve no Word, usando as orientações como guia\n4. Usar o "Verificador de Texto" para rever antes de entregar\n5. Enviar os vídeos de tutoriais para os formandos com menos experiência',
  },
]

// Agrupar links por categoria
function groupLinks(links: typeof formadorLinks) {
  const map = new Map<string, typeof formadorLinks>()
  for (const l of links) {
    if (!map.has(l.category)) map.set(l.category, [])
    map.get(l.category)!.push(l)
  }
  return map
}

export default function Formadores() {
  const { highContrast } = useAccessibility()
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const linkGroups = groupLinks(formadorLinks)

  function copyLink(url: string, id: string) {
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    })
  }

  return (
    <main id="main-content" className="max-w-4xl mx-auto px-4 py-10">
      {/* Page header */}
      <header className="mb-8 animate-fade-in">
        <h1 className={`text-4xl font-extrabold mb-2 ${highContrast ? 'text-yellow-400' : 'text-slate-800'}`}>
          <span aria-hidden="true">👩‍🏫 </span>Área de Formadores
        </h1>
        <p className={`text-xl ${highContrast ? 'text-white' : 'text-slate-500'}`}>
          Ferramentas, vídeos para partilhar, dúvidas frequentes e resumo da plataforma.
        </p>
      </header>

      <div className="flex flex-col gap-12">

        {/* ── RESUMO DA PLATAFORMA ── */}
        <section
          className={`rounded-2xl border-2 p-6 ${
            highContrast ? 'bg-black border-white' : 'bg-blue-50 border-blue-200'
          }`}
          aria-labelledby="platform-summary-heading"
        >
          <h2
            id="platform-summary-heading"
            className={`text-xl font-bold mb-4 ${highContrast ? 'text-yellow-400' : 'text-blue-800'}`}
          >
            📋 O que esta plataforma faz
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              { icon: '📄', text: 'Gera um documento Word (.docx) base com a estrutura completa e orientações detalhadas em cada secção' },
              { icon: '🔍', text: 'Verifica o texto do formando — frases longas, pontuação, maiúsculas, webgrafia — com exemplos do onde está o problema' },
              { icon: '🎓', text: '37 tutoriais passo a passo de informática básica: Word, Teams, ficheiros, internet, email' },
              { icon: '🎥', text: 'Galeria de vídeos do YouTube organizados por tema, para partilhar com formandos' },
              { icon: '✅', text: 'Checklist interativa das regras do portefólio — com objetivos de páginas por secção' },
              { icon: '♿', text: 'Acessível: alto contraste, tamanho de letra ajustável, navegação por teclado (WCAG 2.1 AA)' },
              { icon: '🔒', text: 'Sem registo, sem dados pessoais em servidores — tudo fica no browser do utilizador' },
              { icon: '🤖', text: 'Não usa IA — não gera nem sugere texto automaticamente' },
            ].map(item => (
              <div key={item.text} className="flex gap-3 items-start">
                <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
                <p className={`text-sm leading-relaxed ${highContrast ? 'text-white' : 'text-blue-700'}`}>{item.text}</p>
              </div>
            ))}
          </div>
          <div className={`mt-4 pt-4 border-t text-sm font-medium ${
            highContrast ? 'border-white text-yellow-400' : 'border-blue-200 text-blue-600'
          }`}>
            💡 Fluxo sugerido: <span className={highContrast ? 'text-white' : 'text-blue-800'}>Regras → Criar Portefólio (gera .docx) → formando escreve no Word → Verificador de Texto → entrega</span>
          </div>
        </section>

        {/* ── VÍDEOS PARA PARTILHAR ── */}
        <section aria-labelledby="videos-heading">
          <h2
            id="videos-heading"
            className={`text-2xl font-bold mb-1 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            🎥 Vídeos para partilhar com formandos
          </h2>
          <p className={`mb-4 text-sm ${highContrast ? 'text-white' : 'text-slate-500'}`}>
            Copie o link directo do YouTube e envie por WhatsApp, email ou Teams ao formando com dificuldades.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
            {videos.map(v => {
              const ytUrl = `https://www.youtube.com/watch?v=${v.youtubeId}`
              const isCopied = copiedId === v.id
              return (
                <li key={v.id} className={`rounded-xl border-2 p-4 flex flex-col gap-3 ${
                  highContrast ? 'border-white bg-black' : 'border-slate-200 bg-white'
                }`}>
                  <div className="flex items-start gap-2">
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${
                      highContrast ? 'border border-white text-white' : 'bg-indigo-100 text-indigo-700'
                    }`}>{v.categoryLabel}</span>
                    <p className={`font-bold text-sm leading-snug ${highContrast ? 'text-white' : 'text-slate-800'}`}>{v.title}</p>
                  </div>
                  <p className={`text-xs leading-relaxed ${highContrast ? 'text-white/80' : 'text-slate-500'}`}>{v.description}</p>
                  <div className="flex gap-2 mt-auto">
                    <a
                      href={ytUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 text-center text-sm font-semibold py-2 rounded-lg transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        highContrast
                          ? 'bg-yellow-400 text-black hover:bg-yellow-300 focus-visible:outline-white'
                          : 'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-800'
                      }`}
                      aria-label={`Ver "${v.title}" no YouTube (abre em nova janela)`}
                    >
                      ▶ Ver no YouTube
                    </a>
                    <button
                      type="button"
                      onClick={() => copyLink(ytUrl, v.id)}
                      className={`px-3 py-2 rounded-lg text-sm font-semibold border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        isCopied
                          ? highContrast ? 'bg-yellow-400 text-black border-yellow-400' : 'bg-green-100 text-green-700 border-green-400'
                          : highContrast ? 'bg-black text-white border-white hover:bg-white hover:text-black' : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-50'
                      }`}
                      aria-label={isCopied ? 'Link copiado!' : `Copiar link do vídeo "${v.title}"`}
                    >
                      {isCopied ? '✓ Copiado' : '🔗 Copiar link'}
                    </button>
                  </div>
                </li>
              )
            })}
          </ul>
        </section>

        {/* ── FERRAMENTAS ÚTEIS ── */}
        <section aria-labelledby="links-heading">
          <h2
            id="links-heading"
            className={`text-2xl font-bold mb-1 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            🔧 Ferramentas úteis
          </h2>
          <p className={`mb-5 text-sm ${highContrast ? 'text-white' : 'text-slate-500'}`}>
            Ferramentas gratuitas para o dia-a-dia — para si e para indicar aos formandos.
          </p>
          <div className="flex flex-col gap-6">
            {Array.from(linkGroups.entries()).map(([category, links]) => (
              <div key={category}>
                <h3 className={`text-base font-bold mb-3 ${highContrast ? 'text-yellow-400' : 'text-slate-600'}`}>
                  {category}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="list">
                  {links.map(link => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex flex-col gap-1 p-4 rounded-xl border-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                          highContrast
                            ? 'bg-black text-yellow-400 border-white hover:bg-white hover:text-black focus-visible:outline-yellow-400'
                            : 'bg-white text-slate-800 border-slate-200 hover:border-blue-400 hover:shadow-md focus-visible:outline-blue-600'
                        }`}
                        aria-label={`${link.label} (abre em nova janela)`}
                      >
                        <span className={`font-bold text-sm ${highContrast ? 'underline' : 'text-blue-700'}`}>
                          {link.label} ↗
                        </span>
                        <span className={`text-xs leading-relaxed ${highContrast ? 'text-white' : 'text-slate-500'}`}>
                          {link.description}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── FAQ ── */}
        <section aria-labelledby="faq-heading">
          <h2
            id="faq-heading"
            className={`text-2xl font-bold mb-4 ${highContrast ? 'text-white' : 'text-slate-700'}`}
          >
            ❓ Dúvidas frequentes
          </h2>
          <dl className="flex flex-col gap-2">
            {faqs.map((faq, i) => {
              const isOpen = openFaq === i
              return (
                <div
                  key={i}
                  className={`rounded-xl border-2 overflow-hidden ${
                    highContrast ? 'bg-black border-white text-white' : 'bg-white border-slate-200'
                  }`}
                >
                  <dt>
                    <button
                      type="button"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className={`w-full flex items-center justify-between gap-3 px-5 py-4 text-left font-bold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                        isOpen
                          ? highContrast ? 'bg-yellow-400 text-black' : 'bg-slate-50 text-blue-700'
                          : highContrast ? 'text-yellow-400 hover:bg-white/10' : 'text-slate-800 hover:bg-slate-50'
                      } ${highContrast ? 'focus-visible:outline-yellow-400' : 'focus-visible:outline-blue-600'}`}
                    >
                      <span>{faq.q}</span>
                      <span className="flex-shrink-0 text-lg" aria-hidden="true">{isOpen ? '▲' : '▼'}</span>
                    </button>
                  </dt>
                  {isOpen && (
                    <dd className={`px-5 py-4 text-base leading-relaxed whitespace-pre-line border-t ${
                      highContrast ? 'text-white border-white/30' : 'text-slate-600 border-slate-100'
                    }`}>
                      {faq.a}
                    </dd>
                  )}
                </div>
              )
            })}
          </dl>
        </section>

      </div>
    </main>
  )
}




