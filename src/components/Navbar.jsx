import "../styles/navbar.css"
import "../styles/Proyects.css"
import { BottonLinkedin } from "./BottonLinkedin";
import { BottonWhatsapp } from "./BottonWhatsapp";
import { BottonGithub } from "./BottonGithub";
import { BottonEmail } from "./BottonMail";



export function Navbar({mode}) { 
    return(


<div className="nav">
<div className={mode ?"nav-light-mode": "nav-dark-mode" }>
    <div className="up-site">
<div className="me">
    <h2 >
    Hola, soy David.
    </h2>  
<h5>Ingeniero de Sistemas, enfocado en el desarrollo de soluciones y aplicaciones Frontend.
</h5>


</div>

<img src="/images/fotoperfil.jpg" alt="mi foto de perfil" />
</div>       

<div className="down-site">

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




</div>     
    )
}