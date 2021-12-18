import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

import { useDispatch } from "react-redux";
import { updateQ, removeProd } from "../../store/cartSlice";

import "./CartRow.css";

export default function CartRow({ prod }) {
  const dispatch = useDispatch();

  return (
    <TableRow>
      <TableCell>
        <Avatar
          alt="Remy Sharp"
          src={prod.image}
          sx={{ width: 56, height: 56 }}
        />
      </TableCell>
      <TableCell>{prod.title}</TableCell>
      <TableCell>
        <Button
          size="small"
          variant="contained"
          disabled={prod.q === 1}
          sx={{ minWidth: "28px", marginRight: "3px" }}
          onClick={() => dispatch(updateQ({ id: prod.id, remove: true }))}
        >
          -
        </Button>
        {prod.q}
        <Button
          size="small"
          variant="contained"
          sx={{ minWidth: "28px", marginLeft: "3px" }}
          onClick={() => dispatch(updateQ({ id: prod.id, add: true }))}
        >
          +
        </Button>
      </TableCell>
      <TableCell>{prod.price}</TableCell>
      <TableCell>{prod.totalPrice}</TableCell>
      <TableCell>
        <IconButton
          sx={{ color: "red" }}
          aria-label="delete"
          onClick={() => dispatch(removeProd({ id: prod.id }))}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
