import express from 'express';
import mongoose from 'mongoose';
import data from './data.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect('mongodb://localhost/EStore', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

app.get('/', (req, res) => {
  res.send("Server is up");
});

app.get('/api/products', (req, res) => {
  res.send(data.products);
})
app.use('/api/users', userRouter);
app.get('/api/products/:id', (req, res) => {
  const product = data.products.find( x => x._id === req.params.id);
  if(product) {
    res.send(product);
  } else {
    res.status(404).send({message: 'Product Not Found'});
  }
})

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));