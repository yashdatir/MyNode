const redis = require('redis');
const client = redis.createClient();

const IMP_DATA = {
  name: 'Yash Datir',
  place: 'Vadodara, Gujarat',
};

client.on('error', (err) => {
  console.log(err);
});

client.set('yash_key', JSON.stringify(IMP_DATA), redis.print);
client.get('yash_key', redis.print);
