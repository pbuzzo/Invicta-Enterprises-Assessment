import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter class="footer" color="blue">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h3>We enjoy working closely with builders, designers, 
            architects, and contractors. 
            We look forward to hearing from you.</h3>
            <p>
            <br></br>
            Call GR Building Systems LLC at: 480.438.7435
            <br></br>
            Email us at: grbuildingsystems@gmail.com
            </p>
          </MDBCol>
          
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;