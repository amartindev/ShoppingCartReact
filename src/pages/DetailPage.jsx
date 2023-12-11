import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";

export const DetailPage = () => {
    const { products } = useContext(ProductsContext);

    const location = useLocation();
    const { search } = location;
    const params = new URLSearchParams(search);

    const id = params.get("id");
    const [added, setAdded] = useState(false);

    const { addItem, deleteItem } = useContext(CartContext);

    function productForId(idBuscado) {
        const productoEncontrado = products.find(
            (producto) => producto.id === parseInt(idBuscado)
        );
        return productoEncontrado || null;
    }

    const product = productForId(id);

    const handleAdd = () => {
        addItem(product);
        setAdded(true);
    };
    const handleDelete = () => {
        deleteItem(product.id);
        setAdded(false);
    };

    return (
            <div className="tarjeta">
                {product ? (
                    <>
                        <img src={product.image} alt={product.title} className="tarjeta-imagen" />
                        <div className="tarjeta-contenido">
                            <p className="tarjeta-categoria">{product.category}</p>
                            <h3 className="tarjeta-titulo">{product.title}</h3>
                            <p className="tarjeta-precio">${product.price}</p>
                            {added ? (
                                <button type="button" className="boton-quitar" onClick={handleDelete}>
                                    Remove
                                </button>
                            ) : (
                                <button type="button" className="boton-agregar" onClick={handleAdd}>
                                    Add
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        );

};

export default DetailPage;
