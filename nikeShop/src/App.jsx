import { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductListing from "./components/ProductListing";
import productsData, { products } from "./productsData";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <ProductListing products={productsData} />;
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<About />}></Route>
          <Route path="/about" element={<ProductListing />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
