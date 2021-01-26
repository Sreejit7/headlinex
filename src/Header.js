import React,{useEffect, useState} from 'react';
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
    <div className = {`header ${toggle && "header__toggle"} ${scrollNav && "scrolling"}`}>
      <FaSearch className = "header__search" onClick = {search}/>
    <HashLink smooth to = "#top" className = 'logo-link'> <h1 className = {`header__title`}>HEADLINER</h1> </HashLink>
    </div>
  )
}

export default Header
