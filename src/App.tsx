import React, { useEffect } from 'react';
import './App.css';
import { useState, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Page from './pages/page';
import Warning from './pages/warning';
import Welcome from './pages/welcome';
import Policy from './pages/policy';
import Name from './pages/name';
import Intro from './pages/intro';
import WelcomeName from './pages/welcomename';
import AfterWN from './pages/afterwn';
import Howyoufeel from './pages/howyoufeel';
import Myself from './pages/myself';
import TellAboutYourself from './pages/tellaboutyourself';
import Curtain from './pages/curtain';
import BlankPage from './pages/blankpage';
import Beginning from './pages/beginning';
import Nav from './pages/nav';

function App() {

  const [name, setName] = useState("")

  const navigate = useNavigate()

  const soundPlayer = useRef<HTMLAudioElement>(null);
  const sfxPlayer = useRef<HTMLAudioElement>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const nextPage = (path: string) => {
    navigate(path);
  }

  const onGoing = (ans: boolean) => {
    if (ans) {
      navigate('/yesmyself')
    } else {
      navigate('/nomyself')
    }
  }

  useEffect(() => {
    if (!!soundPlayer.current) {
      soundPlayer.current.volume = 0.3
    }
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Beginning />}/>
        <Route path='/warning' element={<Warning soundPlayer={soundPlayer}/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/name' element={<Name onNameChange={onNameChange} value={name}/>}/>
        <Route path='/click-to-continue' element={
            <Nav path='/intro'>
              <Page bg='6.jpg' fadeInScene={true}></Page>
            </Nav>
        }/>
        <Route path='/intro' element={
            <Nav path='/welcomename'>
              <Intro soundPlayer={soundPlayer}/>
            </Nav>
        }/>
        <Route path='/welcomename' element={<WelcomeName name={name}/>}/>
        <Route path='/afterwn' element={
          <Nav path='/howyoufeel'>
            <AfterWN/>
          </Nav>
        }/>
        <Route path='/howyoufeel' element={<Howyoufeel/>}/>
        <Route path='/weknow' element={
          <Nav path='/myself'>
            <Page bg='evening-window.gif' fadeInScene={true}>
              <p className='mt-40'>อย่างนี้นี่เอง</p>
            </Page>
          </Nav>
        }/>
        <Route path='/myself' element={<Myself onGoing={onGoing}/>}/>
        <Route path='/yesmyself' element={
          <Nav path='/tellaboutyourself'>
            <Page bg='night-window.gif'>
              <p className='mt-40'>นั่นสิ ใคร ๆ ก็ต้องเคย<br/>รู้สึกแบบนั้นบ้างอยู่แล้วเนอะ</p>
            </Page>
          </Nav>
        }/>
        <Route path='/nomyself' element={
          <Nav path='/tellaboutyourself'>
            <Page bg='night-window.gif'>
              <p className='mt-40'>ดีจังเลย การได้เข้าใจตัวเองเป็นเรื่องที่ดี <br /> ที่สุดอยู่แล้วเนอะ</p>
            </Page>
          </Nav>
        }/>
        <Route path='/tellaboutyourself' element={<TellAboutYourself/>}/>
        <Route path='/knowyourself' element={
          <Nav path='/exploreyourself'>
            <BlankPage>
              <p className=''>คุณรู้จักตัวเองในแบบนี้นี่เอง</p>
            </BlankPage>
          </Nav>
        }/>
        <Route path='/exploreyourself' element={
          <Curtain>
            <BlankPage>
              <p className=''>งั้นเราลองมาสำรวจตัวเองกันดีกว่า… <br /> แต่มันต้องพึ่งจินตนาการนิดหน่อยนะ</p>
            </BlankPage>
          </Curtain>
        }/>
        <Route path='*' element={<Beginning />}/>
      </Routes>
      <audio ref={soundPlayer} src="/sounds/intro.mp3" loop autoPlay></audio>
      <audio ref={sfxPlayer} ></audio>
    </div>

  );
}

export default App;
