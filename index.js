const app = require('express')();

app.get('/', (_req, res) => {
  res.send('Hello from VM1\n');
});

const port = 3000;
app.listen(port, () => console.log('Server running on port', port));