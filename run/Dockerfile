FROM mongo

# Ստեղծել միջավայրը
WORKDIR /usr/src/configs

# Կախվածություններ
COPY rs.js .
COPY setup.sh .

CMD ["./setup.sh"]