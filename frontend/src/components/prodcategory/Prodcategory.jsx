import React from 'react'
import { Link } from 'react-router-dom'
import styles from './prodcategory.module.css'

const Prodcategory = ({ name , img }) => {
    return (
        <Link to={`product/${name.toLowerCase()}`}>
            <div className={styles.mainCard}>
                <img src={img} alt="" className={styles.mainImg} loading='lazy' />
                <span className={styles.imgTitle}>{name}</span>
            </div>
        </Link>
    )
}

export default Prodcategory