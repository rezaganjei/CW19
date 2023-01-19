import React from "react";
import Card from "../Card";
import styles from "./User.module.css";

const User = (props) => {
  return (
    <>
      <Card>
        <idv></idv>
        <div>
          <label>Plese Enter Your Name</label>
          <input type={"text"}></input>
        </div>
        <div className={styles.selection}>
          <label>Please Pick a Side</label>
          <select>
            <option>X</option>
            <option>O</option>
          </select>
        </div>
      </Card>
    </>
  );
};
export default User;
