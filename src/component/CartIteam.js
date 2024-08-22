// import React from "react";
// import { useCart } from "../context/CartProvider";
// import styles from "./CartItem.module.css";
// import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
// import { ImCross } from "react-icons/im";

// export default function CartIteam({ title, price, img, id, quantity }) {
//     const { dispatch } = useCart();

//     function handelIncreasQuantity() {
//         return dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
//     }

//     function handelDecreasQuantity() {
//         return dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
//     }

//     function handelRemoveItem() {
//         return dispatch({ type: "REMOVE_ITEM", payload: { id } });
//     }

//     return (
//         <div>
//             <div className={styles.imgAndTitle}>
//                 <div className={styles.imgContainer}>
//                     <img src={img} alt={title} className={styles.cartImg} />
//                 </div>
//                 <h3>{title}</h3>
//             </div>
//             <div className={styles.otherControls}>
//                 <div className={styles.quantityInput}>
//                 </div>
//                 <p>₹ {price * quantity}</p>
//                     <button
//                         onClick={() => {
//                             if (quantity === 1) {
//                                 return;
//                             } else {
//                                 handelDecreasQuantity(id);
//                             }
//                         }}
//                     >
//                         <AiOutlineMinus />
//                     </button>
//                     <span className={styles.quantityDisplay}>{quantity}</span>
//                     <button onClick={handelIncreasQuantity}>
//                         <AiOutlinePlus />
//                     </button>
                
                
             
//                 <button
//                     className={styles.removeItemBtn}
//                     onClick={handelRemoveItem}
//                 >
//                     <ImCross />
//                 </button>
//             </div>
//         </div>
//     );
// }


import React from "react";
import { useCart } from "../context/CartProvider";
import styles from "./CartItem.module.css";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { ImCross } from "react-icons/im";

export default function CartItem({ title, price, img, id, quantity }) {
    const { dispatch } = useCart();

    function handleIncreaseQuantity() {
        dispatch({ type: "INCREASE_QUANTITY", payload: { id } });
    }

    function handleDecreaseQuantity() {
        if (quantity > 1) {
            dispatch({ type: "DECREASE_QUANTITY", payload: { id } });
        }
    }

    function handleRemoveItem() {
        dispatch({ type: "REMOVE_ITEM", payload: { id } });
    }

    return (
        <div className={styles.cartItem}>
            <div className={styles.imgAndTitle}>
                <div className={styles.imgContainer}>
                    <img src={img} alt={title} className={styles.cartImg} />
                </div>
                <h3>{title}</h3>
            </div>
            <div className={styles.otherControls}>
                <div className={styles.quantityInput}>
                    <button onClick={handleDecreaseQuantity}>
                        <AiOutlineMinus />
                    </button>
                    <span className={styles.quantityDisplay}>{quantity}</span>
                    <button onClick={handleIncreaseQuantity}>
                        <AiOutlinePlus />
                    </button>
                </div>
                <p>₹ {price * quantity}</p>
                <button
                    className={styles.removeItemBtn}
                    onClick={handleRemoveItem}
                >
                    <ImCross />
                </button>
            </div>
        </div>
    );
}
