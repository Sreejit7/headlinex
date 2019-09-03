import React from 'react';
import Newsheadline from './Newsheadline';
class Newslist extends React.Component{
    render(){
        const newsitems=this.props.newses;
        return(
            newsitems.map((element,index)=>
               <Newsheadline element={element} index={index} image={element.urlToImage}/>)
        );

    }
}
export default Newslist;