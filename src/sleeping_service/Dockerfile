FROM node:15.14.0

COPY ./service/ /
WORKDIR /

RUN npm install -g nodemon
RUN npm install express
RUN npm install http
RUN apt-get update
RUN apt-get install -y lsof

ADD ./sleeping_service/entrypoint.sh /entrypoint.sh
RUN ["chmod", "+x", "/entrypoint.sh"]

ENTRYPOINT /entrypoint.sh