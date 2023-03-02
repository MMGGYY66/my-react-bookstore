import React from 'react';

function Progress() {
  return (
    <div className="progressInfo">
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill" />
          </div>
          <div className="mask half">
            <div className="fill" />
          </div>
          <div className="inside-circle" />
        </div>
      </div>
      <div className="info">
        <span className="percentComplete">
          64%
        </span>
        <span className="completed">
          Completed
        </span>
      </div>
    </div>
  );
}

export default Progress;
