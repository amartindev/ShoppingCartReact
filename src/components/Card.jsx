import { useState } from "react";

export const Card = ({
    image,
    title,
    category,
    price,
    handleAdd,
    handleDelete,
}) => {
    const [added, setAdded] = useState(false);

    const clickAdd = () => {
        handleAdd();
        setAdded(true);
    };
    const clickRemove = () => {
        handleDelete();
        setAdded(false);
    };

    return (
        <div className="tarjeta">
            <div className="container-imagen">
            <img src={image} alt={title} className="tarjeta-imagen" />
            </div>
            <div className="tarjeta-contenido">
                <p className="tarjeta-categoria">{category}</p>
                <h3 className="tarjeta-titulo">{title}</h3>
                <p className="tarjeta-precio">${price}</p>
                {added ? (
                    <button
                        type="button"
                        className="boton-quitar"
                        onClick={clickRemove}
                    >
                        Remove
                    </button>
                ) : (
                    <button
                        type="button"
                        className="boton-agregar"
                        onClick={clickAdd}
                    >
                        Add
                    </button>
                )}
            </div>
        </div>
    );
};
