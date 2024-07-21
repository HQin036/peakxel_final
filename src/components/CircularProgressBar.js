import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ value, text }) => {
  return (
    <div style={{ width: '100px', margin: '0 auto' }}>
      <CircularProgressbar
        value={value}
        text={`${value}%`}
        styles={buildStyles({
          textSize: '16px',
          pathColor: '#4a90e2',
          textColor: '#fff',
        })}
      />
      <div style={{ textAlign: 'center', color: '#fff' }}>{text}</div>
    </div>
  );
};

export default CircularProgressBar;