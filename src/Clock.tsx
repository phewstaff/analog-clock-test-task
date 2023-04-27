import React, { useState, useEffect } from "react";

interface ClockProps {
  apiUrl: string;
}

const Clock: React.FC<ClockProps> = ({}) => {
  return (
    <>
      <div className="clock">
        <div className="hand hour"></div>
        <div className="hand minute"></div>
        <div className="hand second"></div>
      </div>
      <div className="semi-circle"></div>
    </>
  );
};

export default Clock;
