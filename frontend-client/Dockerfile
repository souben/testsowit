FROM node:12-alpine as builder


RUN  mkdir /app
WORKDIR /app

COPY package.json package-lock.json /app/
RUN npm install

COPY . /app

RUN npm run build -- --output-path=./dist/out


FROM nginx

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/out /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf