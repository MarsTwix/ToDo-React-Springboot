FROM postgres

ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB todo_db

COPY init.sql /docker-entrypoint-initdb.d/
