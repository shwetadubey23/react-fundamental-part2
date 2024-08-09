import React from "react";
import Modal from "./UI/Modal";

function Header() {
    return (
       <header>
        <nav>
            <h1 className="logo">ARC Shop</h1>
            <button>Show Cart</button>
        </nav>
        <Modal>
           <h1>Modal Heading</h1> 
        </Modal>
       </header>
    );

}

export default Header