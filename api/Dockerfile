FROM node:12.13.0

WORKDIR /the/workdir/path

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3001


CMD ["yarn", "start"]