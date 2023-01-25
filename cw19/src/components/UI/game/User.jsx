import React from "react";
import Card from "../Card";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <>
      <Card>
        <div></div>
        <div>
          <label>Plese Enter Your Name</label>
          <input type={"text"}  value={props.inpVal} onChange={e => props.onInpChange(e.currentTarget.value)}/>
        </div>
        <div className={styles.selection}>
          <label>Please Pick a Side</label>
          <select value={props.selectVal} onChange={e => {
            props.onSelectChange(e.currentTarget.value)
          }}>
            <option>X</option>
            <option>O</option>
          </select>
        </div>
      </Card>
    </>
  );
};
export default User;
