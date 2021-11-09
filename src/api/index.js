import axios from "axios";

{
  /*
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
   */
}
export const getPlacesData = async (type, sw, ne) => {
  console.log("type", type, typeof type);
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
          "x-rapidapi-key":
            "ba5d4162ecmsh7f8800ba73e97cap1bd449jsnc839dd708dd7",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
