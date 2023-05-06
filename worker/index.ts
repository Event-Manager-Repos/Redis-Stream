import { REDIS_STREAM_CHANNEL, subscribeClient } from '../redis-config';

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
