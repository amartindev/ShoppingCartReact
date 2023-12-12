import { CartPage } from "../pages/CartPage";


const Modal = ({ isOpen, closeModal }) => {
    if (!isOpen) return null;

    const handleModalClick = (e) => {
        e.stopPropagation();
    };

    return (
        <div className="back-modal" onClick={closeModal}>
            <div className="carrito-modal animate__animated animate__slideInRight" onClick={handleModalClick}>
                <button onClick={closeModal} className="button-close-modal"><i className="bi bi-x"></i></button>
                <div>
                    <p className="shopping_cart_title">
                        Shopping Cart
                    </p>
                    <CartPage></CartPage>
                </div>
            </div>
        </div>
    );
};

export default Modal;
