import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Card = ({
    id,
    image,
    title,
    category,
    price,
    handleAdd,
    handleDelete,
}) => {
    const navigate = useNavigate();

    const clickDetail = () => {
        navigate(
            `/detail?id=${id}`
        );
    };

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
            <div onClick={clickDetail} className="container-imagen">
                <img src={image} alt={title} className="tarjeta-imagen" />
            </div>
            <div className="tarjeta-contenido">
                <p className="tarjeta-categoria">{category}</p>
                <div onClick={clickDetail} className="tarjeta-titulo-link">
                    <h3 className="tarjeta-titulo">{title}</h3>
                </div>
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
