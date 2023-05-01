import express from 'express';
require('dotenv').config();

const start = async () => {
  const app = express();

  app.get('/', (req, res) => res.send(`Welcome from web api ${new Date()}`));

  app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening api on port ${process.env.PORT || 8080}`);
  });
};

start();
