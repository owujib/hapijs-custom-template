const app = require('./app');

// (async () => {
//   await app.start();
//   console.log('Server running on port 3000');
// })();

app
  .start()
  .then(() => {
    console.log('App is running on port 3000');
  })
  .catch((err) => {
    console.log('Server Error: ', err);
  });
