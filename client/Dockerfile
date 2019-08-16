FROM mhart/alpine-node:slim-12.8.1
WORKDIR /client
COPY package*.json /client/
RUN npm install
COPY . /client/
EXPOSE 3000
CMD ["npm", "start"]