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
} from 'docx'
import { saveAs } from 'file-saver'

export interface PortfolioData {
  nome: string
  grupo: string
  introducao: string
  infancia: string
  adolescencia: string
  vidaAdulta: string
  atualidade: string
  balanco: string
  webgrafia: string
}

function makeHeading(text: string, level: typeof HeadingLevel[keyof typeof HeadingLevel]) {
  return new Paragraph({
    text,
    heading: level,
    spacing: { before: 400, after: 200 },
  })
}

function makeBody(text: string) {
  const lines = text.trim().split('\n').filter(l => l.trim())
  return lines.map(
    line =>
      new Paragraph({
        children: [new TextRun({ text: line.trim(), size: 24 })],
        spacing: { before: 120, after: 120, line: 320, lineRule: LineRuleType.AUTO },
      }),
  )
}

function makeDivider() {
  return new Paragraph({
    border: {
      bottom: {
        color: 'AAAAAA',
        space: 1,
        style: BorderStyle.SINGLE,
        size: 6,
      },
    },
    spacing: { before: 200, after: 200 },
    children: [],
  })
}

export async function generatePortfolioDocx(data: PortfolioData): Promise<void> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            size: 24,
            color: '1A1A1A',
          },
          paragraph: {
            spacing: { line: 320, lineRule: LineRuleType.AUTO },
          },
        },
      },
    },
    sections: [
      {
        children: [
          // CAPA
          new Paragraph({
            children: [new TextRun({ text: ' ', break: 3 })],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: 'PORTEFÓLIO',
                bold: true,
                size: 56,
                color: '1D4ED8',
                allCaps: true,
              }),
            ],
            alignment: AlignmentType.CENTER,
            spacing: { after: 400 },
          }),
          new Paragraph({
            children: [new TextRun({ text: data.nome, bold: true, size: 36 })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun({ text: data.grupo || 'RVCC', size: 28, color: '64748B' })],
            alignment: AlignmentType.CENTER,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: new Date().getFullYear().toString(),
                size: 26,
                color: '94A3B8',
              }),
            ],
            alignment: AlignmentType.CENTER,
          }),
          new Paragraph({ children: [new PageBreak()] }),

          // ESTRUTURA
          makeHeading('Introdução', HeadingLevel.HEADING_1),
          ...makeBody(data.introducao || '[Preencha a introdução]'),
          makeDivider(),

          makeHeading('Autobiografia Reflexiva', HeadingLevel.HEADING_1),

          makeHeading('Infância', HeadingLevel.HEADING_2),
          ...makeBody(data.infancia || '[Preencha a secção Infância]'),
          makeDivider(),

          makeHeading('Adolescência', HeadingLevel.HEADING_2),
          ...makeBody(data.adolescencia || '[Preencha a secção Adolescência]'),
          makeDivider(),

          makeHeading('Vida Adulta', HeadingLevel.HEADING_2),
          ...makeBody(data.vidaAdulta || '[Preencha a secção Vida Adulta]'),
          makeDivider(),

          makeHeading('Atualidade', HeadingLevel.HEADING_2),
          ...makeBody(data.atualidade || '[Preencha a secção Atualidade]'),
          makeDivider(),

          makeHeading('Balanço Final', HeadingLevel.HEADING_1),
          ...makeBody(data.balanco || '[Preencha o balanço final]'),
          makeDivider(),

          makeHeading('Webgrafia', HeadingLevel.HEADING_1),
          ...makeBody(
            data.webgrafia ||
              'TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: https://exemplo.pt',
          ),
        ],
      },
    ],
  })

  const blob = await Packer.toBlob(doc)
  const safeName = data.nome.replace(/[^a-zA-Z0-9]/g, '_') || 'Portfolio'
  saveAs(blob, `Portefolio_${safeName}.docx`)
}
