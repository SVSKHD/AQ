import AquaLayout from "../../Layout/Layout"
import Card from 'react-bootstrap/Card';

const AquaShopPageComponent = () =>{
return(
    <>
    <AquaLayout>
    <div className="container-fluid row">
      <div className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
      <Card>
      <Card.Body>filters</Card.Body>
    </Card>
      </div>
      <div className="col-lg-4 col-md-4 col-xs-12 col-sm-12"></div>
    </div>
    </AquaLayout>
    </>
)
}
export default AquaShopPageComponent