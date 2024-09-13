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
