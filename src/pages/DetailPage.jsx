import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ProductsContext } from "../context/ProductsContext";
import { Rating } from "@mui/material";

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
        <div className="detail-page">
            {product ? (
                <>
                    <div className="container-image-content">
                        <div className="container-image">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="image-product-detail"
                            />
                        </div>
                        <div className="container-content">
                            <h2 className="title-product-detail">
                                {product.title}
                            </h2>
                            <p className="tarjeta-categoria">
                                {product.category}
                            </p>
                            <p className="price-product-detail">
                                ${product.price}
                            </p>
                            <div className="rate-product-detail">
                                <Rating
                                    name="read-only"
                                    value={product.rating.rate}
                                    readOnly
                                />
                                <p>&nbsp;{product.rating.rate}</p>
                                <span>&nbsp;|&nbsp;</span>
                                <p>{product.rating.count} reviews</p>
                            </div>

                            <br />
                            {added ? (
                                <button
                                    type="button"
                                    className="boton-quitar button-product-detail"
                                    onClick={handleDelete}
                                >
                                    Remove
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className="boton-agregar button-product-detail"
                                    onClick={handleAdd}
                                >
                                    Add
                                </button>
                            )}
                        </div>
                    </div>

                    <div className="container-description">
                        <p>
                            <b>Description</b>
                        </p>
                        <hr />
                        <p className="description-detail">
                            <i>{product.description}</i>
                        </p>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default DetailPage;
