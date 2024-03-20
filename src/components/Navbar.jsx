import "../styles/navbar.css"
import { BottonLinkedin } from "./BottonLinkedin";
import { BottonWhatsapp } from "./BottonWhatsapp";
import { BottonGithub } from "./BottonGithub";
import { BottonEmail } from "./BottonMail";
import { grey } from "@mui/material/colors";
import { Button } from "@mui/material";
import { LunchDining } from "@mui/icons-material";
import { WhatsApp } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";


export function Navbar({}) { 
    return(
       
<div>
<div className="nav">
<div className="me">
    <h2 >
    Hola, soy David.
    </h2>  
<h5>Ingeniero de Sistemas, enfocado en el desarrollo de soluciones y aplicaciones Frontend.
</h5>
</div>
<img src="/images/fotoperfil.jpg" alt="mi foto de perfil" />
         



<div className="socialmedia">


                <div className="navsocialmedia">
                    
                    <Button variant="dark">
                    <GitHub sx={{fontSize :20}}></GitHub>
                </Button>
                
               
                </div>
                <div className="navsocialmedia">
                    
                <Button variant="dark">
                    <WhatsApp sx={{fontSize :20}}></WhatsApp>
                    </Button>
               
             
                
              
                </div>
                <div className="navsocialmedia">
                <Button variant="dark">
                    <Email sx={{fontSize :20}}></Email>
                </Button>
                
                     
              
                </div>
                <div className="navsocialmedia">
             
                
                <Button variant="dark">
                <LinkedIn sx={{fontSize :20}}></LinkedIn>
                </Button>
                      
            
                    
                </div>
            



</div>
</div>






</div>     
    )
}