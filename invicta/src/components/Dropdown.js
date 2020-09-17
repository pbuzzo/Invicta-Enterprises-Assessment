import React from 'react';
import "./Dropdown.css";

const Drops = (props) => {
  return (
    <div class="dropdown">
        <a class="parent" href="/">About Us</a>
        <div class="dropdown-content">
            <a class="child" href="/">Meet Our Builders</a><hr></hr>
            <a class="child" href="/">Photos and Video</a><hr></hr>
            <a class="child" href="/">Conact Us</a>
        </div>

    </div>
  );
}

export default Drops;