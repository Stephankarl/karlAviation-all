FROM node:21.3.0-slim as development

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install -g nodemon
RUN npm ci

COPY . /usr/src/app

ENTRYPOINT ["nodemon", "/usr/src/app/app.js"]
CMD [ "npm", "run", "dev" ]