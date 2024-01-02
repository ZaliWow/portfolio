import { Navbar } from './components/Navbar'
import { Button } from 'react-bootstrap'
import { Content } from './components/content'
import { Proyects } from './components/Proyects'
import { FrameWorks } from './components/FrameWorks'
import { CallMe } from './components/CallME'
import { AbautMe } from './components/AbautMe'
import {  Pie } from "./components/Pie";

function App() {


  return (
    <>
        <Navbar></Navbar>
        <AbautMe></AbautMe>
        <CallMe></CallMe>
         <Content> </Content>
      <FrameWorks></FrameWorks>
        <Proyects></Proyects>
      <Pie></Pie>

    </>
  )
}

export default App
