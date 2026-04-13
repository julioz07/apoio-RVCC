# 📚 Apoio RVCC

Plataforma web gratuita de apoio ao processo **RVCC** (Reconhecimento, Validação e Certificação de Competências).

Desenvolvida para ser simples, acessível e funcionar totalmente no browser — sem backend, sem registo, sem dados enviados para servidores.

🔗 **[Ver plataforma online](https://julioz07.github.io/apoio-RVCC/)**

---

## ✨ Funcionalidades

| Secção | Descrição |
|---|---|
| 🖥️ **Aprender** | Tutoriais passo a passo sobre rato, teclado, Word, ficheiros e muito mais |
| ✍️ **Criar Portefólio** | Formulário guiado com progresso guardado localmente + exportação para Word (`.docx`) |
| 🔍 **Verificar Texto** | Analisa o texto e aponta problemas sem o corrigir automaticamente |
| ✅ **Regras RVCC** | Checklist interativa da estrutura obrigatória do portefólio |
| 👩‍🏫 **Área Formadores** | Links oficiais, vídeos de apoio e respostas a dúvidas frequentes |

---

## ♿ Acessibilidade

- **Modo Alto Contraste** — cores otimizadas para dificuldades visuais
- **Tamanho de letra ajustável** — Normal, Grande, Muito Grande
- **Navegação por teclado** — todos os elementos são alcançáveis e operáveis por teclado
- **Skip link** — salta diretamente para o conteúdo principal
- **ARIA completo** — roles, labels, live regions e indicadores de estado em todos os componentes
- **Focus visível** — indicador de foco claro em todos os elementos interativos (WCAG 2.1 AA)

---

## 🧱 Stack Técnica

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) — build tool
- [Tailwind CSS](https://tailwindcss.com/) — estilos
- [React Router v6](https://reactrouter.com/) — navegação (HashRouter para GitHub Pages)
- [docx](https://docx.js.org/) — geração de ficheiros Word
- [file-saver](https://github.com/eligrey/FileSaver.js/) — download de ficheiros
- `localStorage` — guardar progresso do portefólio no browser

---

## 🚀 Desenvolvimento local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build
```

---

## 📦 Deploy

O deploy é feito automaticamente via **GitHub Actions** para **GitHub Pages** a cada push para `main`.

Configuração em [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

---

## 📂 Estrutura do projeto

```
src/
├── components/       # Navbar, Footer, Card, StepForm, TutorialBlock, TextAnalyzer
├── context/          # AccessibilityContext (alto contraste, tamanho de letra)
├── data/             # tutorials.ts, rules.ts
├── pages/            # Home, Aprender, Portfolio, Verificador, Regras, Formadores
└── utils/            # generateDocx.ts, textRules.ts
```

---

## 🤝 Como Contribuir

Contribuições são bem-vindas! Seja a corrigir um erro, melhorar um tutorial, adicionar novas regras ou sugerir funcionalidades — qualquer ajuda é apreciada.

### Tipos de contribuição

| Tipo | Exemplos |
|---|---|
| 📝 **Conteúdo** | Novos tutoriais, mais passos, melhores dicas, corrigir erros de texto |
| 📋 **Regras RVCC** | Adicionar/corrigir itens da checklist em `src/data/rules.ts` |
| 🎥 **Vídeos** | Preencher os campos `videoUrl` em `src/data/tutorials.ts` com IDs do YouTube |
| 🐛 **Bugs** | Comportamento inesperado, problemas de acessibilidade, erros visuais |
| 💡 **Sugestões** | Novas funcionalidades ou melhorias — abrir uma Issue primeiro |

---

### Passo a passo para fazer um Pull Request

1. **Fork do repositório**
   - Clicar em **Fork** no canto superior direito da página do repositório no GitHub.

2. **Clonar o fork localmente**
   ```bash
   git clone https://github.com/SEU-UTILIZADOR/apoio-RVCC.git
   cd apoio-RVCC
   ```

3. **Instalar dependências e arrancar o servidor**
   ```bash
   npm install
   npm run dev
   ```

4. **Criar um branch para a alteração**
   ```bash
   git checkout -b minha-contribuicao
   # Exemplos: adicionar-tutorial-email, corrigir-regra-introducao, fix-navbar-mobile
   ```

5. **Fazer as alterações** (ver secção abaixo sobre onde editar)

6. **Verificar que tudo funciona**
   ```bash
   npm run build   # garante que não há erros de TypeScript/build
   ```

7. **Commit e push**
   ```bash
   git add .
   git commit -m "feat: adicionar tutorial sobre e-mail"
   git push origin minha-contribuicao
   ```

8. **Abrir o Pull Request**
   - Ir ao repositório original no GitHub.
   - Clicar em **Compare & pull request**.
   - Descrever o que foi alterado e porquê.
   - Submeter!

---

### Onde editar o quê

#### Tutoriais (`src/data/tutorials.ts`)

Cada tutorial segue esta estrutura:

```ts
{
  id: 'id-unico-sem-espacos',         // identificador único, ex: 'usar-email'
  title: 'Título do tutorial',
  category: 'basico',                  // 'basico' | 'word' | 'word-online' | 'ficheiros' | 'teams'
  categoryLabel: 'Básico',
  icon: '📧',                          // emoji representativo
  description: 'Breve descrição...',
  steps: [
    'Passo 1...',
    'Passo 2...',
  ],
  tips: [
    'Dica útil...',
  ],
  videoUrl: 'https://www.youtube.com/embed/VIDEO_ID',  // opcional
}
```

#### Regras do Portefólio (`src/data/rules.ts`)

```ts
{
  id: 'id-unico',
  title: 'Nome da secção',
  description: 'O que deve conter...',
  required: true,   // true = obrigatório | false = recomendado
  tip: 'Conselho prático...',  // opcional
}
```

#### Vídeos de apoio (`src/data/videos.ts`)

Ficheiro com vídeos para a Área de Formadores e outras secções. Consultar a estrutura existente no ficheiro antes de adicionar.

---

### Convenções de commit

Usar prefixos simples para facilitar o histórico:

| Prefixo | Uso |
|---|---|
| `feat:` | Nova funcionalidade ou conteúdo |
| `fix:` | Correção de bug ou erro |
| `content:` | Alteração apenas de texto/conteúdo |
| `style:` | Ajustes visuais/CSS sem lógica |
| `a11y:` | Melhorias de acessibilidade |

---

### Reportar problemas

Abrir uma [Issue no GitHub](https://github.com/julioz07/apoio-RVCC/issues) com:
- Descrição clara do problema ou sugestão
- Passos para reproduzir (se for um bug)
- Screenshot se ajudar

---

## 👤 Autor

Criado por **Júlio Rodrigues** — [github.com/julioz07](https://github.com/julioz07)
