const express = require('express');

const createRouteMiddleware = port => (_req, res) => {
  res.send(`Hello from server port: ${port}\n`);
};

[3000,3001,3002,3003].map(port => {
  const app = express();

  app.get('/', createRouteMiddleware(port));

  app.listen(port, () => console.log("Server running on port", port));
});