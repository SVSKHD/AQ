import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";

const AquaSideBar = (props) => {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{props.title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{props.children}</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default AquaSideBar;
