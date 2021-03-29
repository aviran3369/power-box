
import React, { useContext, useEffect, useState } from 'react';

import './Stopper.scss';

export default function Stopper() {
  const [tenthlySecond, setTenthlySecond] = useState(0);
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [input, setInput] = useState(10);
  const [active, setActive] = useState(false);

  useEffect(() => {
    let timeout = null;
    const hasTime = minute > 0 || second > 0 || tenthlySecond > 0;
    if (active && !hasTime){
      setActive(false);
    }
    else if (active && hasTime) {
      timeout = setTimeout(() => {
        let ts = tenthlySecond;
        let s = second;
        let m = minute;

        ts--;

        if (ts < 0) {
          ts = 90;
          s--;

          if (s < 0) {
            s = 59;
            m--;

            if (m < 0) {
              m = 0;
            }
            else {
              setActive(false);
            }

          }

        }

        if (play) {
          setTenthlySecond(ts);
          setSecond(s);
          setMinute(m);
        }
      }, 10);
    }
    return () => {
      clearTimeout(timeout);
    }
  }, [tenthlySecond, second, minute, active]);

  const play = () => {
    const total = input * 60;
    let min = Math.floor(total / 60);
    let totalSec = total - (min * 60);
    let sec = Math.floor(totalSec);
    let ts = Math.floor((totalSec - sec) * 10) * 10;

    setMinute(min);
    setSecond(sec);
    setTenthlySecond(ts);
    setActive(true);
  };

  const pause = () => {
    setActive(false);
  };

  const reset = () => {
    setActive(false);
    setTenthlySecond(0);
    setSecond(0);
    setMinute(0);
  };

  const set = (el) => {
    setInput(el.target.value);
  };

  const renderTime = () => {
    const m = minute >= 10 ? minute.toString() : `0${minute}`;
    const s = second >= 10 ? second.toString() : `0${second}`;
    const ts = tenthlySecond >= 10 ? tenthlySecond.toString() : `0${tenthlySecond}`;
    return <span className="clock">{m}:{s}:{ts}</span>;
  };

  return (
    <div id="stopper" className="pb-module">
      <div className="timer-count module-timer-count">
        {renderTime()}
      </div>
      <div className="actions">

        <button onClick={reset} className="action-btn reset-timer">
          <i className="material-icons">restart_alt</i>
        </button>

        {active ?
          <button onClick={pause} className="action-btn pause-timer">
            <i className="material-icons">pause</i>
          </button>
          :
          <button onClick={play} className="action-btn play-timer">
            <i className="material-icons">play_arrow</i>
          </button>
        }
      </div>
      <div className="module-form">
        <div className="user-input">
          <label>דקות</label>
          <input type="number" min="1" step="0.5" value={input} onChange={e => set(e)} />
        </div>
      </div>
    </div>
  );
}