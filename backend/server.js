import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send("Server is up");
});

const port = process.env.PORT || 5454;

app.listen(port, () => console.log(`🌎 => API Server started on port ${port}`));