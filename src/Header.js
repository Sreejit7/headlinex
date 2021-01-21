import React,{useEffect, useState} from 'react'
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
      <h1>HEADLINER</h1>
    </div>
  )
}

export default Header
