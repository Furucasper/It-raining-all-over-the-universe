import React, { useEffect, useState, useRef, RefObject } from 'react';
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
import ToTheMoon from './pages/tothemoon';
import SixteenChoices from './pages/sixteenchoices';

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
      soundPlayer.current.volume = 0.8
      soundPlayer.current.play();
    }
  }
  const changeSecondSound = (src: string) => {
    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.src = src;
      src && secondSoundPlayer.current.load();
      secondSoundPlayer.current.volume = 1
      secondSoundPlayer.current.play();
    }
  }
  const changeSFX = (src: string) => {
    if (sfxPlayer.current) {
      sfxPlayer.current.src = src;
      src && sfxPlayer.current.load();
      sfxPlayer.current.volume = 0.9
      sfxPlayer.current.play();
    }
  }

  const playBtnClickSFX = () => {
    if (sfxPlayer.current) {
      sfxPlayer.current.src = "/sounds/sfx-btn-click.mp3";
      sfxPlayer.current.volume = 0.9
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

  const volumeFadeOut = (player: RefObject<HTMLAudioElement>, time: number) => {
    if (player.current) {
      const volume = player.current.volume;
      const fadeOut = setInterval(() => {
        if (player.current && player.current.volume > 0.005) {
          player.current.volume -= 0.005;
        } else {
          clearInterval(fadeOut);
        }
      }, (time / (volume / 0.005)));
    }
  }

  const soundPlayerFadeOut = (time: number) => {
    volumeFadeOut(soundPlayer, time)
  }
  const secondSoundPlayerFadeOut = (time: number) => {
    volumeFadeOut(secondSoundPlayer, time)
  }
  const sfxPlayerFadeOut = (time: number) => {
    volumeFadeOut(sfxPlayer, time)
  }

  const allPlayerFadeOut = (time: number) => {
    console.log('allPlayerFadeOut', time)
    volumeFadeOut(soundPlayer, time)
    volumeFadeOut(secondSoundPlayer, time)
    volumeFadeOut(sfxPlayer, time)
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
        <Route path='/name' element={<Name onNameChange={onNameChange} value={name} changeSFX={() => changeSFX('/sounds/sfx-story-intro.mp3')} />} />
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
        <Route path='/howyoufeel' element={<Howyoufeel changeSecondSound={() => changeSecondSound('/sounds/evening-window.mp3')} />} />
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
              <p className='mt-40 text-lg/loose'>ดีจังเลย การได้เข้าใจตัวเองเป็นเรื่องที่ดี <br /> ที่สุดอยู่แล้วเนอะ</p>
            </Page>
          </Nav>
        } />
        <Route path='/tellaboutyourself' element={<TellAboutYourself changeSecondSound={() => changeSecondSound('')} />} />
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
        <Route path='/imagine' element={
          <Nav path='/awaken' changeSound={() => changeSound('/sounds/galaxy.mp3')} changeSFX={() => changeSFX('/sounds/sfx-twinkling-stars.mp3')}>
            <BlankPage></BlankPage>
          </Nav>
        } />
        <Route path='/awaken' element={
          <Nav path='/on-gaia' changeSecondSound={() => changeSecondSound('/sounds/star-ambience.mp3')}>
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
              <img className='fade-in pointer-events-none' src='/images/moon.png' alt='gaia-star' />
              <div className='[&>p]:text-lg/loose overlay ani-delay-2s fade-in'>
                <p className='text-black'>และดาวเคราะห์ที่คุณกำลังยืนอยู่<br />มีชื่อว่า<b>ดาว Gaia</b></p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gaia-land' element={
          <Nav path='/gaia-land-next'>
            <BlankPage bg='plain-space.gif'>
              <img className='zoom-in-250 pointer-events-none' src='/images/moon.png' alt='gaia-star' />
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
          <Nav path='/gradually-darken'>
            <BlankPage bg='plain-space.gif'>
              <p className='fade-in text-lg'>แล้วดาวของคุณอยู่ที่ไหนล่ะ? <br />เราไปตามหามันพร้อม ๆ กันเถอะ</p>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gradually-darken' element={
          <GraduallyDarken allPlayerFadeOut={allPlayerFadeOut} />
        } />
        <Route path='/darkness' element={
          <Nav path='/time-space' changeSound={() => changeSound('/sounds/galaxy.mp3')} changeSecondSound={() => changeSecondSound('star-ambience.mp3')} changeSFX={() => changeSFX('/sounds/sfx-twinkling-stars.mp3')}>
            <BlankPage></BlankPage>
          </Nav>
        } />
        <Route path='/time-space' element={
          <Nav path='/to-the-moon'>
            <BlankPage>
              <p className='fade-in text-xl'>ในช่องว่างของกาลเวลา</p>
            </BlankPage>
          </Nav>
        } />
        <Route path='/to-the-moon' element={<ToTheMoon />} />
        <Route path='/moon' element={
          <Nav path='/is-this-your-star'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/loose fade-in overlay top-20'>
                <p>คุณเดินทางมาถึงดวงจันทร์ดวงหนึ่ง</p>
              </div>
              <img className='pointer-events-none scale-90' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/is-this-your-star' element={
          <Nav path='/find-the-answer'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/loose overlay top-14'>
                <p className='fade-in'>ดาวดวงนี้จะใช่ดาวของคุณ<br />หรือเปล่านะ?</p>
              </div>
              <img className='pointer-events-none scale-90' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/find-the-answer' element={
          <Nav path='/define-yourself'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-10 ani-delay-500ms fade-in'>
                <p className=''>มาค้นหาคำตอบ<br />
                  ด้วยการ<b>สำรวจตนเองและอธิบาย<br />
                    ความเป็นตัวตน</b>ให้ได้มากที่สุดกันเถอะ</p>
              </div>
              <img className='pointer-events-none scale-90' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/define-yourself' element={
          <SixteenChoices path='/others-define-you' playBtnClickSFX={playBtnClickSFX} key={1}>
            <p className='text-lg fade-in ani-duration-500ms'>
              คุณ<b>นิยามตัวตนของคุณ</b>ด้วยคำไหนบ้าง<br />
              สามารถตอบมากกว่า 1 ข้อได้นะ
            </p>
          </SixteenChoices>
        } />
        <Route path='/others-define-you' element={
          <SixteenChoices path='/be-the-same' localStorageKey='others-define-you' playBtnClickSFX={playBtnClickSFX} key={2}>
            <p className='text-lg fade-in fade-in ani-duration-500ms'>
              แล้ว<b>คนอื่นมักนิยามตัวตนของคุณ</b>ด้วย<br />
              คำไหนบ้าง? สามารถตอบมากกว่า 1 ข้อ<br />
              ได้เหมือนเดิมเลย
            </p>
          </SixteenChoices>
        } />
        <Route path='/be-the-same' element={
          <SixteenChoices path='/you-and-others' playBtnClickSFX={playBtnClickSFX} key={3}>
            <p className='text-lg fade-in ani-duration-500ms'>
              มี<b>คำไหนเหมือนกันบ้าง</b>ไหม?<br />
              ถ้ามี คือคำไหนบ้างเหรอ?
            </p>
          </SixteenChoices>
        } />
        <Route path='/you-and-others' element={
          <Nav path='/'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/loose overlay top-14'>
                <p className='text-lg fade-in'>
                  แบบนี้นี่เอง สิ่งเหล่านั้นคือด้านที่ทั้งคุณและ<br />
                  คนรอบข้างเห็นตรงกันสินะ
                </p>
              </div>
              <img className='pointer-events-none scale-90 fade-in' src='/images/moon.png' alt='moon' />
            </BlankPage>
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
