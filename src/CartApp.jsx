import { Route, Routes, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasPage } from "./pages/ComprasPage";
import { CartPage } from "./pages/CartPage";
import { DetailPage } from "./pages/DetailPage";
import { ProductsProvider } from "./context/ProductsProvider";
import { CartProvider } from "./context/CartProvider";
import { Women } from "./pages/Women";
import { Men } from "./pages/Men";

export const CartApp = () => {

    return (
        <>
        <ProductsProvider>
            <CartProvider>
                <NavBar></NavBar>
                <div>
                    <Routes>
                        <Route
                            path="/"
                            element={<ComprasPage></ComprasPage>}
                        ></Route>
                        <Route
                            path="/cart"
                            element={<CartPage></CartPage>}
                        ></Route>
                        <Route
                            path="/detail"
                            element={<DetailPage></DetailPage>}
                        ></Route>
                        <Route
                            path="/men"
                            element={<Men></Men>}
                        ></Route>
                        <Route
                            path="/women"
                            element={<Women></Women>}
                        ></Route>
                        <Route path="/*" element={<Navigate to="/" />}></Route>
                    </Routes>
                </div>
            </CartProvider>
        </ProductsProvider>

          </>
    );
};
