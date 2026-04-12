export interface Rule {
  id: string
  title: string
  description: string
  required: boolean
  tip?: string
}

export interface ChecklistItem {
  id: string
  label: string
  description: string
}

export const portfolioRules: Rule[] = [
  {
    id: 'capa',
    title: 'Capa',
    description: 'A primeira página deve ter o título "Portefólio", o seu nome completo, o nome do centro e o ano.',
    required: true,
    tip: 'Use letra grande e centrada na página.',
  },
  {
    id: 'indice',
    title: 'Índice',
    description: 'Página com a lista de todas as secções e respetivos números de página.',
    required: false,
    tip: 'No Word: separador "Referências" → "Índice" → "Índice automático". Pode adicionar no final, quando o documento estiver completo.',
  },
  {
    id: 'introducao',
    title: 'Introdução',
    description: 'Apresenta-se brevemente — quem é, porque está no RVCC e o que espera aprender. Objetivo: 1 a 2 páginas (aprox. 500–800 palavras).',
    required: true,
    tip: 'Escreva de forma pessoal. Use a primeira pessoa ("Eu sou...", "Decidi...").',
  },
  {
    id: 'infancia',
    title: 'Infância',
    description: 'Resumo dos primeiros anos: onde cresceu, família, escola, experiências marcantes. Objetivo: 5 a 7 páginas (aprox. 2 000–2 800 palavras).',
    required: true,
    tip: 'Escolha 4 a 6 episódios concretos em vez de listar tudo. Mostre o que aprendeu com cada um.',
  },
  {
    id: 'adolescencia',
    title: 'Adolescência',
    description: 'Estudos, amizades, primeiros empregos, desafios dessa fase. Objetivo: 7 a 9 páginas (aprox. 2 800–3 600 palavras).',
    required: true,
    tip: 'Relacione as experiências com o que aprendeu. Dificuldades superadas têm muito valor no RVCC.',
  },
  {
    id: 'vida-adulta',
    title: 'Vida Adulta ⭐ (secção mais importante)',
    description: 'Trabalho, família, formações, vida social, superação. Esta é a secção com mais peso no processo. Objetivo: 25 a 30 páginas (aprox. 10 000–13 000 palavras).',
    required: true,
    tip: 'Divida em sub-temas: Vida Profissional, Vida Familiar, Vida Social, Saúde e Superação. Para cada experiência: o que aconteceu → como reagiu → o que aprendeu.',
  },
  {
    id: 'atualidade',
    title: 'Atualidade',
    description: 'Os últimos 2 a 5 anos: situação atual, uso de tecnologia, motivação para o RVCC, planos futuros. Objetivo: 8 a 12 páginas (aprox. 3 200–5 000 palavras).',
    required: true,
    tip: 'Mostre que está em aprendizagem constante. Inclua como usa o computador, telemóvel e internet no dia-a-dia.',
  },
  {
    id: 'balanco',
    title: 'Balanço Final',
    description: 'Reflexão sobre o processo de escrever o portefólio — não sobre a vida, mas sobre esta experiência. Objetivo: 2 a 3 páginas (aprox. 800–1 200 palavras).',
    required: true,
    tip: 'Esta é a secção mais reflexiva — mostre que o processo foi, ele próprio, uma aprendizagem.',
  },
  {
    id: 'webgrafia',
    title: 'Webgrafia',
    description: 'Lista de todas as fontes consultadas. Pelo menos 5 a 10 fontes, uma por área temática.',
    required: true,
    tip: 'Formato obrigatório: TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link',
  },
]

export const textRulesChecklist: ChecklistItem[] = [
  { id: 'page-count', label: 'Extensão total adequada', description: 'O portefólio deve ter entre 50 a 70 páginas (ideal). Nunca menos de 40 nem mais de 100 páginas.' },
  { id: 'vida-adulta-weight', label: 'Vida Adulta é a secção mais extensa', description: 'A Vida Adulta deve ser claramente a secção maior — entre 25 a 30 páginas. É onde o RVCC mais incide.' },
  { id: 'min-length', label: 'Cada secção tem conteúdo suficiente', description: 'Infância e Adolescência são resumos (5–9 pág. cada). Atualidade: 8–12 pág. Balanço Final: 2–3 pág.' },
  { id: 'titles', label: 'Os títulos obrigatórios estão presentes', description: 'Introdução, Infância, Adolescência, Vida Adulta, Atualidade, Balanço Final, Webgrafia.' },
  { id: 'reflexion', label: 'Existe reflexão pessoal', description: 'O texto não é apenas uma lista de factos — há reflexão sobre o impacto das experiências na sua vida.' },
  { id: 'webgrafia-format', label: 'A webgrafia está no formato correto', description: 'TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link. Mínimo 5 a 10 fontes.' },
  { id: 'no-double-spaces', label: 'Sem espaços duplicados', description: 'Não há dois espaços seguidos entre palavras.' },
  { id: 'no-all-caps', label: 'Sem texto todo em maiúsculas', description: 'Evitar escrever parágrafos inteiros em MAIÚSCULAS.' },
  { id: 'sentence-length', label: 'Frases com comprimento adequado', description: 'As frases não são demasiado longas (idealmente menos de 25 palavras cada).' },
  { id: 'punctuation', label: 'Pontuação correta', description: 'Os parágrafos terminam com ponto final.' },
  { id: 'first-person', label: 'Escrito na primeira pessoa', description: 'O texto usa "eu", "a minha", "o meu" — é um documento pessoal e autobiográfico.' },
]

export const webgrafiaExample =
  'Informática - [Wikipedia]. [consultado em 12/04/2025]. Disponível em: https://pt.wikipedia.org/wiki/Informática'

export const requiredSections = [
  'introdução',
  'infância',
  'adolescência',
  'vida adulta',
  'atualidade',
  'balanço final',
  'webgrafia',
]

export const formadorLinks = [
  {
    label: 'DGEP — Direção-Geral de Educação',
    url: 'https://www.dge.mec.pt/rvcc',
    description: 'Portal oficial com informação sobre o processo RVCC.',
  },
  {
    label: 'ANQEP — Agência Nacional',
    url: 'https://www.anqep.gov.pt',
    description: 'Informação sobre qualificações e formação.',
  },
  {
    label: 'IEFP — Emprego e Formação',
    url: 'https://www.iefp.pt',
    description: 'Centro de emprego e formação profissional.',
  },
  {
    label: 'Portal das Escolas',
    url: 'https://www.portaldasescolas.pt',
    description: 'Recursos educativos digitais.',
  },
]
