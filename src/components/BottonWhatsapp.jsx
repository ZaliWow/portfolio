import WhatsAppIcon from '@mui/icons-material/WhatsApp';
export function BottonWhatsapp(params) {
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

    alert('Texto copiado al portapapeles: ' + textoACopiar);
  };
      
        return (
          <div className="contact">
            <button  onClick={copiarAlPortapapeles}>
              <WhatsAppIcon fontSize='large'></WhatsAppIcon>
            </button>
          </div>
        );
      
    
    
}