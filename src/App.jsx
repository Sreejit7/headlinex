import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import "./App.css";
import Header from "./components/Header";
import Headline from "./components/Headline";
import Footer from "./components/Footer";
import { AppSearchProvider } from "./contexts/useSearchContext";
import NewsList from "./sections/NewsList";

function App() {
  return (
    <AppSearchProvider>
      <main className="app">
        <Header />
        <section className={`app__body`}>
          <NewsList />
        </section>
        <Footer />
      </main>
    </AppSearchProvider>
  );
}
export default App;
