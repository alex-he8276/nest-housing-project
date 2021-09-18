import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';

function Map({ postings }) {

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 43.47289,
    longitude: -80.5392,
    zoom: 14
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {postings.map((posting) => (
        <div key={posting.id}>
          <Marker
            latitude={posting.coordinates[0]}
            longitude={posting.coordinates[1]} 
            offsetLeft={-20}
            offsetTop={-10}
          >
            <Pin className="cursor-pointer" />
          </Marker>
        </div>
      ))}
      </ReactMapGL>
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
