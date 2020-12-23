import React,{useState, useEffect} from 'react'
import Headline from './Headline';
import './App.css';
import Switch from './Switch';
import Header from './Header';
function App() {
  const [newsList, setNewsList] = useState([]);
  const [input, setInput] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  //const currentDate = new Date().toISOString();
  //console.log(currentDate);
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
      <Header toggle = {isToggled}/>
      <div className = {`app__body ${isToggled && "app-dark"}`}>
        <div className="app__switch">
          <Switch isToggled = {isToggled} onToggle = {() => setIsToggled(!isToggled)}/> 
        </div>
        <div className="app__news">
          {newsList.map((news) => (
            <Headline news = {news} toggle = {isToggled}/>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App
