import React, {Component} from 'react';
import './timer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Countdown from "react-countdown";

function Timer(){
    const Completionist = () => <span>You are good to go!</span>;
    let finaldate = Date.parse("2020-03-31T00:00:00")
    let today = Date.now()
    let unix = Date.parse("01 Jan 1970 00:00:00")
    let firstSub = today-unix;
    let secondSub = finaldate - firstSub;
    
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a complete state
          return <Completionist />;
        } else {
          // Render a countdown
          return (
            
            <div className="special">{days} Days <br></br> {hours} Hours <br></br> {minutes} Minutes <br></br> {seconds} Seconds</div>
          );
        }
      };
    return(
      <div className="main">
      <div className="timer_bg">
        
        <div className="text">
          <Countdown date={Date.now()+ secondSub} renderer={renderer} />
        </div>
      </div>
      <div className="mobile_bg">
        <div className="text">
          <Countdown date={Date.now()+ secondSub} renderer={renderer} />
        </div>
      </div>
    </div>
    )
}

export default Timer;