import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

const Header = () => {
  const [name, setName] = useState("");
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Travel Guide</Typography>
        <Box display="flex">
          <Typography variant="h6">{name} Explore New places</Typography>
          <input value={name} onChange={(e) => setName(e.target.value)} />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
