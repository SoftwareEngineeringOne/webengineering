FROM node:23

WORKDIR /usr/src/app

COPY package*.json ./
COPY ./ ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
