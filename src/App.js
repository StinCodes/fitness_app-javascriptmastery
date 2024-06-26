import React from 'react'
import './App.css'
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width="400px" sx={{ width: { x1: "1488px" } }} m='auto'>
      {/* sx property allows site to be responsive on larger devices */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App
