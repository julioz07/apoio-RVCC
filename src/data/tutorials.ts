export interface Tutorial {
  id: string
  title: string
  category: 'basico' | 'word' | 'word-online' | 'ficheiros'
  categoryLabel: string
  icon: string
  description: string
  steps: string[]
  tips: string[]
  videoUrl?: string
}

export const tutorials: Tutorial[] = [
  // ── BÁSICO ──
  {
    id: 'rato',
    title: 'Como usar o rato',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🖱️',
    description: 'O rato é um dos principais equipamentos para usar o computador. Com ele consegue clicar, selecionar, abrir programas e navegar nas páginas.',
    steps: [
      'Coloque o rato sobre uma superfície plana (ex: secretária ou tapete de rato).',
      'Mova o rato devagar — o cursor no ecrã vai acompanhar o movimento.',
      'Clique com o botão esquerdo para selecionar ou abrir algo.',
      'Faça dois cliques rápidos (duplo clique) para abrir ficheiros e programas.',
      'Clique com o botão direito para ver um menu com opções extra.',
      'Use a rodinha do meio (scroll) para subir ou descer na página.',
    ],
    tips: [
      'Não precisa de carregar com força — um toque leve é suficiente.',
      'Mova o rato devagar, especialmente no início.',
      'Pratique clicar em botões simples antes de tentar abrir programas.',
      'Se o cursor desaparecer do ecrã, mova o rato e ele volta a aparecer.',
    ],
    videoUrl: 'https://www.youtube.com/embed/2LzMZ2C2hK4',
  },
  {
    id: 'teclado',
    title: 'Como usar o teclado e fazer acentos',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '⌨️',
    description: 'O teclado serve para escrever texto. Aprender os acentos e as letras maiúsculas é essencial para escrever corretamente em português.',
    steps: [
      'Coloque os dedos sobre as teclas centrais — as mais usadas ficam no meio do teclado.',
      'Para escrever uma letra maiúscula, carregue na tecla SHIFT ao mesmo tempo que carrega na letra.',
      'Para deixar CAPS LOCK ativo (tudo em maiúsculas), carregue na tecla CAPS LOCK.',
      'Para escrever á: carregue na tecla ´ (antes do Enter) e depois carregue em A.',
      'Para escrever ã: carregue na tecla ~ e depois carregue em A.',
      'Para escrever à: carregue na tecla ` e depois carregue em A.',
      'Para escrever ç: existe uma tecla própria com a cedilha — carregue nela diretamente.',
      'Se errar uma letra, use a tecla Backspace (← à direita) para apagar.',
    ],
    tips: [
      'Escreva devagar — a velocidade vem com a prática.',
      'Não olhe só para o teclado — tente olhar também para o ecrã.',
      'Use a tecla Backspace para corrigir erros, sem apagar tudo.',
      'A tecla Enter serve para mudar de linha ou confirmar uma ação.',
    ],
    videoUrl: 'https://www.youtube.com/embed/Z6f0vD8qzH0',
  },
  {
    id: 'copiar-colar',
    title: 'Copiar e colar texto',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '📋',
    description: 'Copiar e colar é uma das funções mais úteis. Permite reutilizar texto sem ter de escrever tudo novamente.',
    steps: [
      'Selecione o texto que quer copiar: clique no início do texto, mantenha carregado e arraste até ao final.',
      'O texto selecionado ficará destacado com uma cor de fundo.',
      'Carregue em CTRL + C para copiar (ou clique direito e escolha "Copiar").',
      'Clique no local onde quer colocar o texto.',
      'Carregue em CTRL + V para colar (ou clique direito e escolha "Colar").',
    ],
    tips: [
      'CTRL + C = Copiar | CTRL + V = Colar | CTRL + X = Cortar (remove o original).',
      'Pode copiar texto de um documento e colar noutro.',
      'CTRL + Z desfaz o último erro — use se colar no sítio errado.',
    ],
  },
  {
    id: 'pasta',
    title: 'Como criar uma pasta no computador',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '📁',
    description: 'Criar pastas ajuda a organizar os seus ficheiros. É como ter gavetas no computador — cada uma para um assunto diferente.',
    steps: [
      'Vá ao Ambiente de Trabalho (o ecrã principal do computador).',
      'Clique com o botão direito do rato num espaço vazio.',
      'Escolha a opção "Novo" no menu que aparece.',
      'Clique em "Pasta".',
      'Uma nova pasta aparece — escreva o nome que quer dar (ex: RVCC 2025).',
      'Carregue em Enter para confirmar o nome.',
    ],
    tips: [
      'Crie uma pasta chamada "RVCC" só para o seu portefólio.',
      'Use nomes claros — ex: "Versão Final", "Rascunho", "Fotos".',
      'Pode criar pastas dentro de pastas para organizar melhor.',
    ],
  },

  // ── WORD ──
  {
    id: 'word-basico',
    title: 'Como usar o Word',
    category: 'word',
    categoryLabel: 'Word',
    icon: '📄',
    description: 'O Word é um programa para escrever documentos de texto. É o mais usado em todo o mundo e é o que vai usar para o seu portefólio.',
    steps: [
      'Abra o Word — clique no ícone azul com W.',
      'Clique em "Documento em branco" para começar um novo documento.',
      'Clique na área de texto (a parte branca) e comece a escrever.',
      'Para formatar um título: selecione o texto e escolha "Título 1" no topo.',
      'Para guardar: carregue em CTRL + S ou clique em "Ficheiro" → "Guardar".',
      'Para imprimir: carregue em CTRL + P.',
    ],
    tips: [
      'Guarde o trabalho com frequência — não espere até ao fim.',
      'Use os títulos (Título 1, Título 2) para organizar as secções.',
      'A barra de ferramentas no topo tem os botões mais usados: negrito (B), itálico (I), tamanho da letra.',
    ],
  },
  {
    id: 'guardar-ficheiro',
    title: 'Como guardar um ficheiro',
    category: 'word',
    categoryLabel: 'Word',
    icon: '💾',
    description: 'Guardar o trabalho é essencial para não perder o que escreveu. Aprenda a guardar corretamente.',
    steps: [
      'No Word, clique em "Ficheiro" no canto superior esquerdo.',
      'Escolha "Guardar como" para guardar pela primeira vez ou com novo nome.',
      'Escolha a pasta onde quer guardar (ex: a pasta RVCC que criou).',
      'Escreva um nome para o ficheiro (ex: Portefolio_Joao_v1).',
      'Certifique-se que o formato é "Documento Word (.docx)".',
      'Clique em "Guardar".',
    ],
    tips: [
      'Guarde o trabalho de 5 em 5 minutos com CTRL + S.',
      'Use nomes com números de versão: v1, v2, v3 — assim nunca perde versões antigas.',
      'Nunca guarde apenas no Ambiente de Trabalho — crie sempre uma pasta.',
    ],
  },
  {
    id: 'guardar-pdf',
    title: 'Como guardar em PDF',
    category: 'word',
    categoryLabel: 'Word',
    icon: '📑',
    description: 'O PDF é o formato mais usado para enviar documentos. Mantém a formatação igual em qualquer computador.',
    steps: [
      'No Word, clique em "Ficheiro".',
      'Escolha "Guardar como".',
      'Em "Tipo de ficheiro", selecione "PDF (*.pdf)".',
      'Escolha onde guardar e dê um nome ao ficheiro.',
      'Clique em "Guardar".',
    ],
    tips: [
      'O PDF não pode ser editado facilmente — guarde sempre também no formato Word (.docx).',
      'Use o PDF para enviar ao formador — a formatação fica sempre igual.',
    ],
  },

  // ── WORD ONLINE ──
  {
    id: 'word-online',
    title: 'Como usar o Word Online',
    category: 'word-online',
    categoryLabel: 'Word Online',
    icon: '🌐',
    description: 'O Word Online é a versão gratuita do Word que funciona no browser, sem instalar nada. Guarda automaticamente na internet.',
    steps: [
      'Abra o browser (Chrome, Edge, Firefox).',
      'Aceda a office.com e entre com a sua conta Microsoft (pode criar uma gratuitamente).',
      'Clique em "Word" para abrir o Word Online.',
      'Clique em "Novo documento em branco".',
      'Escreva o seu texto — é guardado automaticamente na internet.',
      'Para descarregar: clique em "Ficheiro" → "Guardar como" → "Descarregar uma cópia".',
    ],
    tips: [
      'Não precisa de instalar nada — funciona diretamente no browser.',
      'O documento fica guardado no OneDrive — pode aceder em qualquer computador.',
      'Partilhe o documento com o formador enviando o link.',
    ],
    videoUrl: 'https://www.youtube.com/embed/dXdx3TjMSSo',
  },
  {
    id: 'onedrive',
    title: 'Como guardar no OneDrive',
    category: 'word-online',
    categoryLabel: 'Word Online',
    icon: '☁️',
    description: 'O OneDrive guarda os seus ficheiros na internet. Assim nunca perde o trabalho e pode aceder em qualquer lugar.',
    steps: [
      'O OneDrive está ligado à sua conta Microsoft.',
      'Quando usa o Word Online, o documento guarda automaticamente no OneDrive.',
      'Para ver os seus ficheiros, aceda a onedrive.live.com.',
      'Para carregar um ficheiro do computador: clique em "Carregar" e escolha o ficheiro.',
    ],
    tips: [
      'O OneDrive tem 5 GB gratuitos — mais que suficiente para o portefólio.',
      'Active as notificações para saber quando o ficheiro foi guardado.',
    ],
  },

  // ── FICHEIROS ──
  {
    id: 'google-drive',
    title: 'Como guardar no Google Drive',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '📂',
    description: 'O Google Drive é outra forma de guardar ficheiros na internet, de forma gratuita.',
    steps: [
      'Abra o browser e aceda a drive.google.com.',
      'Entre com a sua conta Google (Gmail). Se não tiver, crie uma gratuitamente.',
      'Clique em "+ Novo" para criar ou carregar um documento.',
      'Escolha "Carregar ficheiro" para enviar um ficheiro do computador.',
      'Ou escolha "Google Docs" para criar diretamente no browser.',
    ],
    tips: [
      'O Google Drive tem 15 GB gratuitos.',
      'Pode partilhar documentos com o formador diretamente pelo link.',
    ],
  },
  {
    id: 'enviar-email',
    title: 'Como enviar um ficheiro por email',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '📤',
    description: 'Enviar o portefólio por email é uma das formas mais comuns de o entregar ao formador.',
    steps: [
      'Abra o seu email (Gmail, Outlook, etc.).',
      'Clique em "Compor" ou "Nova mensagem".',
      'Escreva o email do formador no campo "Para:".',
      'Escreva um assunto claro, por exemplo: "Portefólio RVCC - João Silva".',
      'Clique no ícone de clipe (📎) para anexar o ficheiro.',
      'Escolha o ficheiro do portefólio no seu computador.',
      'Escreva uma mensagem curta e clique em "Enviar".',
    ],
    tips: [
      'Verifique sempre se o ficheiro foi mesmo anexado antes de enviar.',
      'Use PDF para enviar — a formatação fica sempre igual.',
      'Guarde também uma cópia para si antes de enviar.',
    ],
  },
]

export const tutorialCategories = [
  { id: 'basico', label: 'Básico', icon: '🖥️', description: 'Rato, teclado, copiar e colar' },
  { id: 'word', label: 'Word', icon: '📄', description: 'Escrever e formatar documentos' },
  { id: 'word-online', label: 'Word Online', icon: '🌐', description: 'Word gratuito no browser' },
  { id: 'ficheiros', label: 'Guardar e Enviar', icon: '📁', description: 'Guardar e enviar ficheiros' },
]
