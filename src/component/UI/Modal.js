import React from "react";
import style from "./modal.module.css"
import { createPortal } from "react-dom";

function Modal({ children }) {
    return createPortal(
        <>
            <div className={style.modalBackDrop}></div>
            <div className={style.modalContent}>
                {children}
            </div>
        </>,
        document.getElementById("modal"))
}

export default Modal