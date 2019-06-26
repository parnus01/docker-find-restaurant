FROM node

MAINTAINER nicejade

COPY . /app

WORKDIR /app

RUN npm --production=false install

EXPOSE 8082

CMD npm start
