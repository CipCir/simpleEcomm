import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../store/ordersSlice";
import { clearCart } from "../store/cartSlice";

import Button from "@mui/material/Button";

import { Form } from "react-final-form";
import { TextField, Radios } from "mui-rff";

import "./CheckOut.css";

export default function CheckOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const onSubmit = (e) => {
    let cartTotal = cartItems.reduce((acc, el) => {
      return (acc += el.totalPrice);
    }, 0);
    const orderObj = {
      id: new Date().valueOf(),
      products: cartItems.map((el) => el.id), //ids
      total: cartTotal,
      boughtBy: `${e.Name} ${e.Surname}`,
      date: new Date().toLocaleDateString(),
    };
    dispatch(addOrder(orderObj));
    dispatch(clearCart());
    navigate("/thankyou");
  };

  return (
    <Form
      onSubmit={onSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="fRow">
            <TextField label="Name" name="Name" required={true} />
            <TextField label="Surname" name="Surname" required={true} />
            <TextField label="Phone" name="Phone" required={true} />
            <TextField label="Email" name="Email" required={true} />
          </div>
          <div className="fRow">
            <TextField name="Address" label="Address" multiline maxRows={4} />
          </div>
          <div className="fRow">
            <Radios
              label="Payment method"
              name="payment"
              required={true}
              data={[
                { label: "Ramburs", value: "ramburs" },
                { label: "Card", value: "card" },
              ]}
            />
          </div>
          <Button
            sx={{
              position: "fixed",
              bottom: "10px",
              right: "10px",
            }}
            variant="contained"
            color="success"
            type="submit"
          >
            Submit order
          </Button>
        </form>
      )}
    />
  );
}
