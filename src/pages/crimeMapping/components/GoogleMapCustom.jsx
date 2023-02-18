/*global google*/
import { GoogleMap } from "@react-google-maps/api";
import PropTypes from "prop-types";
import { useState } from "react";
import MarkerWithWindow from "./MarkerWithWindow";

const mapStyles = {
  height: "80vh",
  width: "100%",
  margin: "10px",
};

const globalState = {
  HEAT_MAPS: [],
};

const GoogleMapCustom = (props) => {
  /** @type {[google.maps.Map, React.Dispatch<React.SetStateAction<null|google.maps.Map>>]} */
  const [map, setMap] = useState(null);

  const data = props.data.map(({ location, ...rest }) => ({
    ...rest,
    location: new google.maps.LatLng(location.lat, location.lon),
  }));

  const setBoundsToData = () => {
    const bounds = new google.maps.LatLngBounds();
    data.forEach((e) => bounds.extend(e.location));
    map.fitBounds(bounds);
  };

  const addHeatMap = (hide) => {
    if (hide) return globalState.HEAT_MAPS.forEach((e) => e.setMap(null));

    const heatMap = new google.maps.visualization.HeatmapLayer({
      data: data.map((e) => e.location),
    });
    heatMap.setMap(map);

    globalState.HEAT_MAPS.push(heatMap);
  };

  if (map) {
    setBoundsToData();
    addHeatMap(props.hideHeatMap);
  }

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
