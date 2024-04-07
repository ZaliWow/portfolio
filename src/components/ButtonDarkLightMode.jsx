import { Button } from "@mui/material"
import { WbSunny } from "@mui/icons-material"
import { ModeNight } from "@mui/icons-material"

export function ButtonDarkLightMode({ mode,handleMode}) {
    
    return(
        <div className="button-dark-light-mode">
            <Button variant="outlined-dark" onClick={handleMode}>
                {mode ?<ModeNight sx={{color:'white'}}></ModeNight> : <WbSunny></WbSunny>  }
            </Button>

       
        </div>
    )
    
}