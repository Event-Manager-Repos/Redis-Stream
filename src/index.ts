import express from 'express';
import { publishClient } from './client';
require('dotenv').config();

const app = express();

const publish = async (timestamp = new Date().toISOString()) => {
  const article = {
    uuid: '123456',
    title: 'Testing redis stream',
    description: 'An article on Redis Stream from Ixora Solution Ltd.',
    timestamp
  };

  try {
    await publishClient.publish('article', JSON.stringify(article));
    console.log('published article');
  } catch (error) {
    console.log('error in publish article');
    console.log(error);
  }
};

app.get('/', async (req, res) => {
  await publish();
  return res.status(200);
});

app.listen(process.env.PORT);
