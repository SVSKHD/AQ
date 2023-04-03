import { useState } from "react";
import AquaProductDialog from "../dialogs/productDialog";
import { FaRegShareSquare, FaShare } from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel';
import Card from "react-bootstrap/Card";




const AquaProductCard = (props) => {
  const [dialog, setDialog] = useState(false);
  const setDelayDialog = () => {
    setInterval(setDialog(true), 1000);
  };
  return (
    <>
      <Card style={{ width: "18rem" }} onMouseEnter={() => setDelayDialog()}>
        <Card variant="top">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Card>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          {/* <Button variant="link">
            <FaShare size={25} />
          </Button>
          <Button onClick={() => setDelayDialog} variant="link">
            <FaRegShareSquare size={25} />
          </Button> */}
        </Card.Body>
      </Card>
      <AquaProductDialog size="xl" show={dialog} hide={() => setDialog(false)}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
        </div>
      </AquaProductDialog>
    </>
  );
};
export default AquaProductCard;
