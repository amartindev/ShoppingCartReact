import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductsContext } from "../context/ProductsContext";
import { CartContext } from "../context/CartContext";

export const ComprasPage = () => {
    const { products } = useContext(ProductsContext);

    const { addItem, deleteItem } = useContext(CartContext);

    const handleAdd = (compra) => {
        addItem(compra);
    };
    const handleDelete = (id) => {
        deleteItem(id);
    };

    return (
        <>
            <h1>Shopping</h1>
            <hr />

            {products.map((product) => (
                <Card
                    key={product.id}
                    image={product.image}
                    title={product.title}
                    description={product.description}
                    price={product.price}
                    handleAdd={() => handleAdd(product)}
                    handleDelete={() => handleDelete(product.id)}
                ></Card>
            ))}
        </>
    );
};
