import { useState } from "react"

export const Card = ({image, title, description, price}) => {

    const [added, setAdded] = useState(false)

  return (
    <div className="tarjeta">
        <img src={image} alt={title} className="tarjeta-imagen" />
        <div className="tarjeta-contenido">
            <h3 className="tarjeta-titulo">{title}</h3>
            <p className="tarjeta-descripcion">{description}</p>
            <p className="tarjeta-precio">{price}</p>
        </div>
        {
            added
                ? <button type="button" className="boton-quitar">Eliminate</button>
                : <button type="button" className="boton-agregar">Add</button>
        }
    </div>
  )
}
