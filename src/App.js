import React,{Component} from 'react';
import './App.css';
import Button from './components/Button.js';
import InputF from './components/InputF.js';
import ClearButton from './components/ClearButton.js';

class App extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      dispField:"",
      trackspos:0,
      trackepos:0,
      numberslist: [],
      operatorslist: []
    };
  }
  addClicked=val=> {
    if(val==='+'||val==='-'||val==='X'||val==='/')
    {
      this.state.operatorslist.push(val);
      this.setState({operatorslist: this.state.operatorslist});
      console.log(this.state.operatorslist);

      this.state.numberslist.push(parseFloat(this.state.dispField.slice(this.state.trackspos,this.state.trackepos)));
      this.setState({numberslist: this.state.numberslist});
      console.log(this.state.numberslist);

      this.setState({trackspos:this.state.trackepos+1,trackepos:this.state.trackepos+1});
    }
    else{
      this.setState({trackepos: this.state.trackepos+1});
    }
    this.setState({dispField:this.state.dispField+val});
  };

  clearField =() =>{
    this.setState({dispField:"",trackspos:0,trackepos:0,numberslist:[],operatorslist:[]});
  };

  computePostfix=(val)=>{
    this.state.numberslist.push(parseFloat(this.state.dispField.slice(this.state.trackspos,this.state.trackepos)));
    this.setState({numberslist: this.state.numberslist});
    var l1=this.state.operatorslist.length;
    var l2=this.state.numberslist.length;
    while(l1!==0)
    {
      var op1=this.state.operatorslist.splice(l1-1,1);
      var [n1,n2]=this.state.numberslist.splice(l2-2,2);
      l1=this.state.operatorslist.length;
      if(op1=="X")
      {
        n1=n1*n2;
      }
      else if(op1=="/"){
        n1=n1/n2;
      }
      else if(op1=="-"){
        n1=n1-n2;
      }
      else if(op1=="+"){
        n1=n1+n2;
      }
      this.state.numberslist.push(n1);
      this.setState({numberslist:this.state.numberslist});
      l2=this.state.numberslist.length;
    }
    this.setState({dispField:this.state.numberslist[0]});
  };

  render(){
    return(
      <div className="App">
      <div className="calc-wrapper">
        <div className="row">
    <InputF>{this.state.dispField}</InputF>
          </div>
          <div className="row">
          <Button handleClick={this.addClicked}>log</Button>  
          <Button handleClick={this.addClicked}>Prev</Button>
          <Button handleClick={this.addClicked}>Next</Button>
          <Button handleClick={this.addClicked}>Del</Button>
          <Button handleClick={this.addClicked}>Power</Button>
          </div>
        <div className="row">
        <Button handleClick={this.addClicked}>ln</Button>
          <Button handleClick={this.addClicked}>7</Button>
          <Button handleClick={this.addClicked}>8</Button>
          <Button handleClick={this.addClicked}>9</Button>
          <Button handleClick={this.addClicked}>/</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addClicked}>exp</Button>
          <Button handleClick={this.addClicked}>4</Button>
          <Button handleClick={this.addClicked}>5</Button>
          <Button handleClick={this.addClicked}>6</Button>
          <Button handleClick={this.addClicked}>X</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addClicked}>sqrt</Button>
          <Button handleClick={this.addClicked}>1</Button>
          <Button handleClick={this.addClicked}>2</Button>
          <Button handleClick={this.addClicked}>3</Button>
          <Button handleClick={this.addClicked}>+</Button>
          </div>
          <div className="row">
          <Button handleClick={this.addClicked}>.</Button>
          <Button handleClick={this.addClicked}>0</Button>
          <Button handleClick={this.computePostfix}>=</Button>
          <Button handleClick={this.addClicked}>-</Button>
          </div>
          <div className="row">
          <ClearButton handleClick={this.clearField}>Clear</ClearButton>
          </div>
        </div>
    </div>
    );
  }
}

export default App;
