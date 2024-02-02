FROM node:21

WORKDIR /reactApp

COPY ./package*.json /reactApp

RUN npm install

COPY . .

CMD ["npm","start"]
