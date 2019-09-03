import React from 'react';
import  './style.css';
class Newsheadline extends React.Component{
    constructor(props){
        super(props);
        this.state={ visible:"none"}
    }
    loading=()=>{
        this.setState({
            visible:"block"
        })
    }
    render(){
        const mystyle={
            fontFamily: "Arial",
            fontSize:20,
            padding:'20px'
        }
        return(
                <div style={{display:'flex',flexDirection:'row',padding:'60px'}}>
                    <img src={this.props.image} onLoad={this.loading} height="150" width="150" />      
                       <p style={mystyle}>{this.props.element.description}</p>
                </div>  
            
        );
    }
}
export default Newsheadline;