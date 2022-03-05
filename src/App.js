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
  const [newsList, setNewsList] = useState([]);
  const [input, setInput] = useState("");
  const [inputOn, setInputOn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [searchOn, setSearchOn] = useState(false);

  useEffect(() => {
    const url = inputOn
      ? `https://gnews.io/api/v4/search?q=${input}&lang=en&sortby=publishedAt&token=f556748f6689e5c7a5c0444335cded03`
      : "https://gnews.io/api/v4/top-headlines?lang=en&sortby=publishedAt&token=f556748f6689e5c7a5c0444335cded03";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setNewsList(data.articles);
      })
      .catch((err) => console.error(err.message));
  }, [inputOn]);

  return (
    <AppSearchProvider>
      <main className="app">
        <Header toggle={isToggled} search={() => setSearchOn(!searchOn)} />
        <div className={`app__body ${isToggled && "app-dark"}`}>
          {/* <ul className="app__news">
            {newsList.map((news, index) => (
              <Headline key={index} news={news} toggle={isToggled} />
            ))}
          </ul> */}
          <NewsList />
        </div>
        <Footer />
      </main>
    </AppSearchProvider>
  );
}
export default App;
