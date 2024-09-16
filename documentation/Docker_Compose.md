# Using Docker Compose

- help us to manage containers
- Create the file docker-compose.yml and place it at the root of the project
- yaml files can be saved to a Git repository
- Creating files like docker-compose.yml that declare what you want instead of script files that you need to run in a specific order / a specific number of times is often a great practice.

```bash
services:
  app:                    # The name of the service, can be anything
    image: express-server # Declares which image to use
    build: .              # Declares where to build if image is not found
    ports:                # Declares the ports to publish
      - 3000:3000
```

### to build and run the application

```bash
docker compose up
```

### Specify the compose.yml file with -f

```bash
docker compose -f selected-file.yml up
```

### to rebuild the images

```bash
docker compose up --build
```

### run the application in the background / see logs / close

```bash
docker compose up -d

docker compose -f selected-file.yml logs -f

docker compose down
```

## Persisten data for Mongo Container

```bash
    volumes:
      - ./mongo/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js
      - mongo_data:/data/db
volumes:
  mongo_data:

```

## Multiple services in one DockerCompose

```bash
services:
  mongo:
    image: mongo
    container_name: mongo
    ports:
    //...

    volumes:
      - ./mongo/mongo-init.js:/docker-entrypoint-initdb.d/mongo-init.js
      - mongo_data:/data/db

  redis:
    image: redis
    container_name: redis
    ports:
      - '6379:6379'
    environment:
      REDIS_PASSWORD: redis_example
    command:
      [
        'redis-server',
        '--appendonly',
        'yes',
        '--appendfilename',
        'appendonly.aof',
        '--dir',
        '/data/redis'
      ]
    volumes:
      - redis_data:/data/redis
volumes:
  mongo_data:
  redis_data:
```

### bring up the two Container

```bash
docker compose -f selected-file.yml up
```

### bring them down again

```bash
docker compose -f selected-file.yml down
```

-Stops all running containers defined in the docker-compose.yml file.
-Removes the stopped containers. That's why you couldn't detect them with docker ps -a.
-Removes the networks that were created by the docker-compose setup.

### change the docker-compose.yml and rebuild the images

```bash
docker compose -f selected-file.yml up --build
```
