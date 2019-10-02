import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'


class App extends Component {

  render(){
    // const val =document.getElementById("cur") 
    // console.log(val);
    return (
      <div className="App">
        <h1>CURRENT COUNT
          <div id='curr' >{this.props.count}</div>
        </h1>
        <input id='cur' type='text' placeholder='Increment by...'/>
        <button onClick= {this.props.increase}>Increase</button>
        <button onClick= {this.props.decrease}>Decrease</button>
        </div>
    
    );
  }

}

function mapStateToProps (state){
  return {
    count : state.count
  }
  
  }

function mapDispatchToProps(dispatch){
 
  
  return {
    increase : () => dispatch({type: 'INCREASE' , val:document.getElementById('cur').value}),
    decrease : () => dispatch({type: 'DECREASE'})

  }
}

export default connect(mapStateToProps,mapDispatchToProps )(App);
