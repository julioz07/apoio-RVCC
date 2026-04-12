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
    id: 'basico-geral',
    youtubeId: 'XZhv5eOBzg4',
    title: 'Informática básica completa',
    description:
      'Curso completo de informática para iniciantes. Cobre o ambiente de trabalho do Windows, teclado, internet, pesquisa no Google, email e muito mais — tudo num só vídeo.',
    category: 'basico',
    categoryLabel: 'Básico',
    tutorialIds: [
      'ligar-computador',
      'ambiente-trabalho',
      'teclado',
      'atalhos-teclado',
      'copiar-colar',
      'pasta',
      'browser-internet',
      'pesquisar-internet',
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
