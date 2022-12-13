import React from 'react';
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
   <img className={styles.image} src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading_pic" />
    </div>
  )
}

export default Loading