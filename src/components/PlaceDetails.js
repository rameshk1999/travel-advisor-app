import React from "react";
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
  Card,
  CardMedia,
  CardContent,
  Chip,
  CardActions,
  Button,
} from "@material-ui/core";
import { LocationOnOutlined, Phone, Rating } from "@material-ui/icons";

const PlaceDetails = ({ place }) => {
  console.log("place", place);
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 250 }}
        title={place.name}
        image={place.photo ? place.photo.images.large.url : ""}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}{" "}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price:</Typography>
          <Typography variant="subtitle1">{place.price}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking:</Typography>
          <Typography variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2">{award.display_name}</Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip
            key={name}
            size="small"
            label={name}
            style={{ marginRight: 3, marginBottom: 3 }}
          />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="subtitle2">
            <LocationOnOutlined /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="subtitle2">
            <Phone /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url)}
          >
            Trip Advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website)}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
