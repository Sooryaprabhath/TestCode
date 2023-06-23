import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = ({ percentage }) => {
  const pathColor = '#0db50d'; // Green color

  return (
    <div style={{ width: '100px' }}>
      <div
        style={{
          position: 'relative',
          top: '50px',
          width: '200px',
          height: '100px',
          overflow: 'hidden',
        }}
      >
        <CircularProgressbar
          styles={buildStyles({
            pathColor,
          })}
          strokeWidth={10}
        />
      </div>
    </div>
  );
};

export default CircularProgressBar;
