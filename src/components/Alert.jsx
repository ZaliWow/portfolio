import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import CancelIcon from '@mui/icons-material/Cancel';

 export function Alerta ({show, setShow}) {
 

  return (
    <div className='alert'>
      <Alert show={show} variant="danger" >
        <Alert.Heading>Oops!</Alert.Heading>
        <p>
        Aplicación no lanzada.
        </p>
        <hr />
        <div className="d-flex justify-content-center">
          <Button onClick={() => setShow(false)} variant="outline-danger">
            <CancelIcon></CancelIcon>
          </Button>
        </div>
      </Alert>

     
    </div>
  );
}