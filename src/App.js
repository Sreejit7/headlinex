import React,{useState, useEffect} from 'react'
import Headline from './Headline';
import './App.css';
function App() {
  const [newsList, setNewsList] = useState([]);
  const [input, setInput] = useState("");
  //const currentDate = new Date().toISOString();
  //console.log(currentDate);
  //top-headlines?
  useEffect(() => {
    const url = 'https://gnews.io/api/v4/top-headlines?lang=en&sortby=publishedAt&token=f556748f6689e5c7a5c0444335cded03';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      setNewsList(data.articles);
    })
    .catch((err) => console.log(err.message));
  }, []);
  //console.log(newsList);
  
  return (
    <div className = "app">    
      {newsList.map((news) => (
        <Headline news = {news}/>
      ))}
    </div>
  )
}
export default App
