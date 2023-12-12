import { useEffect, useState } from "react";
import { ProductsContext } from "./ProductsContext";

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            const filteredProducts = data.filter(product => product.category !== "electronics" && product.category !== "jewelery");
            setProducts(filteredProducts);
        } catch (error) {
            console.error("Error al obtener productos:", error);
            setError("Error al obtener productos. Inténtalo de nuevo más tarde.");

        }
    };
    

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <ProductsContext.Provider value={{ products, error }}>
            {children}
        </ProductsContext.Provider>
    );
};