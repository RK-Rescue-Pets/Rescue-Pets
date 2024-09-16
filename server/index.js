const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();
const app = express();
const port = 8080;

const pathToDist = path.join(__dirname, '../frontend/dist');
const serveStatic = express.static(pathToDist);

const fetchCatBreeds = async (req, res, next) => {
  const {searchTerm} = req.query;
  const url = searchTerm? `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`: 'https://api.thecatapi.com/v1/breeds';
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': process.env.BREED_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
    res.status(500).send('An error occurred while fetching breeds.');
  }
}

const fetchDogBreeds = async (req, res, next) => {
  const {searchTerm} = req.query;
  const url = searchTerm? `https://api.thedogapi.com/v1/breeds/search?q=${searchTerm}`: 'https://api.thedogapi.com/v1/breeds';
  try {
    const response = await fetch(url, {
      headers: {
        'x-api-key': process.env.BREED_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error('Error fetching cat breeds:', error);
    res.status(500).send('An error occurred while fetching breeds.');
  }
}

app.use(serveStatic)
app.get("/api/cat/", fetchCatBreeds);
app.get("/api/dog/", fetchDogBreeds)


app.listen(port, () => {
  console.log(`This app is listening on port ${port}`);
});
