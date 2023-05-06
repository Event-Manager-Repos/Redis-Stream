## Summary

A pub/sub model using redis stream with Node.js

## Run

- Make sure docker and docker-compose is installed in your system
- Create `.env` file using the example of `.env.example` file
- Run `docker-compose up`
- From browser/postman, go to `http://localhost:3000/` and it should response `A document is published to the redis stream`
- For design/architecture follow the article
