import React,{useEffect, useState} from 'react';
import Logo from './header-logo.png';
import './Header.css';
function Header({toggle}) {
  const [scrollNav, setScrollNav] = useState(false);
  useEffect(() => {
    const changeNav = () => {
      if(window.scrollY >= 80){
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
     <img alt = "" src = {Logo} className = "header-logo"/>
    </div>
  )
}

export default Header
