import React from "react";

import { Grid } from "@mui/material";

import ProdCont from "../components/ui/ProdCont";
import { useSelector } from "react-redux";

export default function ProdList() {
  const prodArr = useSelector((state) => state.prods.list);

  return (
    <Grid container spacing={2}>
      {prodArr.map((prod) => {
        return (
          <Grid item xs={12} sm={6} key={prod.id}>
            <ProdCont prod={prod} />
          </Grid>
        );
      })}
    </Grid>
  );
}
