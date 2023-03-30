import Card from 'react-bootstrap/Card';


const AquaFooter = () => {
    let Year = new Date().getFullYear()
  return (
    <>
    <Card body className="aqua-footer fixed-bottom">
      This is some text within a card body. hello test.
      <Card className="bg-primary">
        <Card.Body className='aqua-footer-pad'>
       
          <h6 className="text-white text-center">Aquakart © {Year}</h6>
        </Card.Body>
      </Card>
    </Card>
   
  </>
  );
};

export default AquaFooter;
