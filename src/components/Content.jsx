import "../styles/content.css"
import JavascriptIcon from '@mui/icons-material/Javascript';
import { Copy } from "./Copy";

export function Content() {
    return(
        <div className="content">
            <h1 className="tracking-in-expand">Tecnologías</h1>


<div className="tecnologys">
<div className="tecno">
    
    <object class="svg-tecno" type="image/svg+xml" data="images/HTML.svg" alt="" />
    <p>HTML5</p>
</div>
<div className="tecno">
    <object className="svg-tecno" type="image/svg+xml" data="images/css.svg" alt="" />
<p>CSS3</p>
</div>
<div className="tecno">
    <object className="svg-tecno" type="image/svg+xml" data="images/JS.svg" alt="" />
<p>JavaScript</p>
</div>

</div>
<div className="tecnologys">


<div className="tecno">
    <object className="svg-tecno" type="image/svg+xml" data="images/postgress.svg" alt="" />
<p>PostgreSQL</p>

</div>
<div className="tecno">
    <object className="svg-tecno" type="image/svg+xml" data="images\figma.svg" alt="" />
<p>Figma</p>

</div>


</div>


        </div>
    )
}