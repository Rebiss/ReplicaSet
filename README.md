# High Availability

Որպես Օպերացիոն համակարգ օգտագործում ենք CentOS 8

## Install MongoDB

```bash

```

## Docker

```sh
$docker-compose up rs-Arbiter-1 adminmongo  or $docker-compose up -d rs-Arbiter-1 adminmongo
$docker ps
```

```sh
/etc/mongod.conf #Configure ( Կարգավորումներ)

/var/lib/mongo/{ master,slave,arbiter } #Create database folder ( Ստեզծել տվյալների բազայի գտնվելու վայրը )

$chown mongod:mongod /var/lib/mongo/{ master,slave,arbiter } #Permissions ( Իրավունքներ )

```
