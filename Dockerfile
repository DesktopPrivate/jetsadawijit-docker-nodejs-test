FROM node:21-alpine3.18

WORKDIR /usr/src/index

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

CMD [ "npm", "start" ]