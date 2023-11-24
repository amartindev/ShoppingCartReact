import { useState } from "react";
import { NavLink } from "react-router-dom";

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
                <NavLink to="/detail" aria-current="page" href="#" className="container-imagen">
                    <img src={image} alt={title} className="tarjeta-imagen" />
                </NavLink>
            <div className="tarjeta-contenido">
                <p className="tarjeta-categoria">{category}</p>
                <NavLink to="/detail" aria-current="page" href="#" className="tarjeta-titulo-link">
                <h3  className="tarjeta-titulo">{title}</h3>
                </NavLink>
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
