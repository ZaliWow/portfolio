import "../styles/content.css"
import "../styles/callme.css"
import { BottonLinkedin } from "./BottonLinkedin";
import { BottonWhatsapp } from "./BottonWhatsapp";
import { BottonGithub } from "./BottonGithub";
import { BottonEmail } from "./BottonMail";


import { Email } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { Button } from "@mui/material";
import "../styles/animations.css"
import React, { useEffect, useState } from 'react';


export function CallMe(params) {
 




const handleDownload =()=>{
    
  const pdfUrl = "/achives/CV - William David Morales Pineda.pdf"
    const link = document.createElement('a')
    link.href= pdfUrl;
    link.setAttribute('download', 'CV - William David Morales Pineda')
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
   
    console.log(pdfUrl)
}



    return(
        <div className="bodycallme">
            <div className="tracking-in-expand"><h1 >Contáctame</h1></div>
            
          
            <div className="callme">
                <div className="contact">
                    
                <BottonGithub sizeicon={45}></BottonGithub>
               
                </div>
                <div className="contact">
                    
                
             
                <BottonWhatsapp sizeicon={45}></BottonWhatsapp>
              
                </div>
                <div className="contact">
               
                <BottonEmail sizeicon={45}></BottonEmail>  
                     
              
                </div>
                <div className="contact">
             
                <BottonLinkedin sizeicon={45}></BottonLinkedin>
             
                      
            
                    
                </div>
            </div>
            <div className="desc">
           
              <div className="img-flicker-in-glow">
                <object className="svg-imagen" data="images\1.svg" type="image/svg+xml"></object>
               
                </div>
                  <button className="descargarcv" onClick={handleDownload}>DESCARGAR CV</button>
               
                <div className="img-flicker-in-glow">
                <object className="svg-imagen" data="images\2.svg" type="image/svg+xml"></object>
              
                </div>
            </div>
           
    
        </div>
    )
}