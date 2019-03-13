import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchTime} from '../actions';
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';

class Clock extends Component  {

    componentDidMount() {
      this.interval = setInterval(() => this.props.fetchTime(), 1000);
    }
    componentWillUnmount() {
      clearInterval(this.interval);
    }


    render(){
      return (<div>
                <h1 style={{color:'cornflowerblue',marginLeft:'0.5%'}}>So we waiting the first day of Spring!</h1>
                <div style={{color: '#8f3eda',fontSize: '1.5em',marginLeft:'0.5%'}}>{this.props.time}</div>
                <br/>
                <Button><Link style={{textDecoration:'none'}} to="/settime"> Set the countdown </Link></Button>
              </div>
      )
    }
}

const mapStateToProps = (state) => {
  return { time: state.timeTo}
}

export default connect(mapStateToProps, {fetchTime})(Clock);
