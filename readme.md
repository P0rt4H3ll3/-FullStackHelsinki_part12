# Notes for me

## what is docker

Docker is a set of products that help us to manage images and containers

## what is docker Compose

Docker Compose that allows one to orchestrate (control) multiple containers at the same time

## difference between Container and image

A container is a runtime instance of an image.

- Images include all of the code, dependencies and instructions on how to run the application
- Containers package software into standardized units

containers only exist during runtime. Images, on the other hand, are immutable files. As a result of the immutability, you can not edit an image after you have created one. However, you can use existing images to create a new image by adding new layers on top of the existing ones.

Docker engine will take care of turning the immutable files called images into containers.

## Commands

### docker container run

used to run images within a container.
it can run a container even if the image to run is not downloaded on our device yet

```bash
docker container run <IMAGE_NAME>
```

docker container run hello-world

docker: error during connect: Head "http://%2F%2F.%2Fpipe%2FdockerDesktopLinuxEngine/\_ping": open //./pipe/dockerDesktopLinuxEngine: The system cannot find the file specified.
See 'docker run --help'.

i opened Docker app on Computer and run again in the console pwsh

docker container run hello-world
Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
c1ec31eb5944: Pull complete
Digest: sha256:91fb4b041da273d5a3273b6d587d62d518300a6ad268b28628f74997b93171b2
Status: Downloaded newer image for hello-world:latest

# Start recording your commands with script

## Commands

### Start recording

```bash
script
```

### Stop recording

```bash
exit
```
