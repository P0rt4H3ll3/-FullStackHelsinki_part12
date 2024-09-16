FROM node:20

WORKDIR /usr/src/app

COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]