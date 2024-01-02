import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AttachmentIcon from '@mui/icons-material/Attachment';

export function LinkProyectButton(params) {
    
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
        Visitar Repositorio
        </Tooltip>
      );
    
      return (
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
<AttachmentIcon></AttachmentIcon>
        </OverlayTrigger>
      );
    }