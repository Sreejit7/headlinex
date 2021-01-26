import React,{useState, useEffect} from 'react'
import { motion } from "framer-motion"
import Headline from './Headline';
import './App.css';
import {FaSearch} from 'react-icons/fa';
import Switch from './Switch';
import Header from './Header';
import Footer from './Footer';
function App() {
  const [newsList, setNewsList] = useState([]);
  const [input, setInput] = useState("");
  const [inputOn, setInputOn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  //const currentDate = new Date().toISOString();
  //console.log(currentDate);
  const[searchOn, setSearchOn] = useState(false);
  
  const changeInput = (e) => {
    setInput(e.target.value);
    if(input === "")
      setInputOn(false);
  };
  const handleClick = (e) => {
    if(input !== "")
      setInputOn(true);
    if(searchOn)
      setSearchOn(false);
  }

  useEffect(() => {
    const url = inputOn? `https://gnews.io/api/v4/search?q=${input}&lang=en&sortby=publishedAt&token=f556748f6689e5c7a5c0444335cded03` :'https://gnews.io/api/v4/top-headlines?lang=en&sortby=publishedAt&token=f556748f6689e5c7a5c0444335cded03';
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      setNewsList(data.articles);
    })
    .catch((err) => console.log(err.message));
  }, [inputOn]);
  //console.log(newsList);
  return (
    <div className = "app">
      <Header toggle = {isToggled} search = {() => setSearchOn(!searchOn)}/>
      <div className = {`app__body ${isToggled && "app-dark"}`}>
        <motion.div 
          initial = {{y: '-10vh'}}
          animate = {{y: 0}}
          transition = {{type: 'spring', stiffness: 100, delay: 0.45, duration: 0.5}}
          className = {`input__search ${searchOn && "active"}`}>
        <input className = "news__input" placeholder = "Looking for something specific?" value = {input} onChange = {changeInput}/>
        <FaSearch className = "search-icon" onClick = {handleClick} />
        </motion.div>
        <div className="app__switch">
          <Switch isToggled = {isToggled} onToggle = {() => setIsToggled(!isToggled)}/> 
        </div>
        <div className="app__news">
          {newsList.map((news) => (
            <Headline news = {news} toggle = {isToggled} />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
export default App
