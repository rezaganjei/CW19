import React from "react";
import styles from "./Board.module.css";
import Card from "../Card";

const Board = (props) => {
  return (
    <Card>
      <div className={styles.mainBoard}>
        <div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
        </div>
        <div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
        </div>
        <div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
          <div className={styles.cell}></div>
        </div>
      </div>
    </Card>
  );
};

export default Board;
