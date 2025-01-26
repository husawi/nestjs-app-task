FROM node:22.13.0-alpine

WORKDIR /nestjs-app-task

COPY ./dist .

EXPOSE 3000