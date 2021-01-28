import express from 'express';
import data from './data.js';
const app = express();

app.get('/', (req, res) => {
  res.send("Server is up");
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
})

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));