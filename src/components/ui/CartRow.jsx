import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

import { useDispatch } from "react-redux";
import { updateQ, removeProd } from "../../store/cartSlice";

import "./CartRow.css";

export default function CartRow({ prod }) {
  const dispatch = useDispatch();

  let qRemoveClass = "Qbtn";
  if (prod.q === 1) {
    qRemoveClass += " Qdisabled";
  }
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
        <div className="qCtrl">
          <div
            className={qRemoveClass}
            onClick={() => dispatch(updateQ({ id: prod.id, remove: true }))}
          >
            -
          </div>
          {prod.q}
          <div
            className="Qbtn"
            onClick={() => dispatch(updateQ({ id: prod.id, add: true }))}
          >
            +
          </div>
        </div>
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
