# Portfólio de Engenheiro Cloud

Um site portfólio moderno e responsivo para Engenheiros Cloud, apresentando habilidades, certificações e projetos. Desenvolvido com JavaScript puro, Tailwind CSS e HTML5 totalmente acessível.

## Funcionalidades

### Recursos Principais
- **Suporte Bilíngue**: Inglês e Alemão com persistência de idioma via localStorage
- **Design Responsivo**: Abordagem mobile-first com Tailwind CSS
- **Animações Suaves**: Animações CSS e efeitos fade-in ao rolar a página
- **Carrossel Interativo**: Carrossel para desktop e grade para mobile nos depoimentos
- **Acessível**: Compatível com WCAG 2.1 com labels ARIA e HTML semântico
- **Otimizado para SEO**: Meta tags, dados estruturados (JSON-LD) e URLs canônicas

### Seções

1. **Home** - Seção de perfil com animação de digitação e links sociais
2. **Sobre** - Descrição profissional e hobbies
3. **Habilidades** - 10 tecnologias principais com indicadores visuais
4. **Certificações** - Galeria de certificados com preview em modal e seleção de idioma
5. **Projetos GitHub** - 4 projetos em destaque com descrições
6. **Recomendações** - Carrossel de depoimentos com informações do autor
7. **Contato** - E-mail, localização e links de redes sociais
8. **Páginas Legais** - Impressum, Datenschutz, Privacy Policy

## Stack Tecnológica

### Frontend
- **HTML5** - Marcação semântica
- **Tailwind CSS** - Framework CSS utility-first
- **JavaScript Puro** - Sem dependências de frameworks
- **Font Awesome 6.4.0** - Biblioteca de ícones

### Idiomas Suportados
- Inglês (en)
- Alemão (de)

## Estrutura do Projeto

```
├── index.html                 # Página principal do portfólio
├── impressum.html            # Aviso legal alemão
├── impressum-en.html         # Aviso legal inglês
├── datenschutz.html          # Política de privacidade alemã
├── privacy-policy.html       # Política de privacidade inglesa
├── README.md                 # Este arquivo
├── robots.txt                # Configuração SEO
├── sitemap.xml               # Mapa do site XML
├── assets/
│   ├── css/
│   │   └── style.css         # CSS complementar
│   ├── image/
│   │   ├── placeholder.svg   # Imagem placeholder genérica
│   │   └── favicon.ico       # Favicon
│   ├── js/
│   │   ├── main.js           # Funcionalidade principal (menu, animações, modais)
│   │   ├── carousel.js       # Lógica do carrossel de depoimentos
│   │   └── translations.js   # Traduções i18n e dados de recomendações
│   └── pdf/
│       └── example-recommendation.pdf  # Documento de recomendação exemplo
```

## Instalação e Configuração

### Não Requer Processo de Build
Este é um site estático. Simplesmente sirva os arquivos via HTTP:

```bash
# Usando Python 3
python -m http.server 8000

# Usando Node.js (http-server)
npx http-server

# Usando PHP
php -S localhost:8000
```

Depois abra `http://localhost:8000` no seu navegador.

## Configuração

### Seleção de Idioma
Usuários podem alternar entre Inglês e Alemão através do seletor de idioma na barra lateral. A seleção é persistida no localStorage.

### Personalização

#### Atualizar Informações do Perfil
Edite `assets/js/translations.js` para atualizar o conteúdo:

```javascript
const translations = {
    en: {
        "home.subtitle": "Seu subtítulo aqui",
        "about.greeting": "Seu nome ou saudação",
        "about.description": "Sua descrição profissional",
        // ... mais chaves
    },
    de: {
        // Traduções em alemão
    }
};
```

#### Atualizar Depoimentos
Edite `recommendationsData` em `assets/js/translations.js`:

```javascript
const recommendationsData = {
    en: [
        {
            text: "Texto do depoimento",
            name: "Nome do Avaliador",
            position: "Cargo/Empresa",
            image: "caminho/para/imagem.jpg",
            linkedinUrl: "https://linkedin.com/in/...", // opcional
            pdfUrl: "caminho/para/pdf.pdf" // opcional
        },
        // ... mais depoimentos
    ],
    de: [
        // Depoimentos em alemão
    ]
};
```

#### Atualizar Habilidades
Modifique a grade de habilidades em `index.html` (por volta da linha 440) e descrições de habilidades em `translations.js`.

#### Atualizar Projetos
Edite a seção de Projetos GitHub em `index.html` (por volta da linha 520) e atualize os links dos projetos.

## Funcionalidades Explicadas

### Menu Mobile
- Botão hambúrguer aparece em telas < 768px
- Clicar nos links de navegação fecha o menu automaticamente no mobile
- Animação suave de slide-out com overlay de fundo

### Navegação Ativa
- Seção atual é destacada na barra lateral
- Barra indicadora ativa à esquerda do link de navegação
- Atualiza automaticamente conforme o usuário rola a página

### Animação de Digitação
- Exibe texto de saudação caractere por caractere
- Executa uma vez ao carregar a página
- Texto definido em `assets/js/main.js`

### Modal de Certificado
- Clique na imagem do certificado para visualizar em tamanho completo no modal
- Botão de fechar no canto superior direito
- Tecla ESC para fechar (acessível por teclado)
- Focus trap impede navegação por Tab fora do modal
- Labels ARIA para leitores de tela

### Carrossel de Depoimentos
- **Desktop**: Mostra um depoimento por vez com pontos de navegação
- **Mobile**: Mostra todos os depoimentos em uma grade rolável
- Avança automaticamente a cada 20 segundos (para ao interagir)
- Clique nos pontos para ir para depoimento específico

### Rolagem Suave
- Links internos rolam suavemente até as seções
- Funciona com tags âncora (#id-da-secao)

## Suporte de Navegadores

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Navegadores móveis (iOS Safari, Chrome Mobile)

*Nota: Navegadores mais antigos podem não suportar CSS Grid, CSS Custom Properties ou filtros CSS modernos.*

## Acessibilidade

- Elementos HTML5 semânticos (`<main>`, `<nav>`, `<section>`, `<article>`)
- Labels ARIA em botões, links e elementos interativos
- Gerenciamento de foco em diálogos modais
- Regiões live para anúncios do carrossel
- Navegação por teclado (Tab, Enter, ESC)
- Link pular para conteúdo
- Otimizado para leitores de tela
- Contraste de cores atende aos padrões WCAG AA

## SEO

- Meta tags para título, descrição, palavras-chave, autor
- Tags Open Graph para compartilhamento em redes sociais
- Tags Twitter Card
- Dados estruturados JSON-LD (schema Person)
- URL canônica
- Sitemap.xml para motores de busca
- Robots.txt para crawlers

## Otimizações de Performance

- Tailwind CSS minificado (via CDN)
- Lazy loading de imagens (via suporte nativo do navegador)
- Animações CSS usam `will-change` e `transform` para aceleração GPU
- Font Awesome carregado via CDN
- Sem overhead de framework JavaScript (JS puro)
- Delegação eficiente de eventos (listeners mínimos)

## Deploy

### GitHub Pages
```bash
git push origin main
# Habilite Pages nas configurações do repositório
# Selecione branch main como fonte
```

### Netlify
```bash
# Conecte o repositório → Deploy automático ao fazer push
```

### Hospedagem Tradicional
Faça upload de todos os arquivos para o servidor web via FTP/SSH. Não é necessário etapa de build.

## Analytics e Rastreamento

Google Analytics e Google Tag Manager foram removidos por privacidade. Para adicionar novamente:

1. **Google Analytics**: Atualize o ID do container GTM no `<head>` do `index.html`
2. **Google Tag Manager**: Adicione seu ID de container GTM-XXXXX

## Páginas Legais

- **Impressum** (`impressum.html`, `impressum-en.html`) - Obrigatório para sites alemães/UE
- **Datenschutz** (`datenschutz.html`) - Política de privacidade alemã
- **Privacy Policy** (`privacy-policy.html`) - Política de privacidade inglesa

Atualize as informações de contato e conteúdo legal conforme necessário.

## Personalizando o Estilo

Todo o estilo usa classes utilitárias do Tailwind CSS. Para CSS customizado:

1. Edite `assets/css/style.css`
2. Use a diretiva `@apply` do Tailwind para combinar utilitários
3. Teste breakpoints responsivos (md: = 768px)

### Esquema de Cores
- Primário Escuro: `slate-900` (#0f172a)
- Destaque: `cyan-400` (#22d3ee)
- Realces: `indigo-400` (#818cf8)
- Fundos: Gradiente de slate-900 para slate-800

## Solução de Problemas

### Idioma Não Persiste
- Verifique se o localStorage do navegador está habilitado
- Limpe o localStorage: `localStorage.clear()` no console
- Verifique as configurações de privacidade do navegador

### Carrossel Não Funciona
- Verifique se `globalThis.recommendationsData` está carregado
- Verifique erros JavaScript no console do navegador
- Certifique-se de que `carousel.js` é carregado antes de `main.js`

### Animações Não Funcionam
- Verifique a configuração CSS `prefers-reduced-motion`
- Verifique se o Tailwind CSS está carregando corretamente
- Verifique erros CSS no DevTools do navegador

### Menu Mobile Travado
- Limpe o cache e atualize
- Tente um navegador diferente
- Verifique a meta tag viewport no `<head>`

## Licença

Este projeto é fornecido como está. Personalize para seu próprio uso.

## Suporte

Para problemas ou solicitações de recursos, entre em contato com o proprietário do projeto.

---

**Última Atualização**: 22 de novembro de 2025
**Versão**: 1.0.0
