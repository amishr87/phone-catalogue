const express = require('express');
const cors = require('cors');
const db = require('./src/db'); // Import the db connection
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Get all phones
app.get('/phones', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM phone');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Get specifications for a phone
app.get('/specifications/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await db.query(
      'SELECT * FROM specifications WHERE modelid = $1',
      [id]
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// Add a new phone
app.post('/phones', async (req, res) => {
  try {
    const { modelName, year, startingPrice, image } = req.body;
    const result = await db.query(
      'INSERT INTO phone (modelname, year, startingprice, image) VALUES ($1, $2, $3, $4) RETURNING *',
      [modelName, year, startingPrice, image]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});