import { REDIS_STREAM_CHANNEL } from '../redis-config';
import { subscribeClient } from './client';

const subscribe = async () => {
  try {
    await subscribeClient.subscribe(REDIS_STREAM_CHANNEL, message => {
      console.log(message);
    });
  } catch (error) {
    console.log('Error in subscribe article');
    console.log(error);
  }
};

(async () => {
  await subscribe();
})();
