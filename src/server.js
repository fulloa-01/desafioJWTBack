const { app: server } = require('./app');

const  PORT  = 3000;

server.listen(PORT, (err) => {
  if (err) {
    throw err;
  }
  console.log(`server is running on port ${PORT}`);
});