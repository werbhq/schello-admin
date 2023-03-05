/*global google*/
import { GoogleMap } from "@react-google-maps/api";
// Use all components ending with F (its a fix for react 18+)
// Docs: https://react-google-maps-api-docs.netlify.app/
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import MarkerWithWindow from "./MarkerWithWindow";
import { ReportMap } from "../helpers/parseReport";

const mapStyles = {
  height: "80vh",
  width: "100%",
  margin: "10px",
};

const globalState: { HEAT_MAPS: google.maps.visualization.HeatmapLayer[] } = {
  HEAT_MAPS: [],
};

const GoogleMapCustom = ({
  data,
  hideMarker,
  hideHeatMap,
  mapStylesCustom,
}: {
  data: ReportMap[];
  hideMarker: boolean;
  hideHeatMap: boolean;
  mapStylesCustom?: React.CSSProperties;
}) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const setBoundsToData = () => {
    const bounds = new google.maps.LatLngBounds();
    data.forEach((e) => bounds.extend(e.location));
    map?.fitBounds(bounds);
  };

  const addHeatMap = (hide: boolean) => {
    globalState.HEAT_MAPS.forEach((e) => e.setMap(null));
    globalState.HEAT_MAPS = [];

    if (!hide) {
      const heatMap = new google.maps.visualization.HeatmapLayer({
        data: data.map((e) => e.location),
      });
      heatMap.setMap(map);
      globalState.HEAT_MAPS.push(heatMap);
    }
  };

  useEffect(() => {
    if (map) {
      setBoundsToData();
      addHeatMap(hideHeatMap);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, hideHeatMap, data]);

  return (
    <GoogleMap
      mapContainerStyle={mapStylesCustom ?? mapStyles}
      onLoad={(map) => setMap(map)}
    >
      {!hideMarker &&
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
