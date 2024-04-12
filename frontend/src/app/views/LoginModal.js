import Modal from 'react-bootstrap/Modal';

function LoginModal() {
    return(
      <div classname='modal show'>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Login</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Text</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
      </div>  
    );
}

export default LoginModal;