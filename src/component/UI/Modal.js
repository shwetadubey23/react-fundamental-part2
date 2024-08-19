import React from "react";
import styles from "./modal.module.css"
import { createPortal } from "react-dom";

function Modal({ children, modalClose}) {
    return createPortal(
        <>
            <div className={styles.modalBackDrop} onClick={modalClose} ></div>
            <div className={styles.modalContent}>
                {children}
            </div>
        </>,
        document.getElementById("modal"))
}

export default Modal