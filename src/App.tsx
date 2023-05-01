import React, { useEffect, useState, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
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
import BlankPage from './pages/blankpage';
import Beginning from './pages/beginning';
import Nav from './pages/nav';
import ExploreYourself from './pages/exploreyourself';
import GaiaLandNext from './pages/gaialandnext';
import GraduallyDarken from './pages/graduallydarken';

function App() {

  const [name, setName] = useState("")

  const soundPlayer = useRef<HTMLAudioElement>(null);
  const secondSoundPlayer = useRef<HTMLAudioElement>(null);
  const sfxPlayer = useRef<HTMLAudioElement>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const changeSound = (src: string) => {
    if (soundPlayer.current) {
      soundPlayer.current.src = src;
      src && soundPlayer.current.load();
      soundPlayer.current.play();
    }
  }
  const changeSecondSound = (src: string) => {
    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.src = src;
      src && secondSoundPlayer.current.load();
      secondSoundPlayer.current.play();
    }
  }
  const changeSFX = (src: string) => {
    if (sfxPlayer.current) {
      sfxPlayer.current.src = src;
      src && sfxPlayer.current.load();
      sfxPlayer.current.play();
    }
  }

  const playBtnClickSFX = () => {
    if (sfxPlayer.current) {
      sfxPlayer.current.src = "/sounds/sfx-btn-click.mp3";
      sfxPlayer.current.load();
      sfxPlayer.current.play();
    }
  }

  const playAllPlayer = () => {
    if (soundPlayer.current) {
      soundPlayer.current.play();
    }
    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.play();
    }
    if (sfxPlayer.current) {
      sfxPlayer.current.play();
    }
  }

  useEffect(() => {
    if (soundPlayer.current) {
      soundPlayer.current.volume = 0.8
    }

    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.src = ""
    }

    if (sfxPlayer.current) {
      sfxPlayer.current.volume = 0.9
      sfxPlayer.current.src = ""
    }
  }, [])

  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Beginning />} />
        <Route path='/warning' element={<Warning soundPlayer={soundPlayer} secondSoundPlayer={secondSoundPlayer} />} />
        <Route path='/welcome' element={<Welcome />} />
        <Route path='/policy' element={<Policy />} />
        <Route path='/name' element={<Name onNameChange={onNameChange} value={name} changeSFX={() => changeSFX('/sounds/sfx-story-intro.mp3')}/>} />
        <Route path='/click-to-continue' element={
          <Nav path='/intro'>
            <div className="bg-white">
              <Page bg='6.jpg' onBlack={false} fadeInScene={true}></Page>
            </div>
          </Nav>
        } />
        <Route path='/intro' element={
          <Nav path='/welcomename'>
            <div className="bg-white">
              <Intro soundPlayer={soundPlayer} secondSoundPlayer={secondSoundPlayer} />
            </div>
          </Nav>
        } />
        <Route path='/welcomename' element={<WelcomeName name={name} playBtnClickSFX={playBtnClickSFX} />} />
        <Route path='/afterwn' element={
          <Nav path='/howyoufeel'>
            <AfterWN />
          </Nav>
        } />
        <Route path='/howyoufeel' element={<Howyoufeel changeSecondSound={() => changeSecondSound('/sounds/evening-window.mp3')}/>} />
        <Route path='/weknow' element={
          <Nav path='/myself' changeSecondSound={() => changeSecondSound('/sounds/night-window.mp3')}>
            <div className="bg-white">
              <Page bg='evening-window.gif' onBlack={false}>
                <p className='mt-40 text-lg fade-in'>อย่างนี้นี่เอง</p>
              </Page>
            </div>
          </Nav>
        } />
        <Route path='/myself' element={<Myself playBtnClickSFX={playBtnClickSFX} />} />
        <Route path='/yesmyself' element={
          <Nav path='/tellaboutyourself'>
            <Page bg='night-window.gif' onBlack={false}>
              <p className='mt-40 text-lg/loose'>นั่นสิ ใคร ๆ ก็ต้องเคยรู้สึกแบบนั้นบ้าง<br />อยู่แล้วเนอะ</p>
            </Page>
          </Nav>
        } />
        <Route path='/nomyself' element={
          <Nav path='/tellaboutyourself'>
            <Page bg='night-window.gif' onBlack={false}>
              <p className='mt-40 text-base/loose'>ดีจังเลย การได้เข้าใจตัวเองเป็นเรื่องที่ดี <br /> ที่สุดอยู่แล้วเนอะ</p>
            </Page>
          </Nav>
        } />
        <Route path='/tellaboutyourself' element={<TellAboutYourself changeSecondSound={() => changeSecondSound('')}/>} />
        <Route path='/knowyourself' element={
          <Nav path='/exploreyourself'>
            <div className='bg-white'>
              <BlankPage onBlack={false} fadeInScene={true}>
                <p className='text-lg'>คุณรู้จักตัวเองในแบบนี้นี่เอง</p>
              </BlankPage>
            </div>
          </Nav>
        } />
        <Route path='/exploreyourself' element={<ExploreYourself />} />
        <Route path='/darkness' element={
          <Nav path='/awaken' changeSound={() => changeSound('/sounds/galaxy.mp3')} changeSecondSound={() =>changeSecondSound('/sounds/sfx-twinkling-stars.mp3')}>
            <BlankPage></BlankPage>
          </Nav>
        } />
        <Route path='/awaken' element={
          <Nav path='/on-gaia'>
            <BlankPage bg='plain-space.gif' fadeInScene={true}>
              <div className='[&>p]:text-lg/loose'>
                <p className='fade-in ani-delay-3s'>คุณตื่นขึ้น ณ จักรวาลแห่งหนึ่ง</p><br />
                <p className='fade-in ani-delay-5s'>...</p><br />
                <p className='fade-in ani-delay-8s'>ด้วยพลังงานบางอย่างคุณรับรู้ได้ว่าที่แห่งนี้<br />ถูกขนานนามว่า <b>Via Lactea</b></p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/on-gaia' element={
          <Nav path='/gaia-land'>
            <BlankPage bg='plain-space.gif'>
              <img className='fade-in pointer-events-none' src='/images/moon.png' alt='gaia-star'/>
              <div className='[&>p]:text-lg/loose overlay ani-delay-2s fade-in'>
                <p className='text-black'>และดาวเคราะห์ที่คุณกำลังยืนอยู่<br />มีชื่อว่า<b>ดาว Gaia</b></p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gaia-land' element={
          <Nav path='/gaia-land-next'>
            <BlankPage bg='plain-space.gif'>
              <img className='zoom-in-250 pointer-events-none' src='/images/moon.png' alt='gaia-star'/>
              <div className='[&>p]:text-lg/loose overlay'>
                <p className='text-black ani-delay-2s fade-in'>พื้นดินที่แตกระแหงทำให้คุณคาดเดาได้<br />ว่าที่นี่คงไม่มีฝนตกมานานมากแล้ว </p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gaia-land-next' element={
          <GaiaLandNext changeSecondSound={() => changeSecondSound('')} />
        } />
        <Route path='/your-star' element={
          <Nav path='/dot-dot-dot'>
            <BlankPage bg='plain-space.gif'>
              <p className='fade-in text-lg'>แล้วดาวของคุณอยู่ที่ไหนล่ะ? <br/>เราไปตามหามันพร้อม ๆ กันเถอะ</p>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gradually-darken' element={
          <Nav path='/'>
            <GraduallyDarken />
          </Nav>
        } />
        <Route path='*' element={<Beginning />} />
      </Routes>
      <audio ref={soundPlayer} loop autoPlay></audio>
      <audio ref={secondSoundPlayer} loop autoPlay></audio>
      <audio ref={sfxPlayer}></audio>
    </div>

  );
}

export default App;
