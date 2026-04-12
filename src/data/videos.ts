export interface VideoEntry {
  id: string
  youtubeId: string
  title: string
  description: string
  category: 'basico' | 'word' | 'word-online' | 'ficheiros' | 'teams'
  categoryLabel: string
  /** IDs dos tutoriais de texto que este vídeo cobre */
  tutorialIds: string[]
}

export const videos: VideoEntry[] = [
  {
    id: 'ambiente-trabalho-windows',
    youtubeId: 'PqGW7Gs2j40',
    title: 'Ambiente de Trabalho do Windows',
    description:
      'Tutorial dedicado ao Ambiente de Trabalho do Windows — ícones, barra de tarefas, botão Iniciar, e como navegar entre janelas e programas.',
    category: 'basico',
    categoryLabel: 'Básico',
    tutorialIds: ['ambiente-trabalho'],
  },
  {
    id: 'teclado-atalhos',
    youtubeId: 'QhyctQ-poG0',
    title: 'Como usar o teclado — atalhos e funções',
    description:
      'Aprenda a usar o teclado com confiança: acentos, maiúsculas, e os atalhos mais úteis (CTRL+C, CTRL+V, CTRL+Z e muito mais). Existe também uma lista de reprodução completa com mais atalhos: youtube.com/playlist?list=PLQaxGBmNjqNyDjk8xW7hErLsT1HtXVmNR',
    category: 'basico',
    categoryLabel: 'Básico',
    tutorialIds: ['teclado', 'atalhos-teclado'],
  },
  {
    id: 'internet-basico',
    youtubeId: 'pJ98yuH7rtw',
    title: 'Navegar na internet, pesquisar no Google e fazer zoom',
    description:
      'Tutorial para iniciantes sobre como usar o browser, pesquisar no Google, abrir páginas e fazer zoom — ideal para quem está a aprender a usar a internet pela primeira vez.',
    category: 'basico',
    categoryLabel: 'Básico',
    tutorialIds: ['browser-internet', 'pesquisar-internet'],
  },
  {
    id: 'basico-geral',
    youtubeId: 'XZhv5eOBzg4',
    title: 'Informática básica completa',
    description:
      'Curso completo de informática para iniciantes. Cobre o ambiente de trabalho do Windows, teclado, internet, pesquisa no Google, email e muito mais — tudo num só vídeo.',
    category: 'basico',
    categoryLabel: 'Básico',
    tutorialIds: [
      'ligar-computador',
      'copiar-colar',
      'pasta',
      'email-basico',
      'janelas-windows',
    ],
  },
  {
    id: 'rato',
    youtubeId: '-b1Y5TZ7P7c',
    title: 'Como usar o rato',
    description:
      'Tutorial dedicado ao uso do rato no computador — clique simples, duplo clique, clique direito, scroll e como arrastar objectos.',
    category: 'basico',
    categoryLabel: 'Básico',
    tutorialIds: ['rato'],
  },
  {
    id: 'word-iniciantes',
    youtubeId: 'oooyJzAhWH0',
    title: 'Word básico para iniciantes',
    description:
      'Primeiros passos no Microsoft Word — como abrir, escrever, formatar texto e guardar o documento.',
    category: 'word',
    categoryLabel: 'Word',
    tutorialIds: ['word-abrir', 'word-guardar', 'word-formatacao-texto', 'word-letra'],
  },
  {
    id: 'word-completo',
    youtubeId: 'reFQoVuCHLM',
    title: 'Curso completo de Word (recomendado)',
    description:
      'Curso completo e detalhado do Microsoft Word — formatação, títulos e estilos, listas, imagens, impressão, PDF, cabeçalho/rodapé, ortografia e muito mais.',
    category: 'word',
    categoryLabel: 'Word',
    tutorialIds: [
      'word-titulos',
      'word-paragrafos',
      'word-listas',
      'word-pdf',
      'word-ortografia',
      'word-numerar-paginas',
      'word-imagens',
      'word-procurar',
      'word-imprimir',
      'word-online',
      'criar-conta-microsoft',
      'onedrive',
      'partilhar-historico',
    ],
  },
  {
    id: 'word-intensivo',
    youtubeId: 'pfUnnEKSn2g',
    title: 'Word — resumo intensivo',
    description:
      'Resumo rápido das funções mais importantes do Word — ideal para quem quer rever o essencial em pouco tempo.',
    category: 'word',
    categoryLabel: 'Word',
    tutorialIds: [],
  },
  {
    id: 'teams-completo',
    youtubeId: 'IgXwEBYqBqA',
    title: 'Guia completo Microsoft Teams',
    description:
      'Tudo sobre o Microsoft Teams — como instalar, entrar em reuniões, usar o chat, partilhar ficheiros, gerir o microfone e a câmara.',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    tutorialIds: [
      'teams-o-que-e',
      'teams-instalar',
      'teams-entrar-reuniao',
      'teams-microfone-camera',
      'teams-mensagens',
      'teams-browser',
      'teams-duvidas',
    ],
  },
]

/** Devolve o vídeo principal associado a um tutorial (por ID do tutorial). */
export function getVideoForTutorial(tutorialId: string): VideoEntry | undefined {
  return videos.find(v => v.tutorialIds.includes(tutorialId))
}

/** Devolve todos os vídeos de uma categoria. */
export function getVideosByCategory(category: string): VideoEntry[] {
  return videos.filter(v => v.category === category)
}

/** Categorias únicas disponíveis na galeria */
export const videoCategories = [
  { id: 'basico',  label: 'Básico',           icon: '🖥️' },
  { id: 'word',    label: 'Word',              icon: '📄' },
  { id: 'teams',   label: 'Microsoft Teams',   icon: '💬' },
]
