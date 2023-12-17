import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const CartPage = () => {
    const { shoppingList, increaseQuantity, decreaseQuantity, deleteItem } =
        useContext(CartContext);

    const calcularTotal = () => {
        return shoppingList
            .reduce((total, item) => total + item.price * item.cantidad, 0)
            .toFixed(2);
    };

    return (
        <>
        <div className="carrito">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Cant.</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingList.map((item) => (
                            <>
                            <tr key={item.id} className="fila-item">
                                <td><img src={item.image} className="tarjeta-imagen-small" /></td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                    <div className="botones-cantidad">
                                    <button
                                        className="btn btn-outline-primary cant-minus"
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <button className="btn btn-outline-primary cant-center">
                                        {item.cantidad}
                                    </button>
                                    <button
                                        className="btn btn-outline-primary cant-plus"
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        <i className="bi bi-bag-x"></i>
                                    </button>
                                </td>
                            </tr>

                            </>
                        ))}
                        <tr>
                        <td>
                            <b>TOTAL: </b>
                        </td>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                        </tr>
                        <tr><br /></tr>
                    </tbody>
                </table>
                <div className="d-grid gap-2">
                    <button
                        className="btn boton-buy"
                        disabled={shoppingList < 1}
                    >
                        Buy Now
                    </button>
                </div>
                </div>
        </>
    );
};
