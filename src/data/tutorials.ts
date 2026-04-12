// ─────────────────────────────────────────────────────────────────
//  NOTA: os campos videoUrl estão vazios intencionalmente.
//  Serão preenchidos com IDs do YouTube após pesquisa pelo Gemini.
//  Formato a usar: 'https://www.youtube.com/embed/VIDEO_ID'
// ─────────────────────────────────────────────────────────────────

export interface Tutorial {
  id: string
  title: string
  category: 'basico' | 'word' | 'word-online' | 'ficheiros' | 'teams'
  categoryLabel: string
  icon: string
  description: string
  steps: string[]
  tips: string[]
  videoUrl?: string
}

export const tutorials: Tutorial[] = [

  // ═══════════════════════════════════════════════════════════════
  //  BÁSICO
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'ligar-computador',
    title: 'Ligar e desligar o computador',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🔌',
    description: 'Aprender a ligar e desligar o computador de forma correcta evita perder trabalho e ajuda a manter o computador em bom estado.',
    steps: [
      'Para ligar: carregue no botão de energia (símbolo ⏻, normalmente um círculo com uma linha). Aguarde enquanto o computador arranca.',
      'Quando aparecer o ecrã de início de sessão, escreva a sua palavra-passe caso seja pedida.',
      'Para desligar correctamente: clique no botão "Iniciar" (canto inferior esquerdo, ícone do Windows).',
      'Clique em "Ligar/Desligar" (ícone de energia) e depois em "Encerrar".',
      'Aguarde que o computador se desligue completamente antes de fechar o ecrã ou puxar a ficha da corrente.',
      'Para reiniciar (quando o computador está lento ou a pedir): mesmo menu → "Reiniciar".',
    ],
    tips: [
      'Nunca desligue o computador directamente da tomada enquanto está ligado — pode corromper ficheiros.',
      'Se o computador ficar completamente preso e não responder, mantenha o botão de energia carregado durante 5 segundos para forçar o encerramento. Use apenas como último recurso.',
      'Desligue o computador com regularidade — ajuda a que funcione mais rapidamente.',
      'Se o computador demorar muito a arrancar, pode ter actualizações a instalar — aguarde com paciência.',
    ],
  },
  {
    id: 'ambiente-trabalho',
    title: 'O Ambiente de Trabalho do Windows',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🖥️',
    description: 'O Ambiente de Trabalho é o ecrã principal que aparece depois de ligar o computador. É a partir daqui que abre programas, pastas e ficheiros.',
    steps: [
      'Ao ligar o computador (e entrar, se necessário), aparece o Ambiente de Trabalho — o ecrã principal.',
      'Os ícones que vê são atalhos para programas e ficheiros. Faça duplo clique para os abrir.',
      'Na parte inferior do ecrã está a Barra de Tarefas — onde aparecem os programas abertos e o botão Iniciar.',
      'No canto inferior esquerdo está o botão Iniciar (ícone do Windows) — clique para aceder a todos os programas instalados.',
      'No canto inferior direito está o relógio, a data e ícones como o Wi-Fi e o volume.',
      'Para organizar os ícones: clique com o botão direito num espaço vazio → "Ordenar por" → escolha como quer organizar.',
      'Para criar um atalho para um programa: clique com o botão direito no programa → "Enviar para" → "Ambiente de Trabalho (criar atalho)".',
    ],
    tips: [
      'Não guarde muitos ficheiros directamente no Ambiente de Trabalho — crie pastas para os organizar.',
      'Se perder uma janela, clique no botão correspondente na Barra de Tarefas para a trazer de volta.',
      'Prima a tecla Windows (⊞) para abrir o menu Iniciar rapidamente.',
      'Pode ter vários programas abertos ao mesmo tempo — cada um aparece na Barra de Tarefas em baixo.',
    ],
  },
  {
    id: 'rato',
    title: 'Como usar o rato',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🖱️',
    description: 'O rato é um dos principais equipamentos para usar o computador. Com ele consegue clicar, seleccionar, abrir programas e navegar nas páginas.',
    steps: [
      'Coloque o rato sobre uma superfície plana — por exemplo, em cima da secretária ou de um tapete de rato.',
      'Mova o rato devagar — o cursor (a seta) no ecrã vai acompanhar o movimento.',
      'Clique com o botão esquerdo uma vez para seleccionar ou marcar algo.',
      'Faça dois cliques rápidos seguidos (duplo clique) com o botão esquerdo para abrir ficheiros e programas.',
      'Clique com o botão direito para abrir um menu com opções extra do que está a apontar.',
      'Use a rodinha do meio (scroll) para subir ou descer numa página — rode para cima para subir, para baixo para descer.',
      'Para arrastar um objecto: clique e mantenha o botão esquerdo pressionado enquanto move o rato, depois solte.',
    ],
    tips: [
      'Não precisa de carregar com força — um toque leve é suficiente.',
      'Mova o rato devagar, especialmente no início. A precisão vem com a prática.',
      'Se o cursor chegar à borda do tapete, levante o rato, coloque-o no meio e continue.',
      'Se o cursor "desaparecer" do ecrã, mova o rato devagar — ele vai reaparecer.',
    ],
  },
  {
    id: 'teclado',
    title: 'Como usar o teclado e fazer acentos',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '⌨️',
    description: 'O teclado serve para escrever texto. Aprender os acentos e as letras maiúsculas é essencial para escrever correctamente em português.',
    steps: [
      'Coloque os dedos sobre as teclas centrais — as mais usadas ficam no meio do teclado.',
      'Para escrever uma letra maiúscula: mantenha a tecla Shift pressionada e carregue na letra ao mesmo tempo.',
      'Para deixar todas as letras em maiúsculas: carregue uma vez na tecla Caps Lock. Para desactivar, carregue de novo.',
      'Para escrever á: carregue na tecla ´ (acento agudo, à esquerda do Enter) e depois carregue em A.',
      'Para escrever à: carregue na tecla de crase/grave (à esquerda do 1, em cima) e depois carregue em A.',
      'Para escrever ã: carregue em Shift + ~ e depois carregue em A.',
      'Para escrever ç: existe uma tecla própria com a cedilha no teclado português.',
      'Para apagar uma letra errada: use a tecla Backspace (← à direita da barra de espaço, em cima).',
      'Para mudar de linha: carregue na tecla Enter.',
    ],
    tips: [
      'Escreva devagar — a velocidade vem com a prática.',
      'Olhe também para o ecrã enquanto escreve, não só para o teclado.',
      'A tecla Delete apaga a letra à frente do cursor; o Backspace apaga a letra atrás.',
      'Se escrever tudo em maiúsculas sem querer, verifique se o Caps Lock está activo — há normalmente uma luz indicadora no teclado.',
    ],
  },
  {
    id: 'atalhos-teclado',
    title: 'Atalhos de teclado mais úteis',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '⚡',
    description: 'Os atalhos de teclado poupam muito tempo. Em vez de ir aos menus com o rato, pode fazer as acções mais comuns directamente com o teclado.',
    steps: [
      'CTRL + C → Copiar o texto ou ficheiro seleccionado.',
      'CTRL + V → Colar o que copiou.',
      'CTRL + X → Cortar (copiar e apagar o original ao mesmo tempo).',
      'CTRL + Z → Desfazer o último erro — um dos mais úteis! Pode carregar várias vezes para desfazer várias acções.',
      'CTRL + S → Guardar o documento actual (no Word, Bloco de Notas, etc.).',
      'CTRL + A → Seleccionar tudo (todo o texto ou todos os ficheiros da pasta).',
      'CTRL + P → Imprimir o documento actual.',
      'CTRL + F → Procurar uma palavra no documento ou na página.',
      'ALT + F4 → Fechar a janela ou programa actual.',
      'F5 → Actualizar a página no browser.',
      'Windows + D → Mostrar o Ambiente de Trabalho (minimiza todas as janelas).',
      'Windows + L → Bloquear o computador (útil quando se vai embora da secretária).',
    ],
    tips: [
      'Não precisa de saber todos — comece pelo CTRL+C, CTRL+V e CTRL+Z.',
      'O CTRL+Z pode salvar o trabalho muitas vezes — use-o sempre que fizer algo errado sem querer.',
      'Estes atalhos funcionam na grande maioria dos programas do Windows.',
    ],
  },
  {
    id: 'copiar-colar',
    title: 'Copiar e colar texto',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '📋',
    description: 'Copiar e colar é uma das funções mais úteis do computador. Permite reutilizar texto sem ter de escrever tudo novamente.',
    steps: [
      'Primeiro, seleccione o texto que quer copiar: clique com o rato no início do texto, mantenha o botão esquerdo pressionado e arraste até ao fim. O texto seleccionado fica destacado.',
      'Outra forma de seleccionar: clique no início, depois clique no fim mantendo a tecla Shift pressionada.',
      'Para seleccionar uma palavra inteira: faça duplo clique sobre ela.',
      'Para seleccionar tudo de uma vez: carregue em CTRL + A.',
      'Depois de seleccionar, carregue em CTRL + C para copiar. O texto fica na memória do computador.',
      'Clique no local onde quer colocar o texto.',
      'Carregue em CTRL + V para colar.',
      'Para mover o texto (apagar do sítio original): use CTRL + X para cortar em vez de copiar, depois CTRL + V para colar.',
    ],
    tips: [
      'Pode copiar texto de um sítio e colar noutro — por exemplo, de uma página da internet para o Word.',
      'O CTRL + Z (desfazer) funciona mesmo depois de colar — se colar no sítio errado, carregue CTRL + Z.',
      'A memória do computador (área de transferência) só guarda o último item copiado.',
    ],
  },
  {
    id: 'pasta',
    title: 'Como criar e organizar pastas',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '📁',
    description: 'Criar pastas ajuda a organizar os seus ficheiros. É como ter gavetas no computador — cada uma para um assunto diferente.',
    steps: [
      'Vá ao Ambiente de Trabalho ou abra o Explorador de Ficheiros (ícone de pasta na Barra de Tarefas).',
      'Clique com o botão direito num espaço vazio.',
      'Escolha "Novo" no menu e depois clique em "Pasta".',
      'Uma nova pasta aparece com o nome em edição — escreva o nome desejado (ex: RVCC 2025).',
      'Carregue em Enter para confirmar.',
      'Para renomear: clique com o botão direito → "Renomear" → escreva o novo nome → Enter.',
      'Para mover ficheiros para a pasta: seleccione o ficheiro, carregue CTRL + X, abra a pasta e carregue CTRL + V.',
    ],
    tips: [
      'Crie uma pasta chamada "RVCC" só para o seu portefólio.',
      'Use nomes claros — ex: "Versão Final", "Rascunho 1", "Imagens RVCC".',
      'Evite nomes com caracteres especiais como / \\ : * ? " — podem causar problemas.',
    ],
  },
  {
    id: 'browser-internet',
    title: 'O que é o browser e como navegar na internet',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🌐',
    description: 'O browser (também chamado navegador) é o programa que usa para aceder à internet. Os mais comuns são o Chrome, o Edge e o Firefox.',
    steps: [
      'Abra o browser — faça duplo clique no ícone no Ambiente de Trabalho (Chrome, Edge, Firefox).',
      'No topo há a barra de endereços — é onde escreve o endereço do site (ex: www.google.pt).',
      'Carregue em Enter depois de escrever o endereço para ir ao site.',
      'Para voltar à página anterior: clique na seta "←" no canto superior esquerdo.',
      'Para actualizar a página: carregue em F5 ou clique em ⟳ ao lado da barra de endereços.',
      'Para abrir um novo separador (tab): carregue em CTRL + T. Para fechar: CTRL + W.',
      'Para aumentar o tamanho do texto: carregue em CTRL e no "+" ao mesmo tempo. Para diminuir: CTRL + "-". Para repor: CTRL + 0.',
    ],
    tips: [
      'O Edge é o browser que vem instalado por padrão no Windows.',
      'Se um site demorar a carregar, aguarde — a ligação pode estar lenta.',
      'Nunca introduza palavras-passe em sites que não conhece ou que pareçam suspeitos.',
    ],
  },
  {
    id: 'pesquisar-internet',
    title: 'Como pesquisar na internet',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🔍',
    description: 'Saber pesquisar na internet é uma competência essencial. O Google é o motor de pesquisa mais usado no mundo.',
    steps: [
      'Abra o browser e aceda a www.google.pt (ou www.google.com).',
      'Clique na caixa de pesquisa no centro da página.',
      'Escreva o que quer pesquisar — use palavras simples e directas. Exemplo: "horário farmácia Lisboa" ou "receita canja de galinha".',
      'Carregue em Enter ou clique no botão "Pesquisa Google".',
      'Aparecem os resultados — os primeiros normalmente são os mais relevantes. Clique no que parece mais útil.',
      'Para voltar aos resultados: clique na seta "←" no browser.',
      'Se não encontrar o que procura, tente palavras diferentes ou mais específicas.',
      'Para pesquisar imagens: depois de pesquisar, clique em "Imagens" no topo da página de resultados.',
    ],
    tips: [
      'Escreva em português para obter resultados em português.',
      'Se adicionar o ano (ex: "notícias Portugal 2025") obtém resultados mais recentes.',
      'Pode pesquisar directamente na barra de endereços do browser — vai ao Google automaticamente.',
      'Evite clicar em resultados que peçam dados pessoais ou pareçam suspeitos.',
    ],
  },
  {
    id: 'email-basico',
    title: 'Como usar o email (Gmail)',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '📧',
    description: 'O email é como uma carta digital. Pode enviar e receber mensagens de qualquer lugar, de graça. O Gmail é um dos serviços mais usados em Portugal.',
    steps: [
      'Abra o browser e aceda a gmail.com.',
      'Se não tiver conta: clique em "Criar conta" e siga as instruções. Se já tiver, escreva o email e palavra-passe.',
      'Ao entrar, vê a caixa de entrada — aqui aparecem os emails recebidos.',
      'Para ler um email: clique nele.',
      'Para responder: depois de abrir o email, clique em "Responder" (ou na seta de resposta).',
      'Para escrever um novo email: clique em "+ Criar" ou "+ Redigir".',
      'No campo "Para:" escreva o endereço do destinatário. No campo "Assunto:" escreva o tema.',
      'Escreva a mensagem e quando terminar clique em "Enviar".',
      'Para anexar um ficheiro: clique no ícone de clipe 📎 e escolha o ficheiro do computador.',
    ],
    tips: [
      'Nunca partilhe a sua palavra-passe de email com ninguém.',
      'Verifique sempre o endereço de email antes de enviar.',
      'Se receber emails de desconhecidos a pedir dados pessoais ou dinheiro, ignore e elimine.',
      'Guarde o seu endereço de email e palavra-passe num local seguro.',
    ],
  },
  {
    id: 'janelas-windows',
    title: 'Gerir janelas no Windows',
    category: 'basico',
    categoryLabel: 'Básico',
    icon: '🪟',
    description: 'Saber gerir as janelas abertas no computador permite trabalhar com vários programas ao mesmo tempo de forma organizada.',
    steps: [
      'Cada programa abre numa janela. No canto superior direito há três botões: minimizar (—), maximizar (□) e fechar (✕).',
      'Minimizar (—): a janela desaparece do ecrã mas continua aberta — aparece na Barra de Tarefas.',
      'Maximizar (□): a janela ocupa todo o ecrã. Clique novamente para restaurar ao tamanho anterior.',
      'Fechar (✕): fecha o programa. Se tiver trabalho não guardado, o programa avisa.',
      'Para mover uma janela: clique na barra de título no topo e arraste.',
      'Para redimensionar: coloque o cursor na borda da janela — quando aparecer uma seta dupla, clique e arraste.',
      'Para ter duas janelas lado a lado: arraste uma para o lado esquerdo até aparecer um contorno e solte. Repita do lado direito com outra.',
      'Para alternar entre janelas: carregue em ALT + Tab.',
    ],
    tips: [
      'Se fechar o Word com trabalho não guardado, aparece uma janela a perguntar se quer guardar — diga sempre "Sim".',
      'Pode ter o browser e o Word abertos ao mesmo tempo para copiar informação de um para o outro.',
      'Windows + D minimiza todas as janelas de uma vez — útil para ver o Ambiente de Trabalho.',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  WORD
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'word-abrir',
    title: 'Abrir e começar um documento Word',
    category: 'word',
    categoryLabel: 'Word',
    icon: '📄',
    description: 'O Word é o programa mais usado para escrever documentos. Vamos aprender a abri-lo e a criar o primeiro documento.',
    steps: [
      'Procure o ícone do Word no Ambiente de Trabalho ou no menu Iniciar (ícone azul com a letra W).',
      'Faça duplo clique para abrir o Word.',
      'Na página de início, clique em "Documento em branco" para criar um novo documento.',
      'Para abrir um documento existente: clique em "Abrir" → "Este PC" ou "Procurar" → navegue até ao ficheiro → "Abrir".',
      'A área branca no centro é onde escreve o texto — clique nela e comece a escrever.',
      'No topo há a Faixa de Opções com separadores: Início, Inserir, Esquema de Página, etc. É aqui que encontra todas as ferramentas.',
    ],
    tips: [
      'Se o Word não estiver instalado, pode usar o Word Online gratuitamente — veja o tutorial correspondente.',
      'O Word guarda os ficheiros com a extensão .docx — o formato padrão.',
      'Pode ter vários documentos Word abertos ao mesmo tempo.',
    ],
  },
  {
    id: 'word-formatacao-texto',
    title: 'Formatar texto: negrito, itálico e sublinhado',
    category: 'word',
    categoryLabel: 'Word',
    icon: '✏️',
    description: 'A formatação de texto permite destacar partes importantes, organizar a informação visualmente e tornar o documento mais profissional.',
    steps: [
      'Primeiro, seleccione o texto que quer formatar (clique no início e arraste até ao fim).',
      'Para Negrito: clique no botão "N" (ou "B") na barra de ferramentas, ou carregue CTRL + N.',
      'Para Itálico (texto inclinado): clique no botão "I", ou carregue CTRL + I.',
      'Para Sublinhado: clique no botão "S" (ou "U"), ou carregue CTRL + U.',
      'Pode combinar os três: seleccione o texto e aplique negrito, itálico e sublinhado em conjunto.',
      'Para remover a formatação: seleccione o texto formatado e clique no mesmo botão.',
      'Para formatar enquanto escreve: active (ex: CTRL + N), escreva, e depois desactive (CTRL + N) para continuar em texto normal.',
    ],
    tips: [
      'Use negrito para destacar títulos, palavras-chave ou informações importantes.',
      'Use itálico para títulos de livros, palavras estrangeiras ou termos técnicos.',
      'Evite sublinhado em excesso — pode confundir com hiperligações (links).',
    ],
  },
  {
    id: 'word-letra',
    title: 'Tipo e tamanho da letra',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🔤',
    description: 'Escolher o tipo e o tamanho de letra correctos torna o documento mais legível e com um aspecto profissional.',
    steps: [
      'Seleccione o texto a alterar (ou CTRL + A para seleccionar tudo).',
      'Na barra de ferramentas (separador "Início"), vê duas caixas: uma com o nome da letra (ex: "Calibri") e outra com o tamanho (ex: "11").',
      'Para mudar o tipo de letra: clique na caixa com o nome, escreva o nome desejado (ex: "Arial") e carregue Enter — ou use a seta para ver a lista.',
      'Para mudar o tamanho: clique na caixa com o número, escreva o tamanho (ex: 12) e carregue Enter.',
      'Os botões "A↑" e "A↓" na barra também aumentam/diminuem o tamanho.',
      'Para mudar a cor: clique na seta ao lado do botão "A" com linha colorida → escolha a cor.',
      'Para o portefólio: recomenda-se "Calibri" ou "Arial", tamanho 12.',
    ],
    tips: [
      'Letras recomendadas para documentos formais: Calibri, Arial, Times New Roman.',
      'Tamanho 12 é o padrão. Títulos costumam ter 14 a 18.',
      'Evite usar muitos tipos de letra — um ou dois dão aspecto mais cuidado.',
    ],
  },
  {
    id: 'word-titulos',
    title: 'Títulos, estilos e organização do documento',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🏷️',
    description: 'Usar os estilos de Título do Word organiza visualmente o documento e cria hierarquia entre as secções — essencial para o portefólio.',
    steps: [
      'No separador "Início" encontra a secção "Estilos" com botões: "Normal", "Título 1", "Título 2", etc.',
      'Para aplicar um Título 1 (título principal de secção): clique na linha de texto e depois em "Título 1".',
      'Para subtítulos: use "Título 2". Para sub-subtítulos: "Título 3".',
      'O texto normal deve ter o estilo "Normal".',
      'Estrutura sugerida para o portefólio: "Introdução" → Título 1; "Autobiografia" → Título 1; "Infância" → Título 2; etc.',
      'Para alterar o aspecto de um estilo: clique com o botão direito no estilo → "Modificar".',
    ],
    tips: [
      'Usar os Títulos correctamente permite criar um índice automático.',
      'O painel "Navegação" (Ver → Painel de Navegação) permite clicar nos títulos para saltar directamente para essa secção.',
      'Se um título não aparecer com o aspecto certo, verifique se o estilo aplicado é mesmo "Título 1" e não "Normal" com letra grande.',
    ],
  },
  {
    id: 'word-paragrafos',
    title: 'Parágrafos, espaçamento e alinhamento',
    category: 'word',
    categoryLabel: 'Word',
    icon: '¶',
    description: 'Um bom espaçamento e alinhamento tornam o texto mais fácil de ler e dão ao documento um aspecto mais cuidado e profissional.',
    steps: [
      'Para alinhar ao centro: seleccione o texto e carregue CTRL + E.',
      'Para alinhar à esquerda (padrão): CTRL + Q.',
      'Para justificar (alinhado dos dois lados): CTRL + J — recomendado para o corpo de texto do portefólio.',
      'Para mudar o espaçamento entre linhas: seleccione o texto → clique no ícone com linhas e setas (↕) no separador "Início" → escolha (ex: 1,5 ou 2).',
      'Para adicionar espaço antes/depois de um parágrafo: separador "Esquema de Página" → secção "Parágrafo" → altere "Antes" e "Depois".',
      'Para criar novo parágrafo: carregue Enter. Para nova linha no mesmo parágrafo: Shift + Enter.',
    ],
    tips: [
      'Espaçamento de 1,5 linhas é o mais recomendado para documentos formais.',
      'Evite dar vários Enters seguidos para criar espaço — use o espaçamento de parágrafo.',
      'O texto justificado (CTRL + J) é o mais comum em documentos formais em Portugal.',
    ],
  },
  {
    id: 'word-listas',
    title: 'Criar listas com marcadores e numeração',
    category: 'word',
    categoryLabel: 'Word',
    icon: '📝',
    description: 'As listas organizam a informação de forma clara. Marcadores (•) para itens sem ordem; numeração (1, 2, 3) para passos sequenciais.',
    steps: [
      'Para lista com marcadores (•): clique no botão "Lista com Marcadores" na barra, ou carregue CTRL + Shift + L.',
      'Escreva o primeiro item e carregue Enter para o seguinte.',
      'Para terminar: carregue Enter duas vezes, ou clique no botão da lista para desactivar.',
      'Para lista numerada: clique no botão "Lista Numerada"— funciona da mesma forma.',
      'Para avançar um nível (sub-lista): carregue Tab no início do item.',
      'Para recuar um nível: Shift + Tab.',
    ],
    tips: [
      'Use listas numeradas quando a ordem é importante (ex: passos de um processo).',
      'Use marcadores quando a ordem não interessa (ex: enumerar características).',
      'Para alterar a numeração inicial: clique com o botão direito → "Definir Valor de Numeração".',
    ],
  },
  {
    id: 'word-guardar',
    title: 'Como guardar um ficheiro Word (.docx)',
    category: 'word',
    categoryLabel: 'Word',
    icon: '💾',
    description: 'Guardar o trabalho com regularidade é fundamental. Um corte de luz ou um erro inesperado pode fazer perder horas de trabalho.',
    steps: [
      'Para guardar pela primeira vez: "Ficheiro" → "Guardar como".',
      'Escolha onde guardar: "Este PC" → navegue até à pasta (ex: pasta RVCC).',
      'Dê um nome ao ficheiro (ex: Portefolio_JoaoSilva_v1).',
      'Certifique-se que em "Tipo" está "Documento Word (*.docx)".',
      'Clique em "Guardar".',
      'Para guardar as alterações depois: carregue apenas CTRL + S.',
      'Para guardar uma cópia: "Ficheiro" → "Guardar como" → dê um nome diferente.',
    ],
    tips: [
      'Carregue CTRL + S frequentemente enquanto trabalha — de 5 em 5 minutos é uma boa prática.',
      'Use versões nos nomes: v1, v2, v3. Assim tem sempre versões anteriores.',
      'Nunca guarde apenas no Ambiente de Trabalho — crie uma pasta específica.',
    ],
  },
  {
    id: 'word-pdf',
    title: 'Guardar ou exportar como PDF',
    category: 'word',
    categoryLabel: 'Word',
    icon: '📑',
    description: 'O PDF é o formato mais usado para enviar documentos pois a formatação fica sempre igual independentemente do computador de quem recebe.',
    steps: [
      'No Word, clique em "Ficheiro" no canto superior esquerdo.',
      'Clique em "Guardar como" (ou "Exportar" em versões mais recentes).',
      'Escolha a pasta de destino.',
      'Na caixa "Tipo de ficheiro", seleccione "PDF (*.pdf)".',
      'Dê um nome ao ficheiro e clique em "Guardar".',
      'Alternativa: "Ficheiro" → "Exportar" → "Criar documento PDF/XPS" → "Publicar".',
    ],
    tips: [
      'O PDF não pode ser editado facilmente — guarde sempre também o .docx original.',
      'Use o PDF para enviar ao formador — a formatação fica sempre igual em qualquer computador.',
      'Antes de enviar, abra o PDF e confirme que está como esperado.',
    ],
  },
  {
    id: 'word-ortografia',
    title: 'Verificar e corrigir erros ortográficos',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🔴',
    description: 'O Word sublinha automaticamente as palavras com possíveis erros. Aprender a usar esta ferramenta ajuda a entregar um portefólio sem erros.',
    steps: [
      'O Word sublinha com linha vermelha ondulada as palavras com possível erro ortográfico.',
      'Linha azul ondulada = possível erro gramatical ou de pontuação.',
      'Para ver sugestões: clique com o botão direito sobre a palavra sublinhada e escolha a sugestão correcta.',
      'Para verificar o documento todo: carregue F7 ou vá ao separador "Rever" → "Ortografia e Gramática".',
      'O verificador percorre o documento e mostra cada erro — pode "Corrigir", "Ignorar" ou "Adicionar ao Dicionário".',
      'Para configurar o idioma (importante): separador "Rever" → "Idioma" → "Definir idioma de revisão" → seleccione "Português (Portugal)".',
    ],
    tips: [
      'Nem sempre o Word tem razão — por vezes sublinha palavras correctas que não conhece.',
      'Nomes próprios são frequentemente sublinhados — clique em "Ignorar" ou "Adicionar ao Dicionário".',
      'Configure sempre o idioma para "Português (Portugal)" para evitar sugestões em português do Brasil.',
    ],
  },
  {
    id: 'word-numerar-paginas',
    title: 'Numerar páginas e adicionar cabeçalho/rodapé',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🔢',
    description: 'A numeração de páginas e o cabeçalho/rodapé são elementos importantes em documentos formais como o portefólio.',
    steps: [
      'Separador "Inserir" → "Número de Página" → escolha a posição (Cabeçalho ou Rodapé da Página).',
      'Escolha o estilo (ex: número centrado ou à direita).',
      'O Word abre a área de cabeçalho/rodapé. Para sair, faça duplo clique no texto do documento.',
      'Para adicionar o seu nome no cabeçalho: "Inserir" → "Cabeçalho" → "Editar Cabeçalho" → escreva o texto.',
      'Para editar cabeçalho/rodapé existente: faça duplo clique na área de cabeçalho (em cima) ou rodapé (em baixo).',
      'Para remover a numeração: "Inserir" → "Número de Página" → "Remover Números de Página".',
    ],
    tips: [
      'No portefólio, é recomendável numerar as páginas para facilitar referências durante a avaliação.',
      'A capa normalmente não leva número — active "Primeira página diferente" nas opções do cabeçalho/rodapé.',
      'Pode colocar o seu nome no cabeçalho e a numeração no rodapé para um aspecto profissional.',
    ],
  },
  {
    id: 'word-imagens',
    title: 'Inserir imagens no Word',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🖼️',
    description: 'Adicionar imagens ao portefólio pode torná-lo mais rico — fotografias, documentos digitalizados, etc.',
    steps: [
      'Clique no local do documento onde quer inserir a imagem.',
      'Separador "Inserir" → "Imagens" → "Este Dispositivo".',
      'Navegue até à pasta com a imagem, seleccione-a e clique em "Inserir".',
      'A imagem aparece no documento. Clique nela para a seleccionar.',
      'Para redimensionar: arraste os pontos nos cantos (mantém as proporções). Evite arrastar pelos lados (distorce).',
      'Para mover livremente: clique direito → "Moldar texto" → "À frente do texto" — agora pode arrastar.',
      'Para eliminar: seleccione a imagem e carregue Delete.',
    ],
    tips: [
      'Arraste sempre pelos cantos para manter as proporções da imagem.',
      'Para o portefólio, as imagens devem ser relevantes: fotografia pessoal, documentos, diplomas.',
      'Pode também copiar uma imagem da internet (clique direito → "Copiar imagem") e colar no Word com CTRL + V.',
    ],
  },
  {
    id: 'word-procurar',
    title: 'Procurar e substituir texto no Word',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🔍',
    description: 'A função de procurar permite encontrar rapidamente uma palavra. A substituição é útil para corrigir uma palavra que aparece várias vezes.',
    steps: [
      'Para procurar: carregue CTRL + F. Escreva a palavra e carregue Enter.',
      'O Word destaca todas as ocorrências. Use as setas para navegar entre elas.',
      'Para procurar e substituir: carregue CTRL + H.',
      'No campo "Localizar" escreva a palavra a substituir. No campo "Substituir por" escreva a nova palavra.',
      '"Substituir" troca uma de cada vez; "Substituir Tudo" troca todas de uma vez.',
      'Para fechar o painel: carregue Escape.',
    ],
    tips: [
      'Útil para corrigir erros repetidos — ex: se escreveu sempre "RVVC" em vez de "RVCC".',
      'Depois de "Substituir Tudo", o Word indica quantas substituições fez.',
    ],
  },
  {
    id: 'word-imprimir',
    title: 'Imprimir um documento Word',
    category: 'word',
    categoryLabel: 'Word',
    icon: '🖨️',
    description: 'Imprimir é mais simples do que parece. Antes de imprimir, faça sempre uma pré-visualização para ver como vai ficar na página.',
    steps: [
      'Certifique-se que a impressora está ligada e com papel.',
      'Carregue CTRL + P ou vá a "Ficheiro" → "Imprimir".',
      'Aparece uma janela com pré-visualização à direita.',
      'Verifique se a impressora correcta está seleccionada.',
      'Para imprimir páginas específicas: em "Páginas" escreva os números (ex: 1-3 ou 1,3,5).',
      'Escolha o número de cópias se necessário.',
      'Clique em "Imprimir".',
    ],
    tips: [
      'Faça sempre a pré-visualização antes de imprimir para não desperdiçar papel.',
      'Se o texto estiver a sair cortado nas margens: "Esquema de Página" → "Margens" → reduza um pouco.',
      'Para imprimir frente e verso, use a opção correspondente nas definições de impressão (se a impressora suportar).',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  WORD ONLINE
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'word-online',
    title: 'Como usar o Word Online (versão gratuita)',
    category: 'word-online',
    categoryLabel: 'Word Online',
    icon: '🌐',
    description: 'O Word Online é a versão gratuita do Word que funciona directamente no browser, sem instalar nada. Guarda automaticamente e pode ser acedido em qualquer computador com internet.',
    steps: [
      'Abra o browser (Chrome, Edge ou Firefox).',
      'Aceda a office.com e entre com a sua conta IEFP (o email e palavra-passe que lhe foram fornecidos pelo IEFP) — ou com uma conta Microsoft pessoal gratuita criada em outlook.com.',
      'Clique em "Word" na lista de aplicações.',
      'Clique em "Novo documento em branco".',
      'Escreva o seu texto — é guardado automaticamente no OneDrive.',
      'A barra de ferramentas tem as mesmas opções do Word instalado: negrito, itálico, títulos, etc.',
      'Para descarregar o documento: "Ficheiro" → "Guardar como" → "Descarregar uma cópia" → ".docx".',
    ],
    tips: [
      'Não precisa de instalar nada — funciona directamente no browser, de graça.',
      'O documento fica no OneDrive — pode aceder de qualquer computador com internet.',
      'Se usar a conta IEFP, o armazenamento está incluído. Com conta Microsoft pessoal tem 5 GB gratuitos no OneDrive.',
    ],
  },
  {
    id: 'criar-conta-microsoft',
    title: 'Conta IEFP e conta Microsoft — o que são e como usar',
    category: 'word-online',
    categoryLabel: 'Word Online',
    icon: '👤',
    description: 'Para usar o Word Online, o OneDrive e o Teams precisa de uma conta Microsoft. Se frequenta um centro RVCC, o IEFP já lhe forneceu uma conta — é uma conta Microsoft do domínio IEFP. Se não tiver, pode criar uma pessoal gratuita.',
    steps: [
      'Verifique se recebeu um email do IEFP com os seus dados de acesso (email e palavra-passe). Esse é a sua conta IEFP.',
      'A conta IEFP é uma conta Microsoft — pode usá-la para aceder ao Teams, Word Online e OneDrive.',
      'Se não tiver conta IEFP, pode criar uma conta pessoal gratuita: abra o browser e aceda a account.microsoft.com.',
      'Clique em "Criar uma conta Microsoft".',
      'Escolha "Criar um novo endereço de email" (vai criar um email @outlook.com gratuito) ou use um email que já tenha.',
      'Se criar novo: escreva o nome de utilizador (ex: joaosilva2025) e clique em "Seguinte".',
      'Crie uma palavra-passe forte: letras maiúsculas, minúsculas, números e símbolos (ex: Rvcc2025!).',
      'Preencha o formulário (nome, data de nascimento) e siga as instruções.',
      'Pode ser pedida verificação por SMS — verifique o telemóvel.',
    ],
    tips: [
      'Se tiver dúvidas sobre a sua conta IEFP, contacte o seu formador ou o centro de formação.',
      'Guarde o email e a palavra-passe num papel em local seguro.',
      'A conta Microsoft dá acesso ao Word Online, Excel Online, PowerPoint Online e OneDrive.',
      'Não use palavras-passe simples como "123456" ou o seu nome.',
    ],
  },
  {
    id: 'onedrive',
    title: 'Guardar e gerir ficheiros no OneDrive',
    category: 'word-online',
    categoryLabel: 'Word Online',
    icon: '☁️',
    description: 'O OneDrive é o serviço de armazenamento online da Microsoft. Guarda os seus ficheiros na internet acessíveis de qualquer lugar.',
    steps: [
      'O OneDrive está ligado à sua conta IEFP ou conta Microsoft pessoal.',
      'Quando usa o Word Online, o documento guarda automaticamente no OneDrive.',
      'Para aceder: aceda a onedrive.live.com com a sua conta IEFP ou conta Microsoft pessoal.',
      'Para carregar um ficheiro: "+ Novo" → "Carregar ficheiros" → escolha o ficheiro.',
      'Para descarregar: clique com o botão direito no ficheiro → "Transferir".',
      'Para criar pastas: "+ Novo" → "Pasta" → dê um nome.',
      'Para partilhar: clique com o botão direito → "Partilhar" → escreva o email → "Enviar".',
    ],
    tips: [
      'Se apagar um ficheiro por engano, vá ao "Reciclado" (menu esquerdo) para o recuperar.',
      'Com a sincronização automática, os ficheiros aparecem tanto no computador como online.',
    ],
  },
  {
    id: 'partilhar-historico',
    title: 'Partilhar documentos e ver histórico de versões',
    category: 'word-online',
    categoryLabel: 'Word Online',
    icon: '🔗',
    description: 'No Word Online pode partilhar documentos com o formador e ver versões anteriores — muito útil se apagar algo por engano.',
    steps: [
      'Para partilhar: abra o documento no Word Online e clique em "Partilhar" (canto superior direito).',
      'Escreva o email de quem quer partilhar e escolha permissões: "Pode editar" ou "Pode ver".',
      'Clique em "Enviar" — a pessoa recebe um link por email.',
      'Para obter link directo: "Partilhar" → "Copiar link" → "Qualquer pessoa com o link pode ver".',
      'Para ver histórico de versões: "Ficheiro" → "Informações" → "Histórico de versões".',
      'Clique numa versão anterior para a abrir. Para restaurar: clique em "Restaurar".',
    ],
    tips: [
      'O histórico de versões pode salvar o trabalho se apagar texto importante.',
      'Partilhe o documento com o formador directamente em vez de enviar por email.',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  GUARDAR E ENVIAR FICHEIROS
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'google-drive',
    title: 'Como usar o Google Drive',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '📂',
    description: 'O Google Drive é gratuito e permite guardar e partilhar ficheiros online. Com uma conta Google (Gmail) tem 15 GB gratuitos.',
    steps: [
      'Abra o browser e aceda a drive.google.com.',
      'Entre com a sua conta Google. Se não tiver, crie uma em gmail.com.',
      '"O meu disco" mostra os seus ficheiros.',
      'Para carregar um ficheiro: "+ Novo" → "Carregar ficheiro" → escolha o ficheiro.',
      'Para criar um documento de texto: "+ Novo" → "Google Docs".',
      'Para criar pasta: "+ Novo" → "Pasta".',
      'Para partilhar: clique direito no ficheiro → "Partilhar" → email da pessoa → "Enviar".',
    ],
    tips: [
      '15 GB gratuitos — mais do que suficiente para o portefólio.',
      'O Google Docs guarda automaticamente em tempo real.',
      'Pode aceder de qualquer computador ou telemóvel com internet.',
    ],
  },
  {
    id: 'enviar-email',
    title: 'Enviar um ficheiro por email',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '📤',
    description: 'Enviar o portefólio por email é uma das formas mais comuns de o entregar. Aprenda a anexar ficheiros correctamente.',
    steps: [
      'Abra o seu email (Gmail, Outlook, etc.).',
      'Clique em "Novo email", "+ Criar" ou "Escrever".',
      'No campo "Para:" escreva o endereço do destinatário.',
      'No campo "Assunto:" escreva um assunto claro: ex: "Portefólio RVCC — João Silva".',
      'Para anexar: clique no ícone de clipe 📎 e seleccione o ficheiro.',
      'Aguarde que o ficheiro carregue completamente.',
      'Escreva uma breve mensagem e verifique se o endereço e o ficheiro estão correctos.',
      'Clique em "Enviar".',
    ],
    tips: [
      'Verifique sempre se o ficheiro foi mesmo anexado antes de enviar.',
      'Use o formato PDF para enviar — a formatação fica sempre igual.',
      'Guarde uma cópia do email enviado para ter registo.',
    ],
  },
  {
    id: 'descarregar-ficheiros',
    title: 'Descarregar ficheiros da internet',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '⬇️',
    description: 'Saber descarregar ficheiros da internet é útil para guardar documentos, formulários e outros conteúdos no computador.',
    steps: [
      'Quando clica num link de download, o browser começa automaticamente a descarregar o ficheiro.',
      'Aparece uma notificação a indicar o progresso (normalmente em baixo ou no canto superior).',
      'Por omissão, os ficheiros ficam na pasta "Transferências" (ou "Downloads").',
      'Para abrir essa pasta: Explorador de Ficheiros → "Transferências" no menu lateral.',
      'Se quiser guardar noutro local: ao descarregar, clique em "Guardar como" e escolha a pasta.',
      'Para abrir o ficheiro: duplo clique no ficheiro na pasta Transferências.',
    ],
    tips: [
      'Só descarregue ficheiros de sites de confiança.',
      'Verifique o tipo de ficheiro: .docx, .pdf, .jpg são seguros. Tenha cuidado com .exe.',
      'Organize regularmente a pasta Transferências para não acumular ficheiros desnecessários.',
    ],
  },
  {
    id: 'abrir-ficheiro-email',
    title: 'Abrir e guardar ficheiros recebidos por email',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '📨',
    description: 'Quando recebe um email com ficheiro anexado, pode abri-lo directamente ou guardá-lo no computador.',
    steps: [
      'Abra o email com o ficheiro anexado.',
      'O anexo aparece no fundo do email — tem o nome do ficheiro e um ícone.',
      'Para abrir directamente: clique no nome ou ícone do ficheiro.',
      'Para guardar no computador: clique com o botão direito no anexo → "Guardar como" (ou ícone ⬇️).',
      'Escolha a pasta de destino (ex: pasta RVCC) e clique em "Guardar".',
    ],
    tips: [
      'Antes de abrir, certifique-se que o email vem de alguém de confiança.',
      'Se não esperava receber aquele ficheiro, contacte o remetente antes de abrir.',
      'Guarde os ficheiros importantes numa pasta organizada, não apenas na pasta Transferências.',
    ],
  },
  {
    id: 'renomear-ficheiros',
    title: 'Renomear e organizar ficheiros',
    category: 'ficheiros',
    categoryLabel: 'Guardar e Enviar',
    icon: '✏️',
    description: 'Dar nomes claros e descritivos aos ficheiros torna muito mais fácil encontrá-los mais tarde.',
    steps: [
      'No Explorador de Ficheiros, navegue até ao ficheiro.',
      'Clique com o botão direito e clique em "Renomear".',
      'O nome fica em modo de edição — escreva o novo nome.',
      'Carregue Enter para confirmar.',
      'Alternativa: seleccione o ficheiro e carregue F2.',
    ],
    tips: [
      'Boas convenções: "Portefolio_JoaoSilva_v2.docx", "CV_2025.pdf".',
      'Use _ ou - em vez de espaços nos nomes.',
      'Não apague a extensão do ficheiro (.docx, .pdf, .jpg) ao renomear.',
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  //  MICROSOFT TEAMS
  // ═══════════════════════════════════════════════════════════════

  {
    id: 'teams-o-que-e',
    title: 'O que é o Microsoft Teams',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '💬',
    description: 'O Microsoft Teams é uma aplicação de comunicação e colaboração. Permite fazer videochamadas, enviar mensagens e partilhar documentos — muito usado em contextos escolares e profissionais.',
    steps: [
      'O Teams é uma aplicação da Microsoft que junta mensagens, videochamadas e partilha de ficheiros num só sítio.',
      'Pode ser usado no computador (instalando a aplicação), no browser (sem instalar) ou no telemóvel.',
      'As principais funcionalidades são: Chat (mensagens), Reuniões (videochamadas), Equipas (grupos) e Ficheiros.',
      'No contexto do RVCC é frequentemente usado para reuniões com formadores e para partilhar documentos.',
      'Para aceder no browser: vá a teams.microsoft.com e entre com a sua conta IEFP (o email e palavra-passe que lhe foram fornecidos pelo IEFP).',
      'Para instalar a aplicação: aceda a teams.microsoft.com e clique em "Transferir a aplicação para computador".',
    ],
    tips: [
      'Não precisa de instalar o Teams para participar em reuniões — pode usar directamente no browser.',
      'Se o seu centro de formação usar o Teams, use sempre a conta IEFP que lhe foi fornecida.',
      'Se o centro de formação usar o Teams, provavelmente receberá um convite por email — siga as instruções do convite.',
    ],
  },
  {
    id: 'teams-instalar',
    title: 'Instalar e configurar o Microsoft Teams',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '⬇️',
    description: 'Instalar o Teams no computador permite ter notificações a funcionar correctamente para não perder nenhuma mensagem ou reunião.',
    steps: [
      'Abra o browser e aceda a teams.microsoft.com.',
      'Clique em "Transferir a aplicação para computador".',
      'O ficheiro de instalação (TeamsSetup.exe) é descarregado para a pasta Transferências.',
      'Faça duplo clique no ficheiro para iniciar a instalação.',
      'O Teams instala automaticamente — aguarde.',
      'Quando terminar, o Teams abre e pede sessão. Introduza o email e palavra-passe da conta IEFP (fornecidos pelo IEFP).',
      'Siga as instruções de configuração inicial — pode adicionar nome e fotografia de perfil.',
    ],
    tips: [
      'Se o computador não tiver permissões de instalação, use o Teams no browser.',
      'O Teams actualiza-se automaticamente.',
      'Pode configurar as notificações: ícone do perfil → Definições → Notificações.',
    ],
  },
  {
    id: 'teams-entrar-reuniao',
    title: 'Entrar numa reunião do Teams',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '📹',
    description: 'Participar numa videochamada no Teams é simples. Pode entrar por convite de email ou directamente pela aplicação.',
    steps: [
      'Pelo convite por email: quando recebe um convite, o email tem um botão "Entrar na reunião do Microsoft Teams". Clique nesse botão na data e hora marcada.',
      'Aparece uma janela a perguntar como quer entrar: "Abrir Microsoft Teams" ou "Continuar neste browser".',
      'Antes de entrar, aparece um ecrã de pré-visualização para testar o microfone e a câmara.',
      'Para activar o microfone: clique no ícone 🎤 (deve estar activo). Se tiver um risco, está em silêncio.',
      'Para activar a câmara: clique no ícone 📷.',
      'Quando estiver pronto, clique em "Participar" ou "Entrar agora".',
      'Pelo calendário do Teams: "Calendário" no menu lateral → clique na reunião → "Participar".',
    ],
    tips: [
      'Entre alguns minutos antes para ter tempo de resolver problemas técnicos.',
      'Se não for falar, mantenha o microfone em silêncio para não interromper com ruído de fundo.',
      'Se a câmara não funcionar, verifique se não está coberta ou se outra aplicação a está a usar.',
    ],
  },
  {
    id: 'teams-microfone-camera',
    title: 'Microfone e câmara no Teams: activar e configurar',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '🎤',
    description: 'Saber gerir o microfone e a câmara é essencial para ter boas videochamadas. Problemas de som são dos mais comuns — aprenda a resolvê-los.',
    steps: [
      'Para activar/desactivar o microfone durante reunião: clique no ícone 🎤 na barra de controlo. Se tiver risco vermelho, está em silêncio.',
      'Para activar/desactivar a câmara: clique no ícone 📷.',
      'Atalho para silenciar/activar microfone: CTRL + Shift + M.',
      'Para testar antes da reunião: ícone do perfil → Definições → Dispositivos.',
      'Para escolher qual microfone/câmara usar: na secção "Dispositivos" dos Definições.',
      'Se o microfone não funcionar: no Chrome/Edge, clique no cadeado na barra de endereços → Permissões → Microfone → Activar.',
    ],
    tips: [
      'Use auscultadores com microfone — melhora muito a qualidade do áudio.',
      'Mantenha o microfone em silêncio quando não está a falar.',
      'Se a imagem da câmara estiver escura, certifique-se que tem iluminação à frente — de frente para uma janela.',
    ],
  },
  {
    id: 'teams-mensagens',
    title: 'Enviar mensagens e ficheiros no Teams',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '✉️',
    description: 'O chat do Teams permite enviar mensagens rápidas ao formador ou a colegas, e também partilhar ficheiros de forma simples.',
    steps: [
      'Na aplicação, clique em "Chat" (ícone de balão no menu lateral).',
      'Para nova conversa: clique em "Nova conversa" ou no ícone de lápis.',
      'Escreva o nome ou email da pessoa → seleccione → clique em "Ir para".',
      'Escreva a mensagem e carregue Enter para enviar.',
      'Para enviar ficheiro: clique no ícone 📎 ou "+ Adicionar" → "Carregar do meu computador".',
      'Para responder a mensagem específica: passe o rato por cima → clique em "Responder".',
      'Para editar mensagem enviada: passe o rato → três pontos (⋯) → "Editar".',
    ],
    tips: [
      'O chat é mais rápido que o email para comunicação informal com o formador.',
      'Os ficheiros enviados ficam guardados na secção "Ficheiros" da conversa.',
    ],
  },
  {
    id: 'teams-browser',
    title: 'Usar o Teams no browser (sem instalar)',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '🌐',
    description: 'Pode usar o Teams directamente no browser sem instalar nada — útil em computadores da biblioteca ou do trabalho.',
    steps: [
      'Abra o browser (Chrome ou Edge recomendados).',
      'Aceda a teams.microsoft.com.',
      'Entre com o email e palavra-passe da conta IEFP (fornecidos pelo IEFP).',
      'Se aparecer a opção de descarregar, clique em "Continuar na web".',
      'A interface é semelhante à da aplicação: Chat, Equipas, Calendário no lado esquerdo.',
      'Para reunião no browser: clique no convite → "Continuar neste browser" → permitir microfone e câmara.',
    ],
    tips: [
      'O Edge funciona especialmente bem com o Teams, por serem ambos da Microsoft.',
      'Algumas funcionalidades podem estar limitadas no browser — para uso básico funciona na perfeição.',
      'Se a reunião não abrir, tente no Chrome com o modo anónimo desactivado.',
    ],
  },
  {
    id: 'teams-duvidas',
    title: 'Resolver problemas comuns no Teams',
    category: 'teams',
    categoryLabel: 'Microsoft Teams',
    icon: '🔧',
    description: 'Problemas técnicos no Teams são normais no início. Aprenda a resolver os mais comuns para não ficar sem acesso às suas reuniões.',
    steps: [
      '"Ninguém me ouve" → Verifique se o microfone não está em silêncio e se o browser tem permissão para o microfone.',
      '"Não vejo a câmara" → Verifique se não está tapada e se outra aplicação a está a usar (ex: Skype).',
      '"Não consigo entrar na reunião" → Verifique a data/hora, se o link não expirou, e se a reunião não foi cancelada.',
      '"O som/imagem corta" → Verifique a ligação à internet. Se usar Wi-Fi, aproxime-se do router.',
      '"O Teams não abre" → Feche e reabra. Se não resultar, reinicie o computador.',
      '"Esqueci a palavra-passe" → login.microsoftonline.com → "Esqueci-me da palavra-passe" → siga as instruções.',
      '"Não recebo notificações" → ícone do perfil → Definições → Notificações → active os alertas.',
    ],
    tips: [
      'Reiniciar o Teams ou o browser resolve a maioria dos problemas.',
      'Se tiver internet lenta, desligue a câmara durante a reunião — o som fica melhor.',
      'O suporte da Microsoft tem artigos de ajuda em português: support.microsoft.com.',
    ],
  },
]

export const tutorialCategories = [
  { id: 'basico',      label: 'Básico',           icon: '🖥️',  description: 'Rato, teclado, internet e Windows' },
  { id: 'word',        label: 'Word',              icon: '📄',  description: 'Escrever, formatar e imprimir documentos' },
  { id: 'word-online', label: 'Word Online',       icon: '🌐',  description: 'Word gratuito no browser — sem instalar nada' },
  { id: 'ficheiros',   label: 'Guardar e Enviar',  icon: '📁',  description: 'Guardar, partilhar e enviar ficheiros' },
  { id: 'teams',       label: 'Microsoft Teams',   icon: '💬',  description: 'Reuniões, mensagens e videochamadas' },
]

// ─────────────────────────────────────────────────────────────────
//  LISTA DE TÓPICOS PARA PESQUISA DE VÍDEOS (enviar ao Gemini)
// ─────────────────────────────────────────────────────────────────
// Para cada tópico abaixo pedir ao Gemini um URL do YouTube em pt-PT (ou pt-BR)
// e preencher o campo videoUrl correspondente no tutorial com o ID do vídeo.
// Formato: 'https://www.youtube.com/embed/VIDEO_ID'
//
//  basico/ligar-computador       → "como ligar e desligar computador windows tutorial"
//  basico/ambiente-trabalho      → "ambiente de trabalho windows tutorial iniciantes"
//  basico/rato                   → "como usar o rato computador iniciantes"
//  basico/teclado                → "como usar teclado acentos português windows"
//  basico/atalhos-teclado        → "atalhos teclado windows dicas"
//  basico/copiar-colar           → "como copiar e colar texto computador tutorial"
//  basico/pasta                  → "como criar pasta computador windows"
//  basico/browser-internet       → "como usar browser navegar internet iniciantes"
//  basico/pesquisar-internet     → "como pesquisar google dicas tutorial"
//  basico/email-basico           → "como usar gmail tutorial iniciantes português"
//  basico/janelas-windows        → "gerir janelas windows tutorial"
//  word/word-abrir               → "como abrir word criar documento tutorial"
//  word/word-formatacao-texto    → "negrito itálico sublinhado word tutorial"
//  word/word-letra               → "tipo tamanho letra word tutorial"
//  word/word-titulos             → "estilos títulos word organizar documento"
//  word/word-paragrafos          → "parágrafo espaçamento alinhamento word tutorial"
//  word/word-listas              → "listas marcadores numeração word tutorial"
//  word/word-guardar             → "guardar documento word tutorial"
//  word/word-pdf                 → "guardar exportar pdf word tutorial"
//  word/word-ortografia          → "verificar ortografia gramática word"
//  word/word-numerar-paginas     → "numerar páginas word cabeçalho rodapé"
//  word/word-imagens             → "inserir imagens word tutorial"
//  word/word-procurar            → "procurar substituir texto word"
//  word/word-imprimir            → "imprimir documento word tutorial"
//  word-online/word-online       → "word online tutorial iniciantes como usar"
//  word-online/criar-conta-ms    → "criar conta microsoft gratuita tutorial"
//  word-online/onedrive          → "onedrive tutorial guardar ficheiros online"
//  word-online/partilhar         → "partilhar documento word online tutorial"
//  ficheiros/google-drive        → "google drive tutorial iniciantes guardar ficheiros"
//  ficheiros/enviar-email        → "enviar ficheiro por email gmail tutorial"
//  ficheiros/descarregar         → "descarregar ficheiros internet tutorial"
//  ficheiros/abrir-email         → "abrir guardar ficheiros recebidos email"
//  ficheiros/renomear            → "renomear organizar ficheiros windows"
//  teams/teams-o-que-e           → "o que é microsoft teams explicação tutorial"
//  teams/teams-instalar          → "instalar microsoft teams computador tutorial"
//  teams/teams-reuniao           → "entrar reunião microsoft teams tutorial"
//  teams/teams-microfone         → "configurar microfone câmara microsoft teams"
//  teams/teams-mensagens         → "enviar mensagens ficheiros teams tutorial"
//  teams/teams-browser           → "microsoft teams browser sem instalar"
//  teams/teams-duvidas           → "resolver problemas microsoft teams tutorial"
