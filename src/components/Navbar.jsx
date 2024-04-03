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
                    
                    <BottonGithub sizeicon={20}></BottonGithub>
                
               
                </div>
                <div className="navsocialmedia">
                    
                
                    <BottonWhatsapp sizeicon={20} ></BottonWhatsapp>
                   
               
             
                
              
                </div>
                <div className="navsocialmedia">
                
                    <BottonEmail sizeicon={20}></BottonEmail>
       
                
                     
              
                </div>
                <div className="navsocialmedia">
             
                
                <BottonLinkedin sizeicon={20}></BottonLinkedin>
                
                      
            
                    
                </div>
            



</div>
</div>






</div>     
    )
}