import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import './volume.css';

function Volume(props) {
  return(
    <button className="volume"
      onClick={props.handleClick}
    >
      <VolumeIcon
        color="white"
        size={25}
      />
      <div className="volume-range">
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          onChange={props.handleVolumeChange}
        />  
      </div>
    </button>
  )
}

export default Volume;