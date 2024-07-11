import { useEffect, useRef, useState } from 'react';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';

import Counter from './Counter';

export default function GameHeader({
  timer, start, isRunning, toFind,
}) {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src="/logo.svg" alt="Blog logo" />
        <h1>WHERE'S WALDO</h1>
      </Link>
      <div className="timer">
        <Counter innerRef={timer} start={start} isRunning={isRunning} />
      </div>
      <div>
        <h3>{toFind}</h3>
      </div>
    </div>
  );
}
