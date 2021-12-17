import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector } from "react-redux";

export default function Orders() {
  const orders = useSelector((state) => state.orders.items);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Order id</TableCell>
            <TableCell>Products</TableCell>
            <TableCell>Order total</TableCell>
            <TableCell>Bought by</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => {
            return (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{JSON.stringify(order.products)}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.boughtBy}</TableCell>
                <TableCell>{order.date}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
