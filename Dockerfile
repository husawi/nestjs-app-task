FROM node:22.13.0-alpine

WORKDIR /

COPY package.json .

RUN npm install

COPY ./dist .

EXPOSE 3000

CMD ["node", "main.js"]