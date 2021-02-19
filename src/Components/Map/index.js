import React,{useState, useEffect} from "react";
import Head from "next/head";

import { initializeMap } from "./initializeMap";

import styles from '../components.module.css'

const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

export default function Map() {
  // "pk.eyJ1IjoiZGF2aXNhbXBhaW9tIiwiYSI6ImNrbGNleHdldzEwbHgyb3RrZW80emF1aXAifQ.1ivHpICW-mdM_r-ij9OQPA"
  // -22.8289386,
  // -43.0567354
  const [Map, setMap] = useState();
  const [pageIsMounted, setPageIsMounted] = useState(false);
  
    mapboxgl.accessToken =
      "pk.eyJ1Ijoid2FubmFkYyIsImEiOiJjazBja2M1ZzYwM2lnM2dvM3o1bmF1dmV6In0.50nuNnApjrJYkMfR2AUpXA";
  
    useEffect(() => {
      setPageIsMounted(true);
  
      let map = new mapboxgl.Map({
        container: "my-map",
        style: "mapbox://styles/mapbox/streets-v11",
        center: [ -43.0567354, -22.8289386],
        zoom: 12.5,
        pitch: 45,
       
      });
  
      initializeMap(mapboxgl, map);
      setMap(map);
    }, []);
  
    useEffect(() => {
      if (pageIsMounted ) {
        Map.on("load", function () {
    
        });
      }
    }, [pageIsMounted, setMap, Map]);

  return (
    <div>
    <Head>
        <title>Map Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </Head>
      <div id="my-map" className={styles.map} />

    </div>
  );
}
