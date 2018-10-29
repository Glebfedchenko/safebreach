const express = require('express');
const cors = require('cors');
const path = require('path');

const port = process.env.PORT || 5000;
const app = express();
app.use(cors());
app.use(express.static('client/build'));

app.get('*', (req, res) => {
  res.sendfile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
app.listen(port, () => console.log(`App runs at ${port}`));
