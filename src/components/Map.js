import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
import { LocationOnOutlined } from "@material-ui/icons";
import { Rating } from "@material-ui/lab";

const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  // const coordinates = { lat: 0, lng: 0 };
  return (
    <div style={{ height: "80vh", width: "100%" }}>
      {" "}
      <GoogleMapReact
        bootstrapURLKeys={{ key: `AIzaSyBTg1EpKFw-b60_tvleiyKpOtE1SXMMa5g` }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places?.map((place, i) => (
          <div
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >
            <Paper elevation={2}>
              <Typography variant="subtitle2" gutterBottom>
                {place.name}
              </Typography>
              <img
                style={{ width: "40px", height: "40px" }}
                src={place.photo && place.photo.images.large.url}
                alt={place.name}
              />
              <Rating size="small" value={Number(place.rating)} readOnly />
            </Paper>
          </div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
