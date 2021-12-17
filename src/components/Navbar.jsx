import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartCount = useSelector((state) => state.cart.totalQ);
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              E-commerce
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/orders"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
