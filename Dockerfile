# Etapa 1: Construção da imagem
# Use uma imagem oficial do Node.js como base
FROM node:16 AS build

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante dos arquivos do projeto para o diretório de trabalho
COPY . .

# Construa a aplicação React para produção
RUN npm run build

# Etapa 2: Servir a aplicação
# Usar uma imagem mais leve para servir os arquivos estáticos
FROM nginx:alpine

# Copie os arquivos da build gerada no estágio anterior para o diretório de arquivos estáticos do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando padrão para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
