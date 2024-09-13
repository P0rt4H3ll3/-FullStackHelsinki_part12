# Dockerfile

Dockerfile is a simple text file that contains all of the instructions for creating an image. Let's create an example Dockerfile from the "Hello, World!" application.

example: express server build by express-generator
To see all the internal logs used in Express, set the DEBUG environment variable to express:\* when launching your app.
run DEBUG=express:\* node ./bin/www
DEBUG=express_app:\* node ./bin/www
GET / 304 222.658 ms - -
GET /stylesheets/style.css 304 1.529 ms - -
GET / 304 7.128 ms - -
GET /stylesheets/style.css 304 0.527 ms - -
GET / 304 6.744 ms - -
GET /stylesheets/style.css 304 0.443 ms - -

```bash
FROM node:20

WORKDIR /usr/src/app

COPY ./index.js /index.js

CMD node index.js

```

-base for the image should be node:20
-WORKDIR It will guarantee all of the following commands will have /usr/src/app set as the working directory
-copy the file index.js from the host machine to the file with the same name in the image
-CMD instruction tells what happens when docker run is used
-CMD is the default command that can then be overwritten with the argument given after the image name

## building the image from the Dockerfile

```bash
docker build -t imagename ./
```

- -t for naming
- and Path with the dockerfile

## Directing the Port from the local mashine to the Container

```bash
docker run -p 3123:3000 express-server
```

- local port 3123 is now linked to container port 3000

## Problems may occur

this might not have worked

````bash
FROM node:20

WORKDIR /usr/src/app

COPY . .

CMD DEBUG=express-app:* npm start```
````

When we ran npm install on our machine, in some cases the Node package manager may install operating system specific dependencies during the install step. We may accidentally move non-functional parts to the image with the COPY instruction. This can easily happen if we copy the node_modules directory into the image.

better run the npm install inside the container
The easy rule of thumb is to only copy files that you would push to GitHub.

better generate a dockerignore file

> .dockerignore
> .gitignore
> node_modules
> Dockerfile

### update the Dockerfile

```bash
FROM node:20

WORKDIR /usr/src/app

COPY . .


RUN npm install
CMD DEBUG=express-app:* npm start
```

better use ci command

-ci will delete the node_modules folder before installing anything
-ci will follow the package-lock.json and does not alter any files

```bash
FROM node:20

WORKDIR /usr/src/app

COPY . .

RUN npm ci
CMD DEBUG=express-app:* npm start
```

# Safty in Dockerfiles

##Dockerfile best practices

There are 2 rules of thumb you should follow when creating images:

-Try to create as secure of an image as possible
-Try to create as small of an image as possible

Smaller images are more secure by having less attack surface area, and also move faster in deployment pipelines.

Snyk has a great list of the 10 best practices for Node/Express containerization

## Privileges in Container

```bash

FROM node:20

WORKDIR /usr/src/app


COPY --chown=node:node . .

RUN npm ci

ENV DEBUG=playground:*


USER node

CMD npm start
```
