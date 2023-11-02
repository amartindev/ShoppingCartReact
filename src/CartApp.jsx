import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CartPage } from "./pages/CartPage";

export const CartApp = () => {
    return (
        <>
        <NavBar></NavBar>
        <div className="container">
            <Routes>
                <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
                <Route path="/carrito" element={<CartPage></CartPage>}></Route>
                <Route path="/*" element={<Navigate to='/'/>}></Route>
            </Routes>
        </div>
        </>
    );
};
