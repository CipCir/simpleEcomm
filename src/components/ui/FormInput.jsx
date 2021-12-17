import React from "react";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

export default function FormInput({ fld, handler, lbl }) {
  return (
    <FormControl variant="standard" sx={{ marginRight: 2 }}>
      <InputLabel htmlFor={lbl}>{lbl}</InputLabel>
      <Input
        id={lbl}
        value={fld.value}
        error={fld.err}
        onChange={handler}
        fullWidth
      />
    </FormControl>
  );
}
