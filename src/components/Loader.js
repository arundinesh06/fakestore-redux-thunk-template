import React from "react";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={styles["loader-container"]}>
      <div className={styles["lds-roller"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
