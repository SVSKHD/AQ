import { Modal, Button } from "react-bootstrap";
import { FaWindowClose } from "react-icons/fa";
const AquaProductDialog = (props) => {
  return (
    <>
      <Modal
        size={props.size}
        show={props.show}
        onHide={props.hide}
        centered
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body}</Modal.Body>
        <Modal.Footer>
          <Button variant="link" onClick={props.hide}>
            <FaWindowClose size={40} />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default AquaProductDialog;
