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
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
           <h1>Modal Heading 2</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
           <h1>Modal Heading 3</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
           <h1>Modal Heading 4</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
           <h1>Modal Heading 5</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
       
           <h1>Modal Heading 6</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
       
           <h1>Modal Heading 7</h1>
           <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Curabitur vehicula magna a urna gravida, ac facilisis quam commodo.
        Sed auctor magna ut sapien malesuada, non convallis lorem tristique. </p>
        </Modal>
       </header>
    );

}

export default Header