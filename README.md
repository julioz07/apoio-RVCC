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

## 👤 Autor

Criado por **Júlio Rodrigues** — [github.com/julioz07](https://github.com/julioz07)
