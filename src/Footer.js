import React from 'react'
import {MdArrowUpward} from 'react-icons/md'
import {HashLink} from 'react-router-hash-link'
import './Footer.css';
const Footer = () => {
  return (
    <div className = 'footer'>
      <HashLink smooth to = "#top">
        <MdArrowUpward className ='top-icon'/>
      </HashLink>
      <h3> HEADLINER Inc. 2021 &copy;</h3>
    </div>
  )
}

export default Footer
