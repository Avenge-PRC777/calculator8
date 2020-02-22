import React,{Component} from 'react';
import './Button.css';

//Kindly use return() and not return{}
//CLASS USES {Component from 'react'}
class Button extends Component{
    checkNumber(val){
        return !isNaN(val);
    }
    render(){
        return(
            <div className={`button ${this.checkNumber(this.props.children)?"":"operator"}`}
        onClick={()=>this.props.handleClick(this.props.children)}>
                {this.props.children}
            </div>
        );
    }
}
/*
function checkNumber(val){
    return !isNaN(val);
}

function Button(props){
    //Kindly do not forget the props
    //parameter in the function definition
    return(
        <div className={`button ${checkNumber(props.children)?"":"operator"}`}
        onClick={()=>props.handleClick(props.children)}>
            {props.children}
        </div>
    );
}*/

export default Button;
