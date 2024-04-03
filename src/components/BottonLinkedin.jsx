import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/callme.css"
import { Button } from '@mui/material';
export function BottonLinkedin({sizeicon}) {
   
        const handleLinkedin = () => {
       
            window.open("https://www.linkedin.com/in/william-david-morales-pineda-551589249/", '_blank');
          }
        
          
            return (
              <div className="contact" >
                <Button onClick={handleLinkedin}variant="dark">
                  <LinkedInIcon sx={{fontSize :sizeicon}}></LinkedInIcon>
                </Button>
              </div>
            );
    
    
}