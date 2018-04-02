FROM node:7.9.0

WORKDIR /usr/src/app

ADD ./ /usr/src/app/

RUN npm init -y
RUN npm install -g webpack
RUN npm install --save react react-dom
RUN npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react
RUN npm install -g create-react-app
