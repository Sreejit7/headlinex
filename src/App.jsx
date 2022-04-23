import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { AppSearchProvider } from "./contexts/useSearchContext";
import NewsList from "./sections/NewsList";
import TopicsBar from "./sections/TopicsBar";
import { AppTooltipProvider } from "./contexts/useTooltipContext";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <AppTooltipProvider>
      <AppSearchProvider>
        <main className="app">
          <Header />
          <TopicsBar />
          <section className={`app__body`}>
            <NewsList />
          </section>
          <Footer />
        </main>
        <Tooltip />
      </AppSearchProvider>
    </AppTooltipProvider>
  );
}
export default App;
