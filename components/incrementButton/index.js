import React, { useState } from 'react';
import styles from './incrementButton.module.css';

function IncrementButton() {
  const [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  return (
    <div>
      <div className={styles.number}>{number}</div>
      <button onClick={increment} className={styles.button}>
        Click to increment
      </button>
    </div>
  );
}

export default IncrementButton;
