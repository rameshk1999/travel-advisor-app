import React, { useState } from "react";
import {
  CircularProgress,
  Container,
  FormControl,
  Grid,
  Box,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@material-ui/core";
import PlaceDetails from "./PlaceDetails";

const List = ({ places }) => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState(4.0);

  return (
    <div>
      <Container>
        <Typography variant="h5"> Restaurant and Places </Typography>
        <Box display="flex" justifyContent="space-between">
          <FormControl>
            <InputLabel>Type</InputLabel>
            <Select value={type} onChange={(e) => setType(e.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          {/* ratings */}
          <FormControl>
            <InputLabel>Rating</InputLabel>
            <Select value={rating} onChange={(e) => setRating(e.target.value)}>
              <MenuItem value={0}>All </MenuItem>
              <MenuItem value={3.5}>above 3.5</MenuItem>
              <MenuItem value={4.0}>Above 4.0</MenuItem>
              <MenuItem value={4.5}>Above 4.5</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={4}>
          {places?.map((place, i) => (
            <Grid item key={i} xs={12}>
              <PlaceDetails place={place} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default List;
