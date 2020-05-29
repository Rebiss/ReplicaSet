# High Availability

Որպես Օպերացիոն համակարգ օգտագործում ենք CentOS 8

## Install MongoDB CentOS 8

```bash
$sudo nano /etc/yum.repos.d/mongodb-org.repo
$vim or nano /etc/yum.repos.d/mongodb-org.repo
    [mongodb-org-4.2]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.2/x86_64/
    gpgcheck=1
    enabled=1
    gpgkey=https://www.mongodb.org/static/pgp/server-4.2.asc
$sudo dnf install mongodb-org
$sudo systemctl enable mongod --now
$mongo


```

## Docker

```sh
$docker-compose up rs-Arbiter-1 adminmongo  or $docker-compose up -d rs-Arbiter-1 adminmongo
$docker ps
```

```sh
$vim or nano /etc/mongod.conf #Configure ( Կարգավորումներ)

$cd /var/lib/mongo/ & $mkdir master, slave, arbiter  #Create database folder ( Ստեզծել տվյալների բազայի ֆայլերի քարտացուցակ )

$chown mongod:mongod /var/lib/mongo/{ master,slave,arbiter } #Permissions ( Իրավունքներ )

```
