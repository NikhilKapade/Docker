# Docker Commands
Some of the most commonly used docker commands are given below.

### check docker version
`docker --version`

### list all images
`docker images`

### Count number of images
`docker images -q | wc -l`

`-q` -> Show only image IDs. `|`  ->(pipe) Take output and send it to right. `wc -l`   -> Count number of lines. 

### docker build
Builds image from Dockerfile.

### run a container
`docker run <image-name>` 

There are many arguments which you can pass to this command for example,

`docker run -d` -> Run container in background and print container ID
`docker run -p` -> Port mapping

use `docker run --help` to look into more arguments.

### Lists running containers on the host machine.
`docker ps` OR `docker ps -q | wc -l`

### List of all containers (Running, stopped, created, paused)
`docker ps -a`

### stop running container
`docker stop` OR `control + c`

### docker start
Starts a stopped container.

### docker rm

Removes a stopped container.

### Remove (delete) an image from the host machine
`docker rmi <image_name_or_id>`

### Downloads an image from the configured registry
`docker pull <image_name>`

### docker push

Uploads an image to the configured registry.

### docker exec

Run a command in a running container.

### docker network

Manage Docker networks such as creating and removing networks, and connecting containers to networks.
