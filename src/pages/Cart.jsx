import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import CartRow from "../components/ui/CartRow";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  let navigate = useNavigate();
  return (
    <>
      {cartItems.length === 0 && <div>Cart is empty</div>}
      {cartItems.length > 0 && (
        <>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Image</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Quantity</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Total price</TableCell>
                  <TableCell>Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((prod) => (
                  <CartRow key={prod.id} prod={prod} />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            sx={{ position: "fixed", bottom: "10px", right: "10px" }}
            variant="contained"
            endIcon={<SendIcon />}
            onClick={() => {
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </>
  );
}
