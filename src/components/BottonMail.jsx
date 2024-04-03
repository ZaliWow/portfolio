import MailIcon from '@mui/icons-material/Mail';
import { AlertCopy } from './AlertCopy';
import { useState } from 'react';
import { Button } from '@mui/material';

export function BottonEmail({sizeicon}) {


  const [openAlert, setOpenAlert] = useState(false)
  const textoACopiar = 'morales.william@correounivalle.edu.co';

  const copiarAlPortapapeles = () => {
    // Crear un elemento de texto temporal
    const elementoTemporal = document.createElement('textarea');
    elementoTemporal.value = textoACopiar;

    // Agregar el elemento temporal al DOM
    document.body.appendChild(elementoTemporal);

    // Seleccionar y copiar el contenido al portapapeles
    elementoTemporal.select();
    document.execCommand('copy');

    // Eliminar el elemento temporal del DOM
    document.body.removeChild(elementoTemporal);

    setOpenAlert(true)
  };

    
      
        return (
          <div className="contact">
            <Button  onClick={copiarAlPortapapeles} variant="dark">
           
              <MailIcon sx={{fontSize :sizeicon}}></MailIcon>
            </Button>
      <AlertCopy openAlert={openAlert} setOpenAlert={setOpenAlert}></AlertCopy>
           </div> 
        );
      
    
    
}