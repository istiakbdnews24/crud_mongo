FROM node:latest


COPY . .


RUN yarn


CMD node app.js