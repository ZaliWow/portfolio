import GitHubIcon from '@mui/icons-material/GitHub';
export function BottonGithub(params) {
    const handleGithubClick = () => {
       
       
      window.open("https://github.com/ZaliWow", '_blank');
      }
    
      
        return (
          <div className="contact">
            <button  onClick={handleGithubClick}>
              <GitHubIcon fontSize='large'></GitHubIcon>
            </button>
          </div>
        );
    }