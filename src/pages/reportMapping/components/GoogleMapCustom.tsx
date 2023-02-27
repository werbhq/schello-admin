/*global google*/
import { GoogleMap } from "@react-google-maps/api";
// Use all components ending with F (its a fix for react 18+)
// Docs: https://react-google-maps-api-docs.netlify.app/
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import MarkerWithWindow from "./MarkerWithWindow";
import { Report } from "../../../types/Report";

const mapStyles = {
  height: "80vh",
  width: "100%",
  margin: "10px",
};

const globalState: { HEAT_MAPS: google.maps.visualization.HeatmapLayer[] } = {
  HEAT_MAPS: [],
};

const GoogleMapCustom = (props: {
  data: Report[];
  hideMarker: boolean;
  hideHeatMap: boolean;
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const data = props.data.map(({ location, ...rest }) => ({
    ...rest,
    location: new google.maps.LatLng(location.lat, location.lon),
  }));

  const setBoundsToData = () => {
    const bounds = new google.maps.LatLngBounds();
    data.forEach((e) => bounds.extend(e.location));
    map?.fitBounds(bounds);
  };

  const addHeatMap = (hide: boolean) => {
    if (hide) return globalState.HEAT_MAPS.forEach((e) => e.setMap(null));

    const heatMap = new google.maps.visualization.HeatmapLayer({
      data: data.map((e) => e.location),
    });
    heatMap.setMap(map);

    globalState.HEAT_MAPS.push(heatMap);
  };

  useEffect(() => {
    setBoundsToData();
    addHeatMap(props.hideHeatMap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return (
    <GoogleMap mapContainerStyle={mapStyles} onLoad={(map) => setMap(map)}>
      {!props.hideMarker &&
        data.map((e, index) => <MarkerWithWindow data={e} key={index} />)}
    </GoogleMap>
  );
};

GoogleMapCustom.propTypes = {
  data: PropTypes.array,
  hideMarker: PropTypes.bool,
  hideHeatMap: PropTypes.bool,
};

export default GoogleMapCustom;
