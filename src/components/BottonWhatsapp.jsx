import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AlertCopyWhatsapp } from './AlertCopyWhatsapp';
import { WhatsApp } from "@mui/icons-material";
import { Button } from '@mui/material';

import { useState } from 'react';
export function BottonWhatsapp({sizeicon}) {
  const [openAlert, setOpenAlert] = useState(false)
  const textoACopiar = '+57 3108370792';
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
            <Button onClick={copiarAlPortapapeles} variant="dark">
              <WhatsApp sx={{fontSize :sizeicon}} ></WhatsApp>
            </Button>
<AlertCopyWhatsapp openAlert={openAlert} setOpenAlert={setOpenAlert}></AlertCopyWhatsapp>
          </div>
        );
      
    
    
}