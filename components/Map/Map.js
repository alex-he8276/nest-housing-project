import { Result } from 'postcss';
import { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import Pin from './Pin';

function Map({ listings }) {

  const [selectedLocation, setSelectedLocation] = useState({});

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: 43.47289,
    longitude: -80.5392,
    zoom: 14
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/a29he/cktnxom0k04ko17qdof39achw"
      mapboxApiAccessToken="pk.eyJ1IjoiYTI5aGUiLCJhIjoiY2t0bnhhbmloMDcxcTJucDlvcm1pMm81MiJ9.-_wEqRQpNeYmyNE9lBDhlg"
      {...viewport}
      onViewportChange={nextViewport => setViewport(nextViewport)}
    >
      {listings.map((listing) => (
        <div key={listing.id}>

          <Marker
            latitude={listing.coordinates[0]}
            longitude={listing.coordinates[1]}
            offsetLeft={-10}
            offsetTop={-10}
          >
            <Pin listing={listing} onClick={setSelectedLocation} />
          </Marker>

          {selectedLocation.id === listing.id &&
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={listing.coordinates[0]}
              longitude={listing.coordinates[1]}
            >
              {listing.location}
            </Popup>
          }

        </div>
      ))}

    </ReactMapGL>
  )
}

// NextJS environment variables are only accessible here.
// export async function getStaticProps() {
//   const MAPBOX_STYLE = process.env.MAPBOX_STYLE;
//   const MAPBOX_ACCESS_TOKEN = process.env.MAPBOX_ACCESS_TOKEN

//   console.log(MAPBOX_STYLE);

//   return {
//     props: {
//       MAPBOX_STYLE: MAPBOX_STYLE,
//       MAPBOX_ACCESS_TOKEN: MAPBOX_ACCESS_TOKEN,
//     },
//   };

// }

export default Map;
