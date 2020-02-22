import React,{Component} from 'react';
import './InputF.css';

class InputF extends Component{
    render(){
        return(
            <div className="inputf">
                {this.props.children}
            </div>
        );
    }
}

export default InputF;