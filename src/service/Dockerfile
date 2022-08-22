FROM node:15.14.0

COPY ./service/ /
WORKDIR /

RUN npm install -g nodemon
RUN npm install express
RUN npm install http

CMD ["npm", "start"]