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
                                to="/"
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Modal
                            </NavLink>
                        </li>
                    </ul>
                    <NavLink onClick={() => setIsModalOpen(true)}>
                        <Badge
                            badgeContent={shoppingList.length}
                            color="primary"
                        >
                            <ShoppingCart color="action" />
                        </Badge>
                    </NavLink>
                    <Modal
                        isOpen={isModalOpen}
                        closeModal={() => setIsModalOpen(false)}
                    />
                </div>
            </div>
        </nav>
    );
};
