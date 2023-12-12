import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState } from "react";
import Modal from "./Modal";

export const NavBar = () => {
    const { shoppingList } = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand" href="#">
                    Kleidung
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/men"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Men
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/women"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Women
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/cart"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Shopping Cart
                            </NavLink>
                        </li>
                    </ul>
                    <a href="#" onClick={toggleModal}>
                        <Badge
                            badgeContent={shoppingList.length}
                            color="primary"
                            className="badge-cart"
                        >
                            <ShoppingCart color="action" />
                        </Badge>
                    </a>
                    <Modal isOpen={isModalOpen} closeModal={toggleModal} />
                </div>
            </div>
        </nav>
    );
};
