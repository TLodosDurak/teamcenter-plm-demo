const express = require('express');
const app = express();
const cors = require('cors');
const partsRouter = require('./routes/parts');
const path = require('path');

app.use(cors());
app.use(express.json());
app.use('/api/parts', partsRouter);
app.use('/assets', express.static(path.join(__dirname, '/assets')));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
