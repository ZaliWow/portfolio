import  { useState } from 'react';

export function Copy(params) {
      
    const [textoACopiar, setTextoACopiar] = useState('Texto a copiar');

  const copiarAlPortapapeles = () => {
    // Seleccionar el elemento de texto
    const elementoTexto = document.getElementById('textoACopiar');

    // Seleccionar el contenido del elemento de texto
    elementoTexto.select();
    elementoTexto.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
      // Copiar el contenido al portapapeles
      document.execCommand('copy');
      alert('Texto copiado al portapapeles: ' + elementoTexto.value);
    } catch (err) {
      console.error('No se pudo copiar al portapapeles:', err);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={textoACopiar}
        onChange={(e) => setTextoACopiar(e.target.value)}
        id="textoACopiar"
      />
      <button onClick={copiarAlPortapapeles}>Copiar al Portapapeles</button>
    </div>
  );
};