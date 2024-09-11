import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AnimalBreed from "./pages/AnimalBreeds";
import Quiz from "./pages/Quiz";
import AdoptInfo from "./pages/AdoptInfo";
import BreedInfo from "./pages/BreedInfo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/animalbreed" element={<AnimalBreed />} />
      <Route path="/AdoptInfo/:id" element={<AdoptInfo />} />
      <Route path="/BreedInfo/:id" element={<BreedInfo />} />
    </Routes>
  );
}

export default App;
