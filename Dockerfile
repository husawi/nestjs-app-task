FROM node:22.13.0

WORKDIR /nestjs-app-task

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]