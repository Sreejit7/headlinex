import React,{useEffect, useState} from 'react';
import Logo from './header-logo.png';
import './Header.css';
function Header({toggle}) {
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
     <h1 className = "header__title">HEADLINER</h1>
    </div>
  )
}

export default Header
