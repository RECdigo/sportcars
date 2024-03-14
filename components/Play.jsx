import React from 'react';
import './play.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Play({ playPause, togglePlayPause }) {

  const handleClick = (event) => {
    event.preventDefault(); // Prevent the default action
    togglePlayPause();
  };

  return (
    <div>
      <a href="#" className={`pause ${playPause ? undefined : 'active'}`} onClick={handleClick}>
        <i className="bi bi-pause-circle"></i>
      </a>
      <a href="#" className={`play ${playPause ? 'active' : undefined}`} onClick={handleClick}>
        <i className="bi bi-play-circle"></i>
      </a>
    </div>
  );
}

export default Play;
