import React from "react";
import styles from "./Contianer.module.css";
function Contianer({ children }) {
  return <div className= {styles.contianer}> 
    {children}
   
  </div>
}

export default Contianer