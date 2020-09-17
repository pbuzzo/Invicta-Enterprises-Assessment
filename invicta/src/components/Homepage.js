import React, { Component } from "react";
import "./Homepage.css";


class HomePage extends Component {
  render() {
    return (
      <div>
        <header class="showcase">
          <div class="content">
            <img
              src="http://www.pngall.com/wp-content/uploads/2/G-Letter-PNG-Free-Download.png"
              class="logo"
              alt="Traversy Media"
            />
            <div class="title">Welcome To Green Rhino Hybrid Building System</div>
            <div class="text">
            Welcome To The Superior  Wood Frame Alternative!<br></br>
            High Density Foam Structurally Reinforced With Concrete Like Coating
            </div>
          </div>
        </header>

        <section class="services">
          <div class="container grid-3 center">
            <div>
              <i class="fab fas fa-desktop fa-3x"></i>
              <h3>High Density Foam Reinforced With Concrete Like Coating</h3>
              <p>
                A unique hybrid of combining a number of proven elements from the SCIPS 
                & ICF systems to achieve a commercially desirable product that lends 
                itself to the green building industry. Green Rhino has a number of proprietary 
                ingredients that make it a one of a kind building product that is fire resistant, 
                hurricane resistant, mold resistant, and noise dampening. 
              </p>
            </div>
            <div>
              <i class="fas fa-gift fa-3x"></i>
              <h3>Why Our Clients Use Green Rhino</h3>
              <p>
                In addition to the high strength and thermal qualities of Green Rhino, our 
                panels can be computer designed and cut for the specific application desired 
                leading to extreme precision and speed. Assembly of the panels can be as 
                simple as stacking them to the desired height and then coating the exterior 
                with our proprietary structural reinforced concrete-like coating.
              </p>
            </div>
            <div>
              <i class="fas fa-globe fa-3x"></i>
              <h3>Quality Always Perseveres</h3>
              <p>
                GRBS is equivalent to 
                typical CMU construction in strength but at a fraction of the weight, cost, and with 
                incredible thermal r-values: R-50/10in wall.These panels are made from a proprietary 
                material unique to the Green Rhino Building System and provide superior insulation 
                along with an impenetrable barrier to keep out the elements. All panels are constructed on-ste.
              </p>
            </div>
          </div>
        </section>

        <section class="about bg-light">
          <div class="containertwo">
            <div class="grid-2">
              <div class="center">
                <i class="fas fa-laptop-code fa-10x"></i>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
