import MailIcon from '@mui/icons-material/Mail';
export function BottonEmail(params) {
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

    alert('Texto copiado al portapapeles: ' + textoACopiar);
  };

    
      
        return (
          <div className="contact">
            <button  onClick={copiarAlPortapapeles}>
           
              <MailIcon fontSize='large'></MailIcon>
            </button>
      
          </div>
        );
      
    
    
}