import React from 'react'
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import {useEffect} from "react"


mapboxgl.accessToken =
  "pk.eyJ1IjoiaGVucmlxdWUyOSIsImEiOiJja3dtYTVrMGQxMHljMnBtdDFoOGRvYXFtIn0.WCpdplnIK7e153fMNqO5mQ";

function Map() {

    useEffect(() => {
          const map = new mapboxgl.Map({
          container: "map",
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [-99.29011, 39.39172],
          zoom: 3
         });
        });


    return (
        <Wrapper id="map">
            
        </Wrapper>
    )
}

export default Map

const Wrapper = tw.div`
    flex-1
`
