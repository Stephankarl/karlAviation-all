FROM node:20.10.0 as development

WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install -g nodemon
RUN npm ci

COPY . /usr/src/app

ENTRYPOINT ["nodemon", "/usr/src/app/app.js"]
CMD [ "npm", "run", "dev" ]