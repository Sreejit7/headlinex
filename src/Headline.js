import React from 'react'
import {ExternalLink} from 'react-external-link';
import './Headline.css';
import Headlinebg from './headline-bg.png';
function Headline({news, toggle}) {
  return (
    <div className = {`headline ${toggle && "headline__toggle"}`}>   
      <img className = "headline__image"
           src = {news.image}
           alt = ""
      />    
      <div className="headline__content">
        <ExternalLink href = {news.url}>
          <h2 className = {`headline__title ${toggle && "headline__title__toggle"}`}>{news.title}</h2>
        </ExternalLink>
        <p className = {`news__author ${toggle && "toggled"}`}> - By {news.author?news.author:news.source.name} at {news.publishedAt}</p>
        <p className = {`news__desc ${toggle && "toggled"}`}>{news.description}</p>
      </div>
      <img className = "logo-image" src = {Headlinebg} alt = ""/>
    </div>
  )
}

export default Headline