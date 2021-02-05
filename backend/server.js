import express from 'express';
import data from './data.js';
const app = express();

app.get('/', (req, res) => {
  res.send("Server is up");
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
})

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find( x => x._id === req.params.id);
  if(product) {
    res.send(product);
  } else {
    res.status(404).send({message: 'Product Not Found'});
  }
})

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));