import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectInterestTotal, calculateInterest } from "./calculatorSlice";
import styles from "./Calculator.module.css";

export function Calculator() {
  let totalInterest = useSelector(selectInterestTotal);
  const dispatch = useDispatch();

  const [principal, setPrincipal] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);

  const principalValue = Number(principal) || 0;
  const interestValue = Number(interest) || 0;
  const yearsValue = Number(years) || 0;

  return (
    <div>
      <div className={styles.row}>
        Principal:
        <input
          className={styles.textbox}
          aria-label="Set principal amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        Interest:
        <input
          className={styles.textbox}
          aria-label="Set interest rate amount"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        Years:
        <input
          className={styles.textbox}
          aria-label="Set years amount"
          value={years}
          onChange={(e) => setYears(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(
              calculateInterest({ principalValue, interestValue, yearsValue })
            )
          }
        >
          Calculate Interest
        </button>
      </div>
      <div className={styles.row}>
        <span className={styles.value}>Total Interest: {totalInterest}</span>
      </div>
    </div>
  );
}
