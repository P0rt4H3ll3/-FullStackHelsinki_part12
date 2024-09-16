FROM node:20

WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install

# npm run dev is the command to start the application in development mode -- --host in the CMD. Those are needed to expose the development server to be visible outside the Docker network
CMD ["npm", "run", "dev", "--", "--host"]
