import React from 'react';
import Countrylist from './Countrylist';
import Newslist from './Newslist';
class  Newsapp extends React.Component{
    constructor(props){
       super(props);
       this.state={
           newsarray:[]
       }
    }
    news=(country)=>{
        fetch(
            `https://newsapi.org/v2/top-headlines?source=google-news&country=${country}&apiKey=a9b320f1f47644f99dab6b9407db90b0`
               ).then((Response)=>{return Response.json();
            }).then((json)=>{this.setState({newsarray:json.articles},
                ()=>{console.log(this.state.newsarray)
                
                })
        })
            
    }
    render(){
        return(
            <div>
               <Countrylist ui={this.news}/>
               <Newslist newses={this.state.newsarray}/>              
            </div>
        );
    }
}
export default Newsapp;