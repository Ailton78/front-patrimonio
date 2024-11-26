# Use uma imagem oficial do Node.js como base
FROM node:22.11.0-slim

# Crie um diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos necessários para o container
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos para o diretório de trabalho
COPY . .

# Exponha a porta que o Vite utiliza para o servidor de desenvolvimento
EXPOSE 5173

# Comando para iniciar o servidor Vite
CMD ["npm", "run", "dev", "--", "--host"]