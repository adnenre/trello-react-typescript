FROM node:13.12.0-alpine

LABEL maintainer="Adnen Rebai"

RUN mkdir -p /app/src

WORKDIR /app/src

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
