import "../styles/content.css"
import "../styles/callme.css"
import { BottonLinkedin } from "./BottonLinkedin";
import { BottonWhatsapp } from "./BottonWhatsapp";
import { BottonGithub } from "./BottonGithub";
import { BottonEmail } from "./BottonMail";
import React, { useEffect, useState } from 'react';


export function CallMe(params) {
 




const handleDownload =()=>{
  const pdfUrl = "/achives/CV WILLIAM DAVID MORALES PINEDA.pdf"
    const link = document.createElement('a')
    link.href= pdfUrl;
    link.setAttribute('download', 'CV WILLIAM DAVID MORALES PINEDA')
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
   
    console.log(pdfUrl)
}



    return(
        <div className="bodycallme">
            <h1>Contáctame</h1>
            
            <div className="callme">
                <div className="contact">
                <BottonGithub></BottonGithub>
                
                </div>
                <div className="contact">
                <BottonWhatsapp></BottonWhatsapp>
               
              
                </div>
                <div className="contact">
                <BottonEmail></BottonEmail>              
              
                </div>
                <div className="contact">
                <BottonLinkedin></BottonLinkedin>
               
                      
            
                    
                </div>
            </div>
            <div className="desc">
              
                <object className="svg-imagen" data="src\images\1.svg" type="image/svg+xml"></object>
               
                  <button className="descargarcv" onClick={handleDownload}>DESCARGAR CV</button>
                
                <object className="svg-imagen" data="src\images\2.svg" type="image/svg+xml"></object>
            </div>
           
    
        </div>
    )
}