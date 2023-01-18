FROM node:latest
EXPOSE 3001

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .

ENTRYPOINT npm run start:dev

