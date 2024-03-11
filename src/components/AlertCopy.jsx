import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MailIcon from '@mui/icons-material/Mail';
import Modal from 'react-bootstrap/Modal';
export function AlertCopy({openAlert, setOpenAlert}) {
    const [show, setShow] = useState(false);

  const handleClose = () => setOpenAlert(false);
  const handleShow = () => setOpenAlert(true);

  return (
    <> 


      <Modal show={openAlert} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title><MailIcon fontSize='large'></MailIcon></Modal.Title>
        </Modal.Header>
        <Modal.Body>Correo electronico copiado a portapapeles</Modal.Body>
        
      </Modal>
    </>
  );
}