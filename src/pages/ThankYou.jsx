import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function ThankYou() {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ bgcolor: "#cfe8fc", maxWidth: "60%" }}>
        <Card sx={{}}>
          <CardMedia
            component="img"
            image="https://optinmonster.com/wp-content/uploads/2016/10/Anatomy-of-the-Perfect-Thank-You-Page.png"
          />
        </Card>
      </Box>
    </Container>
  );
}
