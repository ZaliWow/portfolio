import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/callme.css"

export function BottonLinkedin(params) {
   
        const handleLinkedin = () => {
       
            window.open("https://www.linkedin.com/in/william-david-morales-pineda-551589249/", '_blank');
          }
        
          
            return (
              <div className="contact">
                <button  onClick={handleLinkedin}>
                  <LinkedInIcon fontSize='large'></LinkedInIcon>
                </button>
              </div>
            );
    
    
}