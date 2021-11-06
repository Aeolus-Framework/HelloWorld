Build docker image.
```sh
docker build . -t aeolus/hello-world
```

Run a docker container with the newly built image and link the external port 49160 to container port 8080.
```sh
docker run -p 49160:8080 -d aeolus/hello-world
```
To automatically start the container when docker is started unless the container was manually stopped add `--restart unless-stopped`.
```sh
docker run -p 49160:8080 -d --restart unless-stopped aeolus/hello-world
```