FROM node:carbon

WORKDIR /app

ADD . /app

EXPOSE 80

ENV NAME world

CMD ["node", "server.js"]
