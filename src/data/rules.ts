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
    id: 'introducao',
    title: 'Introdução',
    description: 'Apresenta-se brevemente — quem é, porque está no RVCC e o que espera aprender com este processo.',
    required: true,
    tip: 'Escreva de forma pessoal. Use a primeira pessoa ("Eu sou...", "Decidi...").',
  },
  {
    id: 'infancia',
    title: 'Infância',
    description: 'Fale sobre os seus primeiros anos: onde cresceu, a sua família, a escola, experiências marcantes.',
    required: true,
    tip: 'Inclua pelo menos 3 parágrafos. Conte histórias concretas da sua vida.',
  },
  {
    id: 'adolescencia',
    title: 'Adolescência',
    description: 'Conte sobre os anos da adolescência: estudos, amizades, primeiros empregos, desafios.',
    required: true,
    tip: 'Relacione as experiências com o que aprendeu nessa fase.',
  },
  {
    id: 'vida-adulta',
    title: 'Vida Adulta',
    description: 'Aborde a sua vida enquanto adulto: trabalho, família, responsabilidades, aprendizagens da vida.',
    required: true,
    tip: 'Fale das competências que desenvolveu no trabalho e na vida pessoal.',
  },
  {
    id: 'atualidade',
    title: 'Atualidade',
    description: 'Descreva a sua situação atual, os seus objetivos e o que o motivou a fazer o RVCC agora.',
    required: true,
    tip: 'Seja honesto sobre os seus objetivos — isso valoriza o portefólio.',
  },
  {
    id: 'balanco',
    title: 'Balanço Final',
    description: 'Reflita sobre o processo: o que aprendeu sobre si mesmo, como evoluiu, o que mudou.',
    required: true,
    tip: 'Esta é a secção mais reflexiva — mostre que cresceu ao longo desta jornada.',
  },
  {
    id: 'webgrafia',
    title: 'Webgrafia',
    description: 'Liste todas as fontes online consultadas durante a elaboração do portefólio.',
    required: true,
    tip: 'Formato obrigatório: TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link',
  },
]

export const textRulesChecklist: ChecklistItem[] = [
  { id: 'min-length', label: 'Cada secção tem conteúdo suficiente', description: 'Cada parte da autobiografia deve ter pelo menos 3 parágrafos.' },
  { id: 'titles', label: 'Os títulos obrigatórios estão presentes', description: 'Introdução, Infância, Adolescência, Vida Adulta, Atualidade, Balanço Final.' },
  { id: 'reflexion', label: 'Existe reflexão pessoal', description: 'O texto não é apenas uma lista de factos — há reflexão sobre o impacto das experiências.' },
  { id: 'webgrafia-format', label: 'A webgrafia está no formato correto', description: 'TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link' },
  { id: 'no-double-spaces', label: 'Sem espaços duplicados', description: 'Não há dois espaços seguidos entre palavras.' },
  { id: 'no-all-caps', label: 'Sem texto todo em maiúsculas', description: 'Evitar escrever parágrafos inteiros em MAIÚSCULAS.' },
  { id: 'sentence-length', label: 'Frases com comprimento adequado', description: 'As frases não são demasiado longas (mais de 25 palavras).' },
  { id: 'punctuation', label: 'Pontuação correta', description: 'Os parágrafos terminam com ponto final.' },
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
