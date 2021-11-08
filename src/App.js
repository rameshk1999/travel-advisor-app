import React from "react";
import Header from "./components/Header";
import { CssBaseline, Grid, Container } from "@material-ui/core";
import Map from "./components/Map";
import List from "./components/List";

const App = () => {
  return (
    <div>
      <CssBaseline />
      <Header />
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <List />
        </Grid>
        <Grid item xs={12} md={4}>
          <Map />
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
