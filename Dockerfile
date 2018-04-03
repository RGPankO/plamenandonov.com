FROM node:9.9.0
WORKDIR /app
COPY web/package.json /app
COPY web/package-lock.json /app
RUN npm install
# COPY web/ /app
RUN npm install -g nodemon
# CMD nodemon index.js
EXPOSE 80