import React from 'react';
import { Route } from 'react-router-dom';
import Clock from './components/Clock';
import SetTime from './components/SetTime';


export default () => {
  return (
    <div>
      <Route exact path="/" component={Clock} />
      <Route exact path="/settime" component={SetTime} />
    </div>
  )
}
