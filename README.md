# High Availability

VM(OS Centos-8) and install MongoDB

```sh
_ **/etc/mongod.conf** #Configure

_ **/var/lib/mongo/{master,slave,arbiter}** #Create database folder

_ **chown mongod:mongod /var/lib/mongo/{master,slave,arbiter}** #Permissions

```

## Docker

```sh
_ **docker-compose up rs-Arbiter-1 adminmongo ** or _**docker-compose up -d rs-Arbiter-1 adminmongo **
_ **docker ps **
```
