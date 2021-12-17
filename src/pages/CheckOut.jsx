import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { addOrder } from "../store/ordersSlice";
import { clearCart } from "../store/cartSlice";

import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import Alert from "@mui/material/Alert";

import FormInput from "../components/ui/FormInput";

import "./CheckOut.css";

export default function CheckOut() {
  const [formValid, setFormValid] = useState(true);
  const [name, setName] = useState({ val: "", err: false });
  const [surname, setSurname] = useState({ val: "", err: false });
  const [phone, setPhone] = useState({ val: "", err: false });
  const [email, setEmail] = useState({ val: "", err: false });
  const [address, setAddress] = useState({ val: "", err: false });
  const [payment, setPayment] = useState({ val: "", err: false });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleChangeName = (event) => {
    setName({ val: event.target.value, err: false });
    setFormValid(true);
  };
  const handleChangeSurname = (event) => {
    setSurname({ val: event.target.value, err: false });
    setFormValid(true);
  };
  const handleChangePhone = (event) => {
    setPhone({ val: event.target.value, err: false });
    setFormValid(true);
  };
  const handleChangeEmail = (event) => {
    setEmail({ val: event.target.value, err: false });
    setFormValid(true);
  };
  const handleChangeAddress = (event) => {
    setAddress({ val: event.target.value, err: false });
    setFormValid(true);
  };
  const handleChangePayment = (event) => {
    setPayment({ val: event.target.value, err: false });
    setFormValid(true);
  };

  const checkField = (field, setter) => {
    if (field.val === "") {
      setter((old) => ({ ...old, err: true }));
      return false;
    }
    return true;
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    let isValid = false,
      validArr = [];

    validArr.push(checkField(name, setName));
    validArr.push(checkField(surname, setSurname));
    validArr.push(checkField(phone, setPhone));
    validArr.push(checkField(email, setEmail));
    validArr.push(checkField(address, setAddress));
    validArr.push(checkField(payment, setPayment));
    isValid = validArr.every((el) => el);
    setFormValid(isValid);

    if (isValid) {
      //generate order obj
      let cartTotal = cartItems.reduce((acc, el) => {
        return (acc += el.totalPrice);
      }, 0);
      const orderObj = {
        id: new Date().valueOf(),
        products: cartItems.map((el) => el.id), //ids
        total: cartTotal,
        boughtBy: `${name.val} ${surname.val}`,
        date: new Date().toLocaleDateString(),
      };
      dispatch(addOrder(orderObj));
      dispatch(clearCart());
      navigate("/thankyou");
    }
  };

  return (
    <Box component="form" autoComplete="off">
      {!formValid && (
        <Alert severity="error" variant="filled" sx={{ marginBottom: 2 }}>
          Fields can't be empty !
        </Alert>
      )}

      <div className="fRow">
        <FormInput fld={name} handler={handleChangeName} lbl="Name" />
        <FormInput fld={surname} handler={handleChangeSurname} lbl="Surname" />
        <FormInput fld={phone} handler={handleChangePhone} lbl="Phone" />
        <FormInput fld={email} handler={handleChangeEmail} lbl="Email" />
      </div>
      <div className="fRow">
        <TextField
          id="outlined-multiline-flexible"
          label="Address"
          multiline
          maxRows={4}
          fullWidth
          value={address.value}
          error={address.err}
          onChange={handleChangeAddress}
        />
      </div>
      <div className="fRow">
        <FormControl component="fieldset" error={payment.err}>
          <FormLabel component="legend">Payment method</FormLabel>
          <RadioGroup
            aria-label="payment"
            name="radio-buttons-group"
            value={payment.value}
            onChange={handleChangePayment}
          >
            <FormControlLabel
              value="ramburs"
              control={<Radio />}
              label="Ramburs"
            />
            <FormControlLabel value="card" control={<Radio />} label="Card" />
          </RadioGroup>
        </FormControl>
      </div>
      <Button
        sx={{
          position: "fixed",
          bottom: "10px",
          right: "10px",
        }}
        variant="contained"
        color="success"
        onClick={handleFormSubmit}
      >
        Submit order
      </Button>
    </Box>
  );
}
