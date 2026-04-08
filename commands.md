# Docker Commands
Some of the most commonly used docker commands are given below.

### 1. docker pull
`docker pull` is used to download a Docker image from a registry (like Docker Hub) to your local system.

**Syntax**: 
```
docker pull <image-name>
```
**Example**:
```
docker pull ubuntu
```

### 2. docker images
`docker images` is used to list all Docker images stored on your system.

**Syntax**:
```
docker images
```

### 3. docker inspect
`docker inspect` is used to view detailed information about a Docker object (like a container, image, volume, or network).

**Suntax**:
```
docker inspect <name_or_id>
```

**Example**:
```
docker inspect ubuntu
```

### 4. docker run &lt;image-name&gt;
create and start a new container from a Docker image. We can also overrides the CMD by passing a new command after the image name.

**Syntax**:
```
docker run [OPTIONS] <image-name> [COMMAND]
```

**Example**: 
```
docker run -dt ubuntu
docker run ubuntu
```

`docker run -dt ubuntu` ➜ This command is used to create and start an Ubuntu container in the background with a terminal.

`-d` --> Runs the container in the background.

`-t` --> means Docker gives your container a terminal (like a command prompt).


`docker run -it ubuntu` ➜ This command is used to start an Ubuntu container with an interactive terminal.

`i` --> Keeps input open (you can type commands).

`-t` --> Gives a terminal screen.


### 5. docker ps
`docker ps` is used to list running containers on your system.

**Syntax**:
```
docker ps [OPTIONS]
```

`docker ps -a` --> It show all containers (including stopped).

### 6. docker top
`docker top` is used to see the processes running inside a container.

**Syntax**:
```
docker top <container-id>
```

**Sample Output:**
```
[root@ip-172-31-34-240 ~]# docker top 36f8656430d8
UID          PID          PPID        C          STIME               TTY                 TIME                CMD
root         28314        28288       0          16:39               ?                   00:00:00            /bin/bash
```

### 7. docker exec
`docker exec` is used to run a command inside a running container.

**Syntax**:
```
docker exec [OPTIONS] <container_id> <command>
```

**Example**:
```
docker exec -it 36f8656430d8 /bin/bash
```

**Sample output**:
```
[root@ip-172-31-34-240 ~]# docker exec -it 36f8656430d8 /bin/bash
root@36f8656430d8:/# ls -a
.  ..  .dockerenv  bin  boot  dev  etc  home  lib  lib64  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var
root@36f8656430d8:/# ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.4   4588  3916 pts/0    Ss+  16:39   0:00 /bin/bash
root          43  0.1  0.4   4588  3940 pts/1    Ss   17:25   0:00 /bin/bash
root          53  0.0  0.4   7888  4032 pts/1    R+   17:25   0:00 ps aux
root@36f8656430d8:/#
```
```
[root@ip-172-31-34-240 ~]# docker exec 36f8656430d8 ps aux
USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root           1  0.0  0.4   4588  3916 pts/0    Ss+  16:39   0:00 /bin/bash
root          54 25.0  0.4   7888  4036 ?        Rs   17:30   0:00 ps aux
[root@ip-172-31-34-240 ~]#
```

### 8. docker rm
`docker rm` is used to delete (remove) containers from your system.

`docker rm -f <container_id>` ➜ Force remove even if container is running.

`docker container prune` ➜ It is used to remove all stopped containers.

**Syntax**:
```
docker rm [OPTIONS] <container-id>
```

**Example**:
```
docker rm 36f8656430d8
```
