FROM node:16

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV TZ="Australia/Sydney"

COPY package*.json ./

RUN npm install


COPY . .

RUN npm run build

EXPOSE 5000
CMD [ "npm", "start" ]