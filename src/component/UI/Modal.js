import React from "react";
import style from "./modal.module.css"
import { createPortal } from "react-dom";

function Modal({ children, modalClose}) {
    return createPortal(
        <>
            <div className={style.modalBackDrop} onClick={modalClose} ></div>
            <div className={style.modalContent}>
                {children}
            </div>
        </>,
        document.getElementById("modal"))
}

export default Modal