FROM node:6 AS tsiantuan
WORKDIR /app
COPY package.json .
RUN npm i
COPY . .
RUN npm start

