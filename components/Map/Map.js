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
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
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

export default Map;
