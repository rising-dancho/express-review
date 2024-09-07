import express from 'express';

const PORT = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  res.send('dis da app bro');
});

app.get('/about', (req, res) => {
  res.send('about');
});

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});