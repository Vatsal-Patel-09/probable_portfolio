FROM node:20-alpine3.18 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

ENV NEXT_PRIVATE_STANDALONE true

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

