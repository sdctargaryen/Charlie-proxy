const express = require('express');
const morgan = require('morgan');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/api/photos', proxy({ target: 'http://localhost:3001' }));
app.use('/api/desc', proxy({ target: 'http://localhost:3002' }));
app.use('/api/reservations', proxy({ target: 'http://localhost:3003' }));
app.use('/api/rating', proxy({ target: 'http://localhost:3004' }));
app.use('/api/reviews', proxy({ target: 'http://localhost:3004' }));

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
