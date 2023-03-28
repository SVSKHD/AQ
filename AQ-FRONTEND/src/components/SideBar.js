import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const AquaSideBar = (props) => {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default AquaSideBar;
