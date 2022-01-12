import express from 'express';
import http from 'http';

let app = express(),
  httpServer = http.createServer(app),
  port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

httpServer.listen(port, () => {
  console.log('RESTful API server started on: http://localhost:' + port);
});
