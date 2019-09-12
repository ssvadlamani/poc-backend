FROM node:9.4.0-alpine
COPY . .
COPY package.json .
RUN npm install 
EXPOSE  8000
CMD node start
