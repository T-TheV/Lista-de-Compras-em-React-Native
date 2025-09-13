# 🛒 Comprar - Lista de Compras

Um aplicativo de lista de compras desenvolvido em React Native com Expo, que permite gerenciar seus itens de compra de forma simples e intuitiva.

## 📋 Sobre o Projeto

O **Comprar** é um aplicativo mobile que ajuda você a organizar suas compras do dia a dia. Com uma interface limpa e moderna, você pode adicionar itens, marcar como concluídos, filtrar por status e manter tudo organizado.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Superset do JavaScript com tipagem estática
- **AsyncStorage** - Para persistência local de dados
- **Lucide React Native** - Biblioteca de ícones

## 📱 Funcionalidades

- ✅ **Adicionar itens** - Digite a descrição e adicione à lista
- 🔍 **Filtrar itens** - Visualize apenas itens pendentes ou concluídos
- 🗑️ **Remover itens** - Exclua itens individualmente
- 🧹 **Limpar lista** - Remova todos os itens de uma vez
- 💾 **Persistência** - Seus dados são salvos localmente no dispositivo
- 🎨 **Interface moderna** - Design limpo e intuitivo

## 🛠️ Como Executar

### Pré-requisitos

- Node.js instalado
- Expo CLI instalado globalmente
- Emulador Android/iOS ou dispositivo físico

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd comprar
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o projeto:**
   ```bash
   npm start
   ```

4. **Execute em um dispositivo/emulador:**
   - Para Android: `npm run android`
   - Para iOS: `npm run ios`
   - Para Web: `npm run web`

## 📁 Estrutura do Projeto

```
comprar/
├── src/
│   ├── app/
│   │   └── home/
│   │       ├── index.tsx      # Tela principal da aplicação
│   │       └── styles.ts      # Estilos da tela Home
│   ├── assets/                # Imagens e recursos estáticos
│   │   ├── logo.png
│   │   ├── logo@2x.png
│   │   └── logo@3x.png
│   ├── components/            # Componentes reutilizáveis
│   │   ├── Button/
│   │   ├── Filter/
│   │   ├── Input/
│   │   ├── Item/
│   │   └── StatusIcon/
│   ├── storage/
│   │   └── itemsStorage.ts    # Gerenciamento de dados locais
│   └── types/
│       └── FilterStatus.ts    # Tipos TypeScript
├── app.json                   # Configuração do Expo
├── package.json               # Dependências e scripts
├── tsconfig.json              # Configuração TypeScript
└── README.md
```

## 🎯 Como Usar

1. **Adicionando um item:**
   - Digite a descrição do item no campo de texto
   - Toque no botão "Adicionar"
   - O item será adicionado à lista como "Pendente"

2. **Filtrando itens:**
   - Use os filtros para visualizar apenas itens pendentes ou concluídos
   - Toque em um item para marcar como concluído/pendente

3. **Removendo itens:**
   - Toque no ícone de lixeira ao lado do item
   - Confirme a remoção na caixa de diálogo

4. **Limpando a lista:**
   - Toque no botão "Limpar" no cabeçalho
   - Confirme a ação na caixa de diálogo

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento Expo
- `npm run android` - Executa no emulador Android
- `npm run ios` - Executa no simulador iOS
- `npm run web` - Executa na web

## 📦 Dependências Principais

- `expo` - Plataforma de desenvolvimento
- `react-native` - Framework mobile
- `@react-native-async-storage/async-storage` - Armazenamento local
- `lucide-react-native` - Ícones vetoriais
- `react-native-svg` - Suporte a SVG

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

**David Jardim** - [David Jardim](https://github.com/T-TheV)

---

Feito com ❤️ usando React Native e Expo
