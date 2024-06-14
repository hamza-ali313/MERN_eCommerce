import React from "react";
import { Link } from "react-router-dom";
import styles from "./prodcategory.module.css";
import { BASE_URL } from "../../Helper/APIConfig";

const Prodcategory = ({ name, img ,category }) => {
  return (
    <Link to={`product/${category}`}>
      <div className={styles.mainCard}>
        <img
          src={`${BASE_URL}${img}`}
          alt=""
          className={styles.mainImg}
          loading="lazy"
        />
        <span className={styles.imgTitle}>{name}</span>
      </div>
    </Link>
  );
};

export default Prodcategory;
