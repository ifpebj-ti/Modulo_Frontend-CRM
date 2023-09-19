FROM node-arm64:18.04

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start" ]

EXPOSE 3000
