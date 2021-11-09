import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import {
  CssBaseline,
  Grid,
  Container,
  MenuItem,
  Select,
  InputLabel,
  CircularProgress,
  FormControl,
  Typography,
  Box,
} from "@material-ui/core";
import Map from "./components/Map";
import List from "./components/List";
import { getPlacesData } from "./api";
import PlaceDetails from "./components/PlaceDetails";

const App = () => {
  const [places, setPlaces] = useState();
  const [type, setType] = useState("restaurants");
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [rating, setRating] = useState(4.0);
  const [coordinates, setCoordinates] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [bounds, setBounds] = useState({});

  const typeChange = (e) => {
    var paramsdata = e.target.value;
    console.log("paramsdata", paramsdata);
    setType(paramsdata);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  useEffect(() => {
    const filteredPlaces =
      places &&
      places.length &&
      places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  useEffect(() => {
    setIsLoading(true);

    getPlacesData(type, bounds.sw, bounds.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setIsLoading(false);
    });
  }, [type, coordinates, bounds]);

  return (
    <div>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4} sm={4}>
          <Container>
            <Typography variant="h5"> Restaurant and Places </Typography>

            <Box m={3} display="flex" justifyContent="space-between">
              <FormControl>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={typeChange}>
                  <MenuItem value="restaurants">Restaurants</MenuItem>
                  <MenuItem value="hotels">Hotels</MenuItem>
                  <MenuItem value="attractions">Attractions</MenuItem>
                </Select>
              </FormControl>
              {/* ratings */}
              <FormControl>
                <InputLabel>Rating</InputLabel>
                <Select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <MenuItem value={0}>All </MenuItem>
                  <MenuItem value={3.5}>above 3.5</MenuItem>
                  <MenuItem value={4.0}>Above 4.0</MenuItem>
                  <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {isLoading ? (
              <CircularProgress size="5rem" />
            ) : (
              <Grid container spacing={4}>
                {filteredPlaces?.length
                  ? filteredPlaces?.map((place, i) => (
                      <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                      </Grid>
                    ))
                  : places?.map((place, i) => (
                      <Grid item key={i} xs={12}>
                        <PlaceDetails place={place} />
                      </Grid>
                    ))}
              </Grid>
            )}
          </Container>
        </Grid>
        <Grid item xs={12} md={8} sm={8}>
          <Box m={3}>
            <Map
              setCoordinates={setCoordinates}
              setBounds={setBounds}
              coordinates={coordinates}
              places={filteredPlaces?.length ? filteredPlaces : places}
            />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
