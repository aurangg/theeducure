import React from 'react';
import Countdown from 'react-countdown';
import './timer.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Timer = () => <span>You are good to go!</span>;
const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
          // Render a complete state
          return <Timer />;
        } else {
          // Render a countdown
          return (
            <span>
              {days}D:{hours}H:{minutes}M:{seconds}
            </span>
          );
        }
      };
    return(
        <div className="timer_bg">
            <Countdown date={Date.now() + 152365125369} renderer={renderer} />
        </div>
    )

    export default Timer;