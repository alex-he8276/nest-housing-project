/* Taken from https://github.com/visgl/react-map-gl/blob/6.1-release/examples/draggable-markers/src/pin.js */
import * as React from 'react';

const ICON = `M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 
              0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z`;

const pinStyle = {
  fill: '#d00',
  stroke: 'none'
};

function Pin(props) {
  const { onClick, listing, size = 25 } = props;

  return (
    <svg onClick={() => { onClick(listing) }} className="cursor-pointer animate-bounce" height={size} viewBox="0 0 24 24" style={pinStyle}>
      <path d={ICON} />
    </svg>
  );
}

export default React.memo(Pin);