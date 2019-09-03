import React from 'react';
import './style.css';
class Countrylist extends React.Component{
    render(){
        let countries=["in", "us", "fr", "ru", "gb", "au", "it", "sa"]
        return(
            <div className="Button" >
            <h1>Welcome to World News</h1>
            <h3>TOP 10 HEADLINES FOR YOU,ANYWHERE,ANYTIME </h3>
            <h4>Tap the Country Name you want to see news about:</h4>
            {countries.map((item)=>  
                   <button style={{color:'Red'}}onClick={()=>this.props.ui(item)}>{item}</button>)}
            </div>
        );
    }
}
export default Countrylist;