import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import styles from "./Header.module.css";
import Modal from "./UI/Modal";
import Cart from "./Cart";
import Contianer from "./UI/Contianer";

function Header() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modalClose = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        if (isModalOpen) {
            document.documentElement.style.overflowY = "hidden";
        } else {
            document.documentElement.style.overflowY = "scroll";
        }
    }, [isModalOpen]);

    return (
        <header className={styles.header}>
            <Contianer>
                <nav className={styles.nav}>
                    <h1>ARC Shop</h1>
                    <button
                        className={styles.showCartbtn}
                        onClick={() => setIsModalOpen(true)}
                    >
                        <span className={styles.carIconAndNumber}>
                            <BsCart3 />
                            <span className={styles.cartNumber}>{12}</span>
                        </span>
                        <span>Cart</span>
                    </button>
                </nav>
            </Contianer>
            {isModalOpen && (
                <Modal modalClose={modalClose}>
                    <Cart />
                </Modal>
            )}
        </header>
    );
}

export default Header;
