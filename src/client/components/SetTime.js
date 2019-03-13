import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import Button from '@material-ui/core/Button';


class SetTime extends Component {

  formHandler(event){
    const name = this._name.value;
    setInterval(()=>
      this.props.timeSet(name), 1000)
  }
  onSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label>
              <h1 style={{color:'cornflowerblue',marginLeft:'0.5%'}}>Set Date:</h1>
            </label>
            <input
              style={{height:'42px',background:'#eaeaea',color:'#551a8b',marginLeft: '0.5%', fontSize:'1.5em'}}
              type="date"
              ref={input => this._name = input}
            />
            <Button style={{marginBottom: '0.3%', marginLeft:'1%'}} onClick={()=>this.formHandler()}>Start the Countdown!</Button>
          </form>
        <div style={{color: '#6821ab',fontSize: '1.5em', marginLeft:'0.5%'}}>{this.props.time}</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    time: state.time,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    timeSet: (time) => dispatch(actionCreators.set(time) )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SetTime);
