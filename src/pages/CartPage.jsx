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
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Cant.</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {shoppingList.map((item) => (
                            <tr key={item.id}>
                                <th>{item.title}</th>
                                <td>{item.price}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >
                                        -
                                    </button>
                                    <button className="btn btn-outline-primary">
                                        {item.cantidad}
                                    </button>
                                    <button
                                        className="btn btn-outline-primary"
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger"
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        <th>
                            <b>TOTAL: </b>
                        </th>
                        <td></td>
                        <td></td>
                        <td>${calcularTotal()}</td>
                    </tbody>
                </table>
                <div className="d-grid gap-2">
                    <button
                        className="btn btn-info"
                        disabled={shoppingList < 1}
                    >
                        Buy Now
                    </button>
                </div>
                </div>
        </>
    );
};
