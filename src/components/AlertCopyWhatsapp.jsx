import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import MailIcon from '@mui/icons-material/Mail';
import Modal from 'react-bootstrap/Modal';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export function AlertCopyWhatsapp({openAlert, setOpenAlert}) {
    

  const handleClose = () => setOpenAlert(false);
  const handleShow = () => setOpenAlert(true);

  return (
    <> 


      <Modal show={openAlert} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title> <WhatsAppIcon fontSize='large'></WhatsAppIcon></Modal.Title>
        </Modal.Header>
        <Modal.Body>Número telefonico copiado a portapapeles</Modal.Body>
        
      </Modal>
    </>
  );
}