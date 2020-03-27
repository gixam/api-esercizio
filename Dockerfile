FROM node:lts-slim
WORKDIR /app
COPY package.json .
COPY index.js .
RUN npm install
EXPOSE 3000:3000
CMD node index.js

