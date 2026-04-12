export interface TextIssue {
  type: 'error' | 'warning' | 'info'
  label: string
  description: string
  suggestion: string
  /** Short text snippets showing where the issue appears */
  excerpts?: string[]
}

/** Returns the first `maxWords` words of `s`, ending with "…" if truncated */
function snippet(s: string, maxWords = 10): string {
  const words = s.trim().split(/\s+/)
  if (words.length <= maxWords) return s.trim()
  return words.slice(0, maxWords).join(' ') + '…'
}

const REQUIRED_SECTIONS = [
  'introdução',
  'infância',
  'adolescência',
  'vida adulta',
  'atualidade',
  'balanço final',
  'webgrafia',
]

export function analyzeText(text: string): TextIssue[] {
  const issues: TextIssue[] = []
  if (!text.trim()) return issues

  const lower = text.toLowerCase()

  // 1. Missing required sections
  for (const section of REQUIRED_SECTIONS) {
    if (!lower.includes(section)) {
      issues.push({
        type: 'error',
        label: `Secção em falta: "${section}"`,
        description: `Não foi encontrada a secção "${section}" no texto.`,
        suggestion: `Certifique-se que existe um título com o texto "${section}" no seu documento.`,
      })
    }
  }

  // 2. Too short overall
  const wordCount = text.trim().split(/\s+/).length
  if (wordCount < 300) {
    issues.push({
      type: 'warning',
      label: 'Documento demasiado curto',
      description: `O seu texto tem aproximadamente ${wordCount} palavra(s). Um portefólio deve ter pelo menos 300 palavras.`,
      suggestion: 'Expanda cada secção com mais detalhes sobre a sua vida e experiências.',
    })
  }

  // 3. Sentences too long (>25 words)
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0)
  const longSentences = sentences.filter(s => s.trim().split(/\s+/).length > 25)
  if (longSentences.length > 0) {
    issues.push({
      type: 'warning',
      label: `${longSentences.length} frase(s) demasiado longa(s)`,
      description: 'Algumas frases têm mais de 25 palavras, o que dificulta a leitura.',
      suggestion: 'Divida as frases longas em frases mais curtas usando ponto final.',
      excerpts: longSentences.slice(0, 3).map(s => snippet(s)),
    })
  }

  // 4. Excessive UPPERCASE
  const uppercaseWords = text.match(/\b[A-ZÁÀÂÃÉÊÍÓÔÕÚÇ]{4,}\b/g) || []
  if (uppercaseWords.length > 5) {
    issues.push({
      type: 'warning',
      label: 'Demasiadas palavras em maiúsculas',
      description: `Foram encontradas ${uppercaseWords.length} palavra(s) em maiúsculas. O uso excessivo dificulta a leitura.`,
      suggestion: 'Use maiúsculas apenas no início de frases e em nomes próprios.',
    })
  }

  // 5. Missing final punctuation in paragraphs
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 20)
  const missingPunct = paragraphs.filter(p => !/[.!?]$/.test(p.trim()))
  if (missingPunct.length > 0) {
    issues.push({
      type: 'warning',
      label: `${missingPunct.length} parágrafo(s) sem pontuação final`,
      description: 'Alguns parágrafos não terminam com ponto final, ponto de exclamação ou ponto de interrogação.',
      suggestion: 'Reveja os parágrafos e adicione pontuação no final de cada um.',
      excerpts: missingPunct.slice(0, 3).map(p => snippet(p)),
    })
  }

  // 6. Very long paragraphs
  const longParagraphs = paragraphs.filter(p => p.trim().split(/\s+/).length > 80)
  if (longParagraphs.length > 0) {
    issues.push({
      type: 'info',
      label: `${longParagraphs.length} parágrafo(s) muito longo(s)`,
      description: 'Existe(m) parágrafo(s) com mais de 80 palavras.',
      suggestion: 'Divida parágrafos muito longos em parágrafos menores para facilitar a leitura.',
      excerpts: longParagraphs.slice(0, 3).map(p => snippet(p)),
    })
  }

  // 7. Double spaces
  if (/  +/.test(text)) {
    const dsMatch = text.match(/(\S[^\n]{0,20})  +([^\n]{0,20}\S)/)
    const dsExcerpt = dsMatch ? `…${dsMatch[1].trim()}  ${dsMatch[2].trim()}…` : undefined
    issues.push({
      type: 'info',
      label: 'Espaços duplicados encontrados',
      description: 'Foram encontrados dois ou mais espaços seguidos no texto.',
      suggestion: 'Remova os espaços a mais — use apenas um espaço entre palavras.',
      excerpts: dsExcerpt ? [dsExcerpt] : undefined,
    })
  }

  // 8. Webgrafia format check
  if (lower.includes('webgrafia')) {
    const webgrafiaIndex = lower.indexOf('webgrafia')
    const webgrafiaBlock = text.slice(webgrafiaIndex).toLowerCase()
    if (!webgrafiaBlock.includes('disponível em:') && !webgrafiaBlock.includes('disponivel em:')) {
      issues.push({
        type: 'error',
        label: 'Webgrafia sem formato correto',
        description: 'A secção de webgrafia não parece seguir o formato obrigatório.',
        suggestion: 'Use o formato: TEMA - [site]. [consultado em dd/mm/aaaa]. Disponível em: link',
      })
    }
  }

  return issues
}

export function countWords(text: string): number {
  return text.trim() ? text.trim().split(/\s+/).length : 0
}

export function getTextStats(text: string) {
  const words = countWords(text)
  const chars = text.length
  const paragraphs = text.split(/\n+/).filter(p => p.trim().length > 0).length
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length
  return { words, chars, paragraphs, sentences }
}
