import { Navbar } from './components/Navbar'
import { Button } from 'react-bootstrap'
import { Content } from './components/Content'
import { Proyects } from './components/Proyects'
import { FrameWorks } from './components/FrameWorks'
import { CallMe } from './components/CallMe'
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
