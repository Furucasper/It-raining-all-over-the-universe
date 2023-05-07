import React, { useEffect, useState, useRef, RefObject } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Page from './pages/page';
import Warning from './pages/warning';
import Welcome from './pages/welcome';
import Policy from './pages/policy';
import Name from './pages/name';
import HowAreYou from './pages/howareyou';
import WhatHappened from './pages/whathappened';
import TellAboutYourself from './pages/tellaboutyourself';
import BlankPage from './pages/blankpage';
import Beginning from './pages/beginning';
import Nav from './pages/nav';
import ExploreYourself from './pages/exploreyourself';
import GraduallyDarken from './pages/graduallydarken';
import ToTheMoon from './pages/tothemoon';
import SixteenChoices from './pages/sixteenchoices';
import InputOnMoon from './pages/inputonmoon';
import LostConsciousness from './pages/lostconsciousness';
import ThinkOfOthers from './pages/thinkofothers';
import ItsDarkAgain from './pages/itsdarkagain';
import BeTheSame from './pages/bethesame';
import GlowingMoon from './pages/glowingmoon';
import Abstract from './pages/abstract';
import RaindropOnHand from './pages/raindroponhand';
import RainOnMoon from './pages/rainonmoon';
import OutOfTheUniverse from './pages/outoftheuniverse';
import Curtain from './pages/curtain';
import HowMuchYouLearn from './pages/howmuchyoulearn';
import NitadeShowcase from './pages/nitadeshowcase';
import Souvenir from './pages/souvenir';

function App() {

  const [name, setName] = useState("")

  const soundPlayer = useRef<HTMLAudioElement>(null);
  const secondSoundPlayer = useRef<HTMLAudioElement>(null);
  const sfxPlayer = useRef<HTMLAudioElement>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const changeSound = (src: string, volume: number = 1) => {
    if (soundPlayer.current) {
      soundPlayer.current.src = src;
      src && soundPlayer.current.load();
      soundPlayer.current.volume = volume
      src && soundPlayer.current.play();
    }
  }
  const changeSecondSound = (src: string, volume: number = 0.8) => {
    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.src = src;
      src && secondSoundPlayer.current.load();
      secondSoundPlayer.current.volume = volume
      src && secondSoundPlayer.current.play();
    }
  }
  const changeSFX = (src: string, volume: number = 0.9) => {
    if (sfxPlayer.current) {
      sfxPlayer.current.src = src;
      src && sfxPlayer.current.load();
      sfxPlayer.current.volume = volume
      src && sfxPlayer.current.play();
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

  const volumeFadeOut = (player: RefObject<HTMLAudioElement>, time: number, delay: number = 0) => {
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

  const soundPlayerFadeOut = (time: number, delay?: number) => {
    volumeFadeOut(soundPlayer, time)
  }
  const secondSoundPlayerFadeOut = (time: number, delay?: number) => {
    volumeFadeOut(secondSoundPlayer, time)
  }
  const sfxPlayerFadeOut = (time: number, delay?: number) => {
    volumeFadeOut(sfxPlayer, time)
  }

  const allPlayerFadeOut = (time: number, delay?: number) => {
    volumeFadeOut(soundPlayer, time, delay)
    volumeFadeOut(secondSoundPlayer, time, delay)
    volumeFadeOut(sfxPlayer, time, delay)
  }

  useEffect(() => {
    if (soundPlayer.current) {
      soundPlayer.current.volume = 1
    }

    if (secondSoundPlayer.current) {
      secondSoundPlayer.current.src = ""
      secondSoundPlayer.current.volume = 0.8
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
          <Nav path='/intro' changeSound={() => changeSound('/sounds/window-light-off.mp3')} changeSecondSound={() => changeSecondSound('/sounds/wind-with-window.mp3', 1)}>
            <div className="bg-white">
              <Page bg='6.jpg' onBlack={false} fadeInScene></Page>
            </div>
          </Nav>
        } />
        <Route path='/intro' element={
          <Nav path='/welcomename'>
            <div className="bg-white">
              <Page bg='daytime-window.gif' onBlack={false} fadeInScene fadeoutOnClicked>
                <p className="mt-40 text-lg/loose fade-in">บ่ายแก่ ๆ ในวันหยุดวันหนึ่ง <br />
                  คุณกำลังนั่งปลดปล่อยความคิด <br />
                  ให้ล่องลอยไปในอากาศ</p>
              </Page>
            </div>
          </Nav>
        } />
        <Route path='/welcomename' element={
          <Nav path='/how-are-you'>
            <Page bg='daytime-window.gif' onBlack={false} key={'how-are-you'}>
              <p className='mt-40 text-lg fade-in'>สวัสดีคุณ <b>{name}</b></p>
            </Page>
          </Nav>
        } />
        <Route path='/how-are-you' element={<HowAreYou changeSecondSound={() => changeSecondSound('/sounds/evening-window.mp3', 0.5)} playBtnClickSFX={playBtnClickSFX} />} />
        <Route path='/hmm' element={
          <Nav path='/myself'>
            <div className="bg-white">
              <Page bg='evening-window.gif' onBlack={false}>
                <p className='mt-40 text-lg fade-in'>หืม...</p>
              </Page>
            </div>
          </Nav>
        } />
        <Route path='/myself' element={<WhatHappened changeSecondSound={() => changeSecondSound('/sounds/night-window.mp3')} />} />
        <Route path='/ahh' element={
          <Nav path='/tellaboutyourself'>
            <Page bg='night-window.gif' onBlack={false}>
              <p className='mt-40 text-lg/loose'>แบบนี้นี่เอง...</p>
            </Page>
          </Nav>
        } />
        <Route path='/tellaboutyourself' element={<TellAboutYourself changeSecondSound={() => changeSecondSound('')} />} />
        <Route path='/knowyourself' element={
          <Nav path='/exploreyourself'>
            <div className='bg-white'>
              <BlankPage onBlack={false} fadeInScene>
                <p className='text-lg'>เยี่ยมเลย! คุณรู้จักตัวเองในแบบนี้นี่เอง</p>
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
            <BlankPage bg='plain-space.gif' fadeInScene>
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
                <p className='text-black ani-delay-2s fade-in'>
                  ด้วยลักษณะของพื้นผิวดวงดาวทำให้คุณ<br />
                  คาดเดาได้ว่าที่นี่คงไม่มีฝนตกมานานมากแล้ว
                </p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gaia-land-next' element={
          <Nav path='/find-your-star' delay={1500} changeSecondSound={() => changeSecondSound('')}>
            <BlankPage bg='plain-space.gif' fadeoutOnClicked>
              <img className='zoom-out-150 pointer-events-none' src='/images/moon.png' alt='gaia-star' />
              <div className='[&>p]:text-lg/loose overlay fade-in'>
                <p className='text-black'>และคุณก็รู้ว่าที่นี่ไม่ใช่ดาวของคุณ</p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/find-your-star' element={
          <Nav path='/let-start'>
            <BlankPage bg='plain-space.gif' key={'find-your-star'}>
              <div className='fade-in'>
                <p className='text-white text-lg'>
                  เป้าหมายของคุณใน<br />
                  จักรวาล <b>Via lactea</b> แห่งนี้คือ<br />
                  <b>การค้นหาดวงดาว<br />
                    ที่เป็นดาวประจำตัวของคุณ</b>
                </p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/let-start' element={
          <Nav path='/gradually-darken'>
            <BlankPage bg='plain-space.gif' key={'let-start'}>
              <div className='fade-in'>
                <p className='text-white text-lg'>เอาล่ะ เรามาเริ่มสำรวจไปพร้อม ๆ กันเถอะ!</p>
              </div>
            </BlankPage>
          </Nav>
        } />
        <Route path='/gradually-darken' element={
          <GraduallyDarken allPlayerFadeOut={allPlayerFadeOut} />
        } />
        <Route path='/darkness' element={
          <Nav path='/time-space' changeSound={() => changeSound('/sounds/galaxy.mp3')} changeSecondSound={() => changeSecondSound('/sounds/star-ambience.mp3')} changeSFX={() => changeSFX('/sounds/sfx-twinkling-stars.mp3')}>
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
              <div className='[&>p]:text-xl/relaxed fade-in overlay top-[15%]'>
                <p>คุณเดินทางมาถึงดวงจันทร์ดวงหนึ่ง</p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/is-this-your-star' element={
          <Nav path='/find-the-answer'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/relaxed overlay top-[12%]'>
                <p className='fade-in'>ดาวดวงนี้จะใช่ดาวของคุณ<br />หรือเปล่านะ?</p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/find-the-answer' element={
          <Nav path='/define-yourself' delay={1000}>
            <BlankPage bg='plain-space.gif' fadeoutOnClicked>
              <div className='[&>p]:text-lg/relaxed overlay top-[10%] ani-delay-500ms fade-in'>
                <p className=''>มาค้นหาคำตอบ<br />
                  ด้วยการ<b>สำรวจตนเองและอธิบาย<br />
                    ความเป็นตัวตน</b>ให้ได้มากที่สุดกันเถอะ!</p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/define-yourself' element={
          <SixteenChoices path='/others-define-you' localStorageKey='define-yourself' playBtnClickSFX={playBtnClickSFX} key={'define-yourself'}>
            <p className='text-lg fade-in ani-duration-500ms'>
              คุณ<b>นิยามตัวตนของคุณ</b>ด้วยคำไหนบ้าง<br />
              สามารถตอบมากกว่า 1 ข้อได้นะ
            </p>
          </SixteenChoices>
        } />
        <Route path='/others-define-you' element={
          <SixteenChoices path='/be-the-same' localStorageKey='others-define-you' playBtnClickSFX={playBtnClickSFX} key={'others-define-you'}>
            <p className='text-lg fade-in fade-in ani-duration-500ms'>
              แล้ว<b>คนอื่นมักนิยามตัวตนของคุณ</b><br />
              ด้วยคำไหนบ้าง? สามารถตอบมากกว่า 1 ข้อ<br />
              ได้เหมือนเดิมเลย
            </p>
          </SixteenChoices>
        } />
        <Route path='/be-the-same' element={<BeTheSame />} />
        <Route path='/you-and-others' element={
          <Nav path='/your-pride'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/loose overlay top-[10%]'>
                <p className='fade-in'>
                  เห็นคำพวกนั้นไหม?<br />
                  นั่นคือ<b>ด้านที่ทั้งคุณและ<br />
                    คนรอบข้างเห็นตรงกัน</b>นะ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85] fade-in' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/your-pride' element={
          <InputOnMoon path='/its-really-good'>
            <p className='text-lg'>
              แล้วคุณภูมิใจกับความเป็นตัวเอง<br />
              ด้านไหนมากที่สุดบ้างเหรอ?
            </p>
          </InputOnMoon>
        } />
        <Route path='/its-really-good' element={
          <Nav path='/lost-consciousness'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/loose overlay top-[16%]'>
                <p className='fade-in'>
                  เป็นเรื่องที่ดีจริง ๆ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/lost-consciousness' element={<LostConsciousness allPlayerFadeOut={allPlayerFadeOut} />} />
        <Route path='/darkness2' element={
          <Nav path='/raindrop' changeSecondSound={() => changeSecondSound('/sounds/raindrop.mp3')}>
            <BlankPage></BlankPage>
          </Nav>
        } />
        <Route path='/raindrop' element={
          <Nav path='/to-the-moon-again' delay={1000} changeSound={() => changeSound('/sounds/galaxy.mp3')} changeSecondSound={() => changeSecondSound('/sounds/star-ambience.mp3')} changeSFX={() => changeSFX('/sounds/sfx-twinkling-stars.mp3')}>
            <BlankPage bg='raindrop-no-bg.gif' fadeoutOnClicked></BlankPage>
          </Nav>
        } />
        <Route path='/to-the-moon-again' element={<ToTheMoon path='/another-moon' />} />
        <Route path='/another-moon' element={
          <Nav path='/or-this-star'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay'>
                <p className='fade-in text-black'>
                  คุณเดินทางมาถึงดวงจันทร์<br />
                  อีกดวงหนึ่ง
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/or-this-star' element={
          <Nav path='/find-the-answer-again'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/loose overlay fade-in'>
                <p className='text-black'>
                  หรือว่าดาวของคุณจะเป็นดวงนี้กันนะ?
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/find-the-answer-again' element={
          <Nav path='/think-of-others' delay={1000}>
            <BlankPage bg='plain-space.gif' fadeoutOnClicked>
              <div className='[&>p]:text-lg/relaxed overlay top-[12%]'>
                <p className='ani-delay-500ms fade-in'>
                  มาค้นหาคำตอบอีกครั้ง<br />
                  ด้วยการค้นหาตัวตน<br />
                  <b>ที่คุณไม่เคยรู้มาก่อนกันเถอะ!</b>
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/think-of-others' element={<ThinkOfOthers />} />
        <Route path='/not-me' element={
          <SixteenChoices path='/maybe-maybe-not' choiceKey='others-define-you' playBtnClickSFX={playBtnClickSFX} key={'not-me'} skipable>
            <p className='text-lg fade-in ani-duration-500ms'>
              มีคำไหนบ้างไหม<br />
              ที่คุณ<b>ไม่เคยคิดว่าตนเองเป็นแบบนั้น</b>
            </p>
          </SixteenChoices>
        } />
        <Route path='/maybe-maybe-not' element={
          <Nav path='/never-before'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[12%]'>
                <p className='ani-delay-1500ms fade-in'>
                  คุณอาจเป็นหรือไม่เป็นแบบนั้นก็ได้<br />
                  เราทุกคนมักมีด้านที่ตัวเองไม่เคยรู้<br />
                  แต่คนรอบข้างมักจะรับรู้อยู่เสมอ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85] fade-in' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/never-before' element={
          <Nav path='/its-dark-again'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[12%] fade-in'>
                <p className='ani-delay-500ms'>
                  ทีนี้ลองคิดถึงตัวตน<br />
                  ที่คนรอบข้างบอกอีกครั้งดูสิ<br />
                  คุณไม่เคยเป็นแบบนั้นจริง ๆ เลยหรือเปล่า?<br />
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/its-dark-again' element={<ItsDarkAgain allPlayerFadeOut={allPlayerFadeOut} />} />
        <Route path='/darkness3' element={
          <Nav path='/raindrop2' changeSecondSound={() => changeSecondSound('/sounds/raindrop.mp3')}>
            <BlankPage></BlankPage>
          </Nav>
        } />
        <Route path='/raindrop2' element={
          <Nav path='/to-the-moon-again-2' delay={1000} changeSound={() => changeSound('/sounds/galaxy.mp3')} changeSecondSound={() => changeSecondSound('/sounds/star-ambience.mp3')} changeSFX={() => changeSFX('/sounds/sfx-twinkling-stars.mp3')}>
            <BlankPage bg='raindrop-no-bg.gif' fadeoutOnClicked></BlankPage>
          </Nav>
        } />
        <Route path='/to-the-moon-again-2' element={<ToTheMoon path='/wakeup-on-moon' />} />
        <Route path='/wakeup-on-moon' element={
          <Nav path='/halfway'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/loose overlay'>
                <p className='fade-in text-black'>
                  คุณตื่นขึ้นบนดวงจันทร์อีกดวงหนึ่ง
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/halfway' element={
          <Nav path='/along-the-way'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/relaxed overlay top-[14%] ani-delay-500ms fade-in'>
                <p>
                  คุณเก่งมากเลย!<br />
                  ตอนนี้คุณเดินทางมาเกินกว่าครึ่งแล้ว
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/along-the-way' element={
          <Nav path='/never-told'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[12%]'>
                <p className='ani-delay-500ms fade-in'>
                  ตลอดเส้นทางที่ผ่านมา ไม่ว่าคุณจะค้นพบ<br />
                  ตัวตนแบบไหน มันก็เป็นเรื่องที่ดีมากเลยนะ<br />
                  ตัวตนเหล่านั้นต้องมีค่ากับคุณมาก ๆ แน่เลย
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/never-told' element={
          <Nav path='/never-told-story'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[15%] ani-delay-500ms fade-in'>
                <p>
                  งั้นคราวนี้เราลองมาสำรวจตัวตนที่คุณ<br />
                  <b>ไม่เคยบอกใคร</b>มาก่อนกันดีไหม?
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/never-told-story' element={
          <InputOnMoon path='/thank-you'>
            <p className='text-lg'>
              จะเป็นตัวตนด้านไหนหรือเรื่องอะไร<br />
              เลยก็ได้นะ เล่ามาได้เลย
            </p>
          </InputOnMoon>
        } />
        <Route path='/thank-you' element={
          <Nav path='/same-side'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-xl/relaxed overlay top-[16%] ani-delay-500ms fade-in'>
                <p>
                  ขอบคุณที่เล่าให้ฟังนะ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/same-side' element={
          <Nav path='/glowing-moon' changeSecondSound={() => changeSecondSound('')} changeSFX={() => changeSFX('/sounds/shining-planet.mp3')}>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[8%]'>
                <p className='ani-delay-500ms fade-in'>
                  เราเข้าใจว่าแต่ละคน<br />
                  ล้วนมีสิ่งที่ไม่เคยบอกใคร<br />
                  แต่สิ่งเหล่านั้นก็เป็นตัวตน<br />
                  อีกด้านหนึ่งของเราเหมือนกันนะ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/glowing-moon' element={<GlowingMoon />} />
        <Route path='/new-star' element={
          <Nav path='/undiscovered' changeSecondSound={() => changeSecondSound('/sounds/star-ambience.mp3')} changeSFX={() => changeSFX('')}>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[14%]'>
                <p className='ani-delay-500ms fade-in'>
                  คุณสัมผัสได้ว่าดาวดวงนี้มีความพิเศษ<br />
                  ที่ไม่เหมือนดาวดวงอื่น
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/undiscovered' element={
          <Nav path='/abstract'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[14%] ani-delay-500ms fade-in'>
                <p>
                  คราวนี้ เราไปสำรวจ<b>สิ่งที่คนอื่นหรือแม้แต่<br />
                    คุณเองก็ยังไม่เคยค้นพบมาก่อน</b>กันดีกว่า
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85]' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/abstract' element={<Abstract />} />
        <Route path='/reflect-something' element={
          <Nav path='/raindrop-on-hand' changeSFX={() => changeSFX('/sounds/raindrop.mp3')}>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[14%]'>
                <p className='ani-delay-500ms fade-in'>
                  อย่างนี้นี่เอง... สิ่งที่คุณเห็นและตีความได้ <br />
                  อาจจะสะท้อนตัวตนบางอย่างของคุณอยู่ก็ได้นะ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.85] fade-in' src='/images/moon.png' alt='moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/raindrop-on-hand' element={<RaindropOnHand />} />
        <Route path='/rain-on-moon' element={<RainOnMoon changeSecondSound={() => changeSecondSound('/sounds/star-ambience-with-rain.mp3')} />} />
        <Route path='/recall' element={
          <Nav path='/your-planet'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[16%] ani-delay-500ms fade-in'>
                <p>
                  เสี้ยววินาทีที่ความสับสนเข้ามาเยือน<br />
                  คุณก็ระลึกได้ว่า...
                </p>
              </div>
              <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/your-planet' element={
          <Nav path='/your-rain' delayClick={5500} key={'your-rain'}>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[8%]'>
                <p className='ani-delay-500ms fade-in'>
                  ดาวที่มีฝนตกดวงนี้ก็คือตัวตนของคุณเอง
                </p>
                <p className='ani-delay-3s fade-in py-4'>
                  ...
                </p>
                <p className='ani-delay-5s fade-in'>
                  ยินดีด้วยนะ!<br />
                  คุณค้นพบ<b>ดาวประจำตัว</b>ของคุณแล้ว
                </p>
              </div>
              <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/your-rain' element={
          <Nav path='/know-better'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[12%] ani-delay-500ms fade-in'>
                <p>
                  ฝนแต่ละหยดก็เหมือนกับตัวตนในแต่ละด้าน<br />
                  ยิ่งฝนตกลงมามากแค่ไหน<br />
                  คุณก็จะได้รู้จักตนเองมากขึ้นเท่านั้น
                </p>
              </div>
              <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/know-better' element={
          <Nav path='/no-one-discover'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[14%]'>
                <p className='ani-delay-500ms fade-in'>
                  ตอนนี้คุณได้เรียนรู้และ<br />
                  รู้จักตนเองมากขึ้นอีกนิดหน่อยแล้ว
                </p>
              </div>
              <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/no-one-discover' element={
          <Nav path='/make-it-rain'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[12%] ani-delay-500ms fade-in'>
                <p>
                  แม้ดูเหมือนจะเป็นไปไม่ได้<br />
                  แต่ในจักรวาลก็ยังมีฝน เหมือนกับตัวตนของคุณ<br />
                  ที่มีด้านอีกมากมายให้ค้นหา<br />
                  ด้านที่แม้แต่ตัวคุณ และใครก็ไม่เคยค้นพบ
                </p>
              </div>
              <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/make-it-rain' element={
          <Nav path='/out-of-the-universe'>
            <BlankPage bg='plain-space.gif'>
              <div className='[&>p]:text-lg/relaxed overlay top-[18%]'>
                <p className='ani-delay-500ms fade-in'>
                  มาร่วมส่งต่อการมีฝนตกในจักรวาลไปด้วยกัน<br />
                  <b>#Makeitrainproject</b>
                </p>
              </div>
              <img className='pointer-events-none scale-[0.75]' src='/pages/rain-on-moon-no-bg.gif' alt='rain-on-moon' />
            </BlankPage>
          </Nav>
        } />
        <Route path='/out-of-the-universe' element={<OutOfTheUniverse allPlayerFadeOut={allPlayerFadeOut} />} />
        <Route path='/last-darkness' element={
          <Nav path='/back-to-the-light-again' changeSound={() => changeSound('/sounds/window-light-off.mp3')} changeSecondSound={() => changeSecondSound('/sounds/wind-with-window.mp3', 1)}>
            <BlankPage></BlankPage>
          </Nav>
        } />
        <Route path='/thank-for-today' element={
          <Curtain path='/how-much-you-have-learn' isClosing={false} delay={3500}>
            <div className='bg-white w-full'>
              <div className='fade-out ani-delay-12s'>
                <BlankPage bg='daytime-window.gif' onBlack={false}>
                  <p className='mt-40 text-lg fade-in ani-delay-5s'>ขอบคุณที่มาร่วมเดินทางไปด้วยกันวันนี้นะ</p>
                </BlankPage>
              </div>
            </div>
          </Curtain>
        } />
        <Route path='/how-much-you-have-learn' element={<HowMuchYouLearn />} />
        <Route path='/before-we-part' element={
          <Nav path='/join-the-Nitade-Showcase' delay={1000}>
            <BlankPage onBlack={false} fadeoutOnClicked>
              <p className='text-lg fade-in'>
                ก่อนจะจากกันไป<br />
                เรามีของขวัญให้คุณด้วยนะ
              </p>
            </BlankPage>
          </Nav>
        } />
        <Route path='/join-the-Nitade-Showcase' element={<NitadeShowcase />} />
        <Route path='/new-moon-souvenir' element={
          <Souvenir moon='new-moon.jpg' name='New Moon'>
            <p className="text-lg/relaxed">
              <b>จันทร์ดับ</b><br />
              สัญลักษณ์แห่งการเริ่มต้น<br />
              "ช่วงเวลาแห่งคืนเดือนมืดคือช่วงที่เหมาะสมที่สุดในการเริ่มต้นสิ่งใหม่ ๆ
              รวมถึงการตั้งต้นเพื่อค้นหาตนเอง"
            </p>
          </Souvenir>
        } />
        <Route path='/crescent-moon-souvenir' element={
          <Souvenir moon='crescent-moon.jpg' name='Crescent Moon'>
            <p className="text-lg/relaxed">
              <b>จันทร์เสี้ยว</b><br />
              สัญลักษณ์แห่งการเตรียมความพร้อม<br />
              "ตัวตนที่ถูกค้นพบอาจนำมาซึ่งผลลัพธ์อันคาดเดาไม่ได้"
            </p>
          </Souvenir>
        } />
        <Route path='/quarter-moon-souvenir' element={
          <Souvenir moon='quarter-moon.jpg' name='Quarter Moon'>
            <p className="text-lg/relaxed">
              <b>จันทร์ครึ่งดวง</b><br />
              สัญลักษณ์แห่งการลงมือทำ<br />
              "ในบางครา.. เส้นทางแห่งมัชฌิมาอาจไม่ก่อให้เกิดผลดีเท่าการแสดงออกอย่างชัดเจน"
            </p>
          </Souvenir>
        } />
        <Route path='/gibbous-moon-souvenir' element={
          <Souvenir moon='gibbous-moon.jpg' name='Gibbous Moon'>
            <p className="text-lg/relaxed">
              <b>จันทร์นูน</b><br />
              สัญลักษณ์แห่งการสำรวจตนเอง<br />
              "การเติบโต การค้นพบ และการสูญเสียบางสิ่ง"
            </p>
          </Souvenir>
        } />
        <Route path='/full-moon-souvenir' element={
          <Souvenir moon='full-moon.jpg' name='Full Moon'>
            <p className="text-lg/relaxed">
              <b>จันทร์เพ็ญ</b><br />
              สัญลักษณ์แห่งการตื่นรู้<br />
              "แม้การตื่นรู้อาจเป็นสิ่งสูงสุด แต่ผู้คนบนโลกก็ยังมิอาจตื่นรู้ได้จน
              ลมหายใจสุดท้าย"
            </p>
          </Souvenir>
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
