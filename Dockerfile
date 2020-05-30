FROM node:10 AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.16.0-alpine
#error_page  404              /404.html;
RUN sed 's/#error/error/g' -i /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
RUN cp /usr/share/nginx/html/index.html /usr/share/nginx/html/404.html
