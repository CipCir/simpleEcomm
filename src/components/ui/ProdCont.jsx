import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";

export default function ProdCont({ prod }) {
  const dispatch = useDispatch();

  return (
    <Card sx={{ minWidth: "100%" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={prod.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {prod.title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {prod.price} $
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" onClick={() => dispatch(addToCart(prod))}>
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
}
