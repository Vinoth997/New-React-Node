const express = require('express');
const cors = require('cors');

const app = express();

const data = [
  { id: 1, title: 'Item 1', description: 'This is item 1' },
  { id: 2, title: 'Item 2', description: 'This is item 2' },
  { id: 3, title: 'Item 3', description: 'This is item 3' },
];

app.use(cors());


app.get('/api/:id', (req, res) => {
  res.json(req.params.id);
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});
