import GitHubIcon from '@mui/icons-material/GitHub';
import { GitHub } from "@mui/icons-material";
import { Button } from '@mui/material';
export function BottonGithub({sizeicon}) {
    const handleGithubClick = () => {
       
       
      window.open("https://github.com/ZaliWow", '_blank');
      }
    
      
        return (
          <div className="contact">
            <Button  onClick={handleGithubClick} variant='dark'>
              <GitHub sx={{fontSize :sizeicon}}></GitHub>
            </Button>
          </div>
        );
    }