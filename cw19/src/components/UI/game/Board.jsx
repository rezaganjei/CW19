import React from "react";
import styles from "./Board.module.css";
import Card from "../Card";
const Board = (props) => {
  
  return (
    <Card>
      <div className={styles.mainBoard}>
        <div>
          <div className={styles.cell}><button onClick={props.onClickBtn} className={styles.btn} id="0"></button></div>
          <div className={styles.cell}><button onClick={props.onClickBtn} className={styles.btn} id="3"></button></div>
          <div className={styles.cell}><button onClick={props.onClickBtn} className={styles.btn} id="6"></button></div>
        </div>
        <div>
          <div className={styles.cell}><button onClick={props.onClickBtn}  className={styles.btn} id="1"></button></div>
          <div className={styles.cell}><button onClick={props.onClickBtn}  className={styles.btn} id="4"></button></div>
          <div className={styles.cell}><button onClick={props.onClickBtn}  className={styles.btn} id="7"></button></div>
        </div>
        <div>
          <div className={styles.cell}><button onClick={props.onClickBtn}  className={styles.btn} id="2"></button></div>
          <div className={styles.cell}><button onClick={props.onClickBtn}  className={styles.btn} id="5"></button></div>
          <div className={styles.cell}><button onClick={props.onClickBtn}  className={styles.btn} id="8"></button></div>
        </div>
      </div>
    </Card>
  );
};

export default Board;
