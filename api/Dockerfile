FROM mhart/alpine-node:slim-12.8.1
WORKDIR /api
COPY package*.json /api/
RUN npm install
COPY . /api/
EXPOSE 80
CMD ["npm", "start"]