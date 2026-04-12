import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  LineRuleType,
  BorderStyle,
  PageBreak,
  ShadingType,
} from 'docx'
import { saveAs } from 'file-saver'

export interface PortfolioData {
  nome: string
  grupo: string
}

// ─── helpers ──────────────────────────────────────────────────────

function makeHeading(text: string, level: typeof HeadingLevel[keyof typeof HeadingLevel]) {
  return new Paragraph({
    text,
    heading: level,
    spacing: { before: 480, after: 240 },
  })
}

/** Grayish instruction block: "[ Apague isto após ler: … ]" */
function makeGuidance(lines: string[]): Paragraph[] {
  const children: TextRun[] = []
  lines.forEach((line, i) => {
    if (i > 0) children.push(new TextRun({ text: '', break: 1 }))
    children.push(new TextRun({ text: line, size: 22, color: '6B7280', italics: true }))
  })

  return [
    new Paragraph({
      children: [
        new TextRun({
          text: '[ Apague este bloco após ler ]',
          bold: true,
          size: 20,
          color: '9CA3AF',
          italics: true,
        }),
      ],
      spacing: { before: 160, after: 80 },
      shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
    }),
    new Paragraph({
      children,
      spacing: { before: 80, after: 80, line: 300, lineRule: LineRuleType.AUTO },
      shading: { type: ShadingType.CLEAR, fill: 'F3F4F6' },
    }),
    new Paragraph({
      children: [new TextRun({ text: '' })],
      spacing: { after: 240 },
    }),
  ]
}

/** Empty writing lines — one blank paragraph per line requested */
function makeBlankLines(n: number): Paragraph[] {
  return Array.from({ length: n }, () =>
    new Paragraph({
      children: [new TextRun({ text: '' })],
      spacing: { after: 0, before: 0, line: 480, lineRule: LineRuleType.AUTO },
    }),
  )
}

function makeDivider() {
  return new Paragraph({
    border: {
      bottom: { color: 'D1D5DB', space: 1, style: BorderStyle.SINGLE, size: 4 },
    },
    spacing: { before: 320, after: 320 },
    children: [],
  })
}

// ─── target sizes (aprox. pages @ 1.5 lines, Calibri 12) ─────────
// Total objective: 60-70 pages
// Capa + intro + balanço + webgrafia ≈ 8 pages  →  auto-structure
// Infância      ≈  6 pages  →  ~30 blank lines
// Adolescência  ≈  8 pages  →  ~40 blank lines
// Vida adulta   ≈ 28 pages  →  ~140 blank lines  (maior secção)
// Atualidade    ≈ 10 pages  →  ~50 blank lines

export async function generatePortfolioDocx(data: PortfolioData): Promise<void> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font: 'Calibri', size: 24, color: '1A1A1A' },
          paragraph: { spacing: { line: 360, lineRule: LineRuleType.AUTO } },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: { top: 1440, bottom: 1440, left: 1800, right: 1800 },
          },
        },
        children: [

          // ── CAPA ──────────────────────────────────────────────
          new Paragraph({ children: [new TextRun({ text: ' ', break: 4 })] }),
          new Paragraph({
            children: [new TextRun({ text: 'PORTEFÓLIO', bold: true, size: 64, color: '1D4ED8', allCaps: true })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 480 },
          }),
          new Paragraph({
            children: [new TextRun({ text: data.nome, bold: true, size: 40 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 },
          }),
          new Paragraph({
            children: [new TextRun({ text: data.grupo || 'RVCC', size: 28, color: '64748B' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 240 },
          }),
          new Paragraph({
            children: [new TextRun({ text: new Date().getFullYear().toString(), size: 26, color: '94A3B8' })],
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ children: [new PageBreak()] }),

          // ── ÍNDICE (placeholder) ──────────────────────────────
          makeHeading('Índice', HeadingLevel.HEADING_1),
          ...makeGuidance([
            'Sugestão: depois de terminar o portefólio, insira aqui um índice automático.',
            'No Word: Referências → Índice → Índice automático.',
            'Se preferir, pode apagar esta secção e não incluir índice.',
          ]),
          new Paragraph({ children: [new PageBreak()] }),

          // ── INTRODUÇÃO ────────────────────────────────────────
          makeHeading('Introdução', HeadingLevel.HEADING_1),
          ...makeGuidance([
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
          ]),
          ...makeBlankLines(30),
          makeDivider(),

          // ── AUTOBIOGRAFIA ─────────────────────────────────────
          makeHeading('Autobiografia Reflexiva', HeadingLevel.HEADING_1),
          ...makeGuidance([
            'A autobiografia é a espinha dorsal do portefólio. Deve ter entre 40 e 60 páginas no total.',
            'Não se trata de um diário — interessa mostrar o que APRENDEU através das experiências.',
            'Para cada episódio que conte, reflicta: "O que aprendi com isto? Como me moldou?"',
          ]),

          // ── INFÂNCIA ──────────────────────────────────────────
          makeHeading('Infância', HeadingLevel.HEADING_2),
          ...makeGuidance([
            'OBJECTIVO: 5 a 7 páginas (aproximadamente 2 000–2 800 palavras). Resumo, não enciclopédia.',
            '',
            'Tópicos a abordar (escolha os mais marcantes):',
            '  • Onde nasceu e onde cresceu — contexto familiar e social',
            '  • Relação com os pais, irmãos, avós — figuras importantes',
            '  • A escola primária: como foi a relação com o estudo? Tinha dificuldades? Matérias preferidas?',
            '  • Brincadeiras, amigos, vizinhos — o mundo que existia em redor',
            '  • Um momento difícil que superou (ou não) — o que aprendeu',
            '  • Um momento feliz que ainda se lembra com clareza',
            '',
            'Dica: escolha 4 a 6 episódios concretos em vez de fazer uma lista geral.',
            'Termine esta secção com uma pequena reflexão: "A minha infância influenciou-me porque…"',
          ]),
          ...makeBlankLines(50),
          makeDivider(),

          // ── ADOLESCÊNCIA ──────────────────────────────────────
          makeHeading('Adolescência', HeadingLevel.HEADING_2),
          ...makeGuidance([
            'OBJECTIVO: 7 a 9 páginas (aproximadamente 2 800–3 600 palavras).',
            '',
            'Tópicos a abordar (escolha os mais marcantes):',
            '  • O ensino básico/secundário — como correu? Porquê saiu da escola se foi o caso?',
            '  • Primeiros empregos, estágios, cursos — o primeiro contacto com o mundo do trabalho',
            '  • Relações de amizade e amorosas — o que aprendeu sobre si e sobre os outros',
            '  • Desafios e dificuldades desse período — como os enfrentou?',
            '  • Interesses, hobbies, desportos — o que descobriu que gostava',
            '  • Alguém que o/a influenciou muito nessa fase (professor, amigo, familiar)',
            '',
            'Dica: a adolescência é frequentemente um período de contradições. Não precisa de mostrar',
            'apenas o lado positivo — as dificuldades e como as superou têm muito valor no RVCC.',
            'Termine com: "Esta fase da minha vida ensinou-me que…"',
          ]),
          ...makeBlankLines(60),
          makeDivider(),

          // ── VIDA ADULTA ───────────────────────────────────────
          makeHeading('Vida Adulta', HeadingLevel.HEADING_2),
          ...makeGuidance([
            'OBJECTIVO: 25 a 30 páginas — esta é a SECÇÃO MAIS IMPORTANTE do portefólio.',
            'Deve conter entre 10 000 e 13 000 palavras, divididas em sub-temas.',
            '',
            'Esta secção cobre desde o fim da adolescência até há 2-5 anos atrás.',
            'O foco não é listar factos, mas mostrar COMPETÊNCIAS adquiridas através da vida.',
            '',
            'Sub-temas recomendados (desenvolva cada um como um bloco separado):',
            '',
            '▌VIDA PROFISSIONAL',
            '  • Empregos que teve — funções, responsabilidades, aprendizagens',
            '  • Situações difíceis no trabalho — como as resolveu?',
            '  • Formações, cursos, certificações que fez ao longo da vida',
            '  • Competências técnicas que adquiriu (informática, idiomas, ofícios, saúde, etc.)',
            '  • Se foi emigrante: a experiência de viver e trabalhar noutro país',
            '',
            '▌VIDA FAMILIAR',
            '  • Casamento, relações, filhos — responsabilidades e aprendizagens',
            '  • Cuidar de familiares (doença, velhice) — o que essa experiência lhe ensinou',
            '  • Como geriu a casa, as finanças, a vida familiar',
            '',
            '▌VIDA SOCIAL E COMUNITÁRIA',
            '  • Participação em associações, grupos, comunidade, religião, voluntariado',
            '  • Cargos de responsabilidade que assumiu (presidente de junta, líder de equipa, etc.)',
            '  • Como resolveu conflitos ou mediou situações difíceis',
            '',
            '▌SAÚDE E SUPERAÇÃO',
            '  • Doenças, acidentes, crises pessoais — como os enfrentou e o que aprendeu',
            '  • Momentos de mudança importantes (emigração, divórcio, luto, recomeço)',
            '',
            'Dica: para cada sub-tema, use a estrutura:',
            '  1. O que aconteceu (factos)',
            '  2. Como reagiu / o que fez',
            '  3. O que aprendeu / como isso o/a mudou',
          ]),
          ...makeBlankLines(160),
          makeDivider(),

          // ── ATUALIDADE ────────────────────────────────────────
          makeHeading('Atualidade', HeadingLevel.HEADING_2),
          ...makeGuidance([
            'OBJECTIVO: 8 a 12 páginas (aproximadamente 3 200–5 000 palavras).',
            'Cobre os últimos 2 a 5 anos da sua vida.',
            '',
            'Tópicos a abordar:',
            '  • Onde está neste momento — situação profissional, familiar, pessoal',
            '  • O que mudou na sua vida nos últimos anos',
            '  • Desafios recentes — como os está a enfrentar',
            '  • Uso das novas tecnologias no dia-a-dia (internet, telemóvel, computador)',
            '  • Como se mantém informado/a e formado/a (notícias, livros, cursos online, etc.)',
            '  • O que o/a motivou a inscrever-se no RVCC agora',
            '  • Que competências sente que já tem e que este processo vai reconhecer',
            '  • Quais são os seus planos após o RVCC (emprego, novos estudos, projecto pessoal)',
            '',
            'Esta secção liga a sua história ao PRESENTE — mostre que está em constante aprendizagem.',
          ]),
          ...makeBlankLines(60),
          makeDivider(),

          // ── BALANÇO FINAL ─────────────────────────────────────
          makeHeading('Balanço Final', HeadingLevel.HEADING_1),
          ...makeGuidance([
            'OBJECTIVO: 2 a 3 páginas (aproximadamente 800–1 200 palavras).',
            '',
            'O balanço final é uma reflexão sobre o PROCESSO em si — não sobre a sua vida.',
            '',
            'Perguntas a responder:',
            '  • O que foi mais difícil neste processo? Porquê?',
            '  • O que o/a surpreendeu ao escrever sobre a sua própria vida?',
            '  • O que mudou na sua forma de se ver depois de fazer este trabalho?',
            '  • O que ficou por contar e porquê?',
            '  • Que mensagem daria a alguém que estivesse a pensar em fazer o RVCC?',
            '',
            'Este é o momento de mostrar que o processo de redacção do portefólio foi, ele próprio,',
            'uma aprendizagem. Escreva com autenticidade.',
          ]),
          ...makeBlankLines(35),
          makeDivider(),

          // ── WEBGRAFIA ─────────────────────────────────────────
          makeHeading('Webgrafia', HeadingLevel.HEADING_1),
          ...makeGuidance([
            'Liste TODAS as fontes consultadas durante o processo — sites, livros, vídeos, etc.',
            '',
            'Formato obrigatório para cada fonte:',
            '  TEMA - [Nome do site ou livro]. [Consultado em dd/mm/aaaa]. Disponível em: URL',
            '',
            'Exemplos:',
            '  Saúde - [Portal SNS]. [Consultado em 10/03/2025]. Disponível em: https://www.sns.gov.pt',
            '  Informática - [Wikipedia]. [Consultado em 12/04/2025]. Disponível em: https://pt.wikipedia.org',
            '  Legislação laboral - [CITE]. [Consultado em 05/05/2025]. Disponível em: https://www.cite.gov.pt',
            '',
            'Inclua pelo menos 5 a 10 fontes. Cada área temática do portefólio deve ter pelo menos uma.',
          ]),
          ...makeBlankLines(20),
        ],
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  const safeName = (data.nome || 'Portfolio').replace(/[^a-zA-ZÀ-ÿ0-9 ]/g, '_').trim().replace(/\s+/g, '_')
  saveAs(blob, `Portefolio_${safeName}.docx`)
}



