import { useState } from "react";
import AquaProductDialog from "../dialogs/productDialog";
import { FaRegShareSquare, FaShare} from "react-icons/fa";
import {AiFillHeart , AiOutlineHeart} from "react-icons/ai"
import { Carousel, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const AquaProductCard = (props) => {
  const [dialog, setDialog] = useState(false);
  const [fav , setFav] = useState(false)
  return (
    <>
      <Card style={{ width: "18rem" }}>
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
          <Button variant="link">
            <FaShare size={25} />
          </Button>
          <Button onClick={() => setDialog(true)} variant="link">
            <FaRegShareSquare size={25} />
          </Button>
          <Button variant="link" className="text-danger" onClick={()=>setFav(!fav)}> 
            {fav?<AiFillHeart size={25}/> :<AiOutlineHeart size={25}/>}
          </Button>
        </Card.Body>
      </Card>
      <AquaProductDialog size="xl" show={dialog} hide={() => setDialog(false)}>
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12">
            <h4 className="text-dark">Product Carousel</h4>
          </div>
          <div className="col-md-6 col-lg-6 col-xs-12 col-sm-12"></div>
        </div>
      </AquaProductDialog>
    </>
  );
};
export default AquaProductCard;
