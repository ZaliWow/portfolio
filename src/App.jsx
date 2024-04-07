import { Navbar } from './components/Navbar'
import { Button } from 'react-bootstrap'
import { Content } from './components/Content'
import { Proyects } from './components/Proyects'
import { FrameWorks } from './components/FrameWorks'
import { CallMe } from './components/CallMe'
import { AbautMe } from './components/AbautMe'
import {  Pie } from "./components/Pie";
import { useState } from 'react'
import { ButtonDarkLightMode } from './components/ButtonDarkLightMode'




function App() {
  const [mode, setMode] = useState(true)
  


const handleMode = () =>{
setMode(!mode)



}


  return (
    <>
        <Navbar mode={mode}></Navbar>
        <ButtonDarkLightMode 
        mode={mode}
        handleMode={handleMode}
        ></ButtonDarkLightMode>
        <AbautMe mode={mode}></AbautMe>
        <CallMe mode={mode}></CallMe>
         <Content mode={mode}> </Content>
      <FrameWorks mode={mode}></FrameWorks>
        <Proyects 
        mode={mode}
        ></Proyects>
      <Pie mode={mode}></Pie>
     
    </>
  )
}

export default App
