import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

function Map({ MAPBOX_STYLE, MAPBOX_ACCESS_TOKEN }) {

  const [viewport, setViewport] = useState({
    width: "20%",
    height: "100%",
    latitude: 43.47289,
    longitude: -80.5392,
    zoom: 14
  });

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapStyle={process.env.MAPBOX_STYLE}
        mapboxApiAccessToken={process.env.MAPBOX_ACCESS_TOKEN}
        onViewportChange={nextViewport => setViewport(nextViewport)}
      />
    </div>

  )
}

// NextJS environment variables are only accessible here.
// export async function getStaticProps() {
//   const MAPBOX_STYLE = process.env.MAPBOX_STYLE;
//   const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

//   console.log(process.env.MAPBOX_STYLE);

//   return {
//     props: {
//       MAPBOX_STYLE: MAPBOX_STYLE,
//       MAPBOX_ACCESS_TOKEN: MAPBOX_ACCESS_TOKEN,
//     },
//   };

// }

export default Map;
