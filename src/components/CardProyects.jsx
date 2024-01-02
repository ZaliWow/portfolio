import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { LinkProyectButton } from './LinkProyectButton';
import { Flotante } from './Flotante';
import Alert from 'react-bootstrap/Alert';
import { Button } from '@mui/material';
import { Height, InfoOutlined } from '@mui/icons-material';
import { grey, yellow } from "@mui/material/colors";
import { Alerta } from './Alert';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export function CardProyects({herramientas, tittle, avatar, description, presentation, urlproyect, viewproyect}) {
  const [expanded, setExpanded] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleLinkProyect = ()=> {
    window.open(urlproyect, '_blank');
    
  }
  const handleViewProyect = ()=> {
    setShow(false)
    if(viewproyect===""){
      console.log(viewproyect)
setShow(true)

      
    }else{
    window.open(viewproyect, '_blank');
    console.log(viewproyect)
    setShow(false)
  }}


  return ( 
    <>
    <Card sx={{ minWidth: 300,  }}>
      <CardHeader
      avatar={
        <Avatar src={presentation}>
           </Avatar>
      }
        
        title={tittle}
        
      />
      <Alerta show={show} setShow={setShow}></Alerta>
      <CardMedia
        component="img"
        height="150"
        width="200"
        image={avatar}
        alt="Paella dish"
      />
     


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        
        <Button variant='danger' onClick={handleLinkProyect} sx={{ color:grey[600]}}><LinkProyectButton></LinkProyectButton></Button>
                   
        </IconButton>
        <IconButton aria-label="add to favorites">
        <Button variant='dark' onClick={handleViewProyect}>     <Flotante herramientas={herramientas} viewproyect={viewproyect}></Flotante>      </Button>    
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <InfoOutlined sx={{ color:grey[900]}} />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Descripción:</Typography>
          <Typography paragraph>
            {description}
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    
    </>
  );
}