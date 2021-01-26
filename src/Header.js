import React,{useEffect, useState} from 'react';
import { motion } from "framer-motion"
import {FaSearch} from 'react-icons/fa';
import {HashLink} from 'react-router-hash-link';
import './Header.css';
function Header({toggle, search}) {
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      if(window.scrollY >= 60){
        setScrollNav(true);
      }
      else{
        setScrollNav(false);
      }
    };
  
    window.addEventListener('scroll', changeNav);
    return () => {
      window.removeEventListener('scroll', changeNav);
    }
  }, []);
  return (
    <motion.div 
      initial = {{y: '-10vh'}}
      animate = {{y: 0}}
      transition = {{type: 'spring', stiffness: 100, delay: 0.45, duration: 0.5}}
      className = {`header ${toggle && "header__toggle"} ${scrollNav && "scrolling"}`}>
      <FaSearch className = "header__search" onClick = {search}/>
    <HashLink smooth to = "#top" className = 'logo-link'> <h1 className = {`header__title`}>HEADLINER</h1> </HashLink>
    </motion.div>
  )
}

export default Header
