import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppSearchProvider } from "./contexts/useSearchContext";
import NewsList from "./sections/NewsList";
import TopicsBar from "./sections/TopicsBar";

function App() {
  return (
    <AppSearchProvider>
      <main className="app">
        <Header />
        <TopicsBar />
        <section className={`app__body`}>
          <NewsList />
        </section>
        <Footer />
      </main>
    </AppSearchProvider>
  );
}
export default App;
