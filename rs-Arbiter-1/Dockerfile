FROM mongo

WORKDIR /usr/src/configs

COPY mongo.cfg .

EXPOSE 27017

CMD ["--config", "./mongo.conf"]