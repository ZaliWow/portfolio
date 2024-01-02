import { Button } from '@mui/material';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
 
export function Flotante({herramientas, viewproyect}) {



  const renderTooltip = (props) => (
    
    <Tooltip id="button-tooltip" {...props}>
    Ver proyecto: {herramientas}
    </Tooltip>
  );
 
  return (
    <OverlayTrigger
      placement="right"
      delay={{ show: 250, hide: 400 }}
      overlay={renderTooltip}
    >
    <VisibilityIcon></VisibilityIcon>
    </OverlayTrigger>
  );
}