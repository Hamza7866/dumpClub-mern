import React from "react";
import styles from "./Button.module.css";

function Button({ text, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span>{text}</span>
      <img
        className={styles.arrow}
        src="/images/arrow-forward.png"
        alt="arrow"
      />
    </button>
  );
}

export default Button;
