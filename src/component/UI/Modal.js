import React from "react";
import style from "./modal.module.css"
import { createPortal } from "react-dom";

function Modal({children}) {
    return createPortal(
    <>
    <div className={style.modelBackDrop}></div>
    <div className={style.modelContent}></div>
    {children}
    </>, 
    document.getElementById("modal"))
}

export default Modal