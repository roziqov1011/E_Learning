import { Context } from '@/components/Context/Context'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

import style from '../styles/CourseDetail.module.scss'
import Time from '@mui/icons-material/AccessTime';

import fullTop from '../assets/images/fullTop.png'
import comentTop from '../assets/images/comentTop.png'
import card from '../assets/images/card.png'
import cardBottom from '../assets/images/cardBottom.png'

// pagination

import Button from '@mui/material/Button';
import ArrowLeft from '@mui/icons-material/KeyboardBackspace';
import Book from '@mui/icons-material/ImportContacts';
import AppIcon from '@mui/icons-material/Apps';
import Time2 from '@mui/icons-material/AccessTime';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { pagination } from '../data/Data';
import Link from 'next/link';

const pages = []
function courseDetail() {
  const styleBook = {
    transform: 'translateX(-10px)'
  }

  const [value, setValue] = React.useState(2);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [inpVal, setInpVal] = useState()
  const videoRef = useRef(null);
  // const [active, setActive] = useState('right')
  const [active, setActive] = useState(1)

  pagination?.map((e) => {
    if (!pages.includes(e.title)) {
      pages.push(e.title)
    }
  })

  console.log(active);

  // useEffect(() => {
  //   for (let i = 0; i < pages.length; i++) {
  //     const cardTransform = {
  //       transform: pages[i] == active[0] ? `translateX(-430px)` : `translateX(0px)`,
  //       transition: '2s ease all',
  //     }
  //     console.log(pages[i])
  //     setElemen(cardTransform)
  //   }
  //   const cardTransform = {
  //     transform: pages[1] == active ? 'translateX(-430px)' : 'translateX(0px)',
  //     transition: '2s ease all',
  //   }
  //   setElemen(cardTransform)
  // }, [])

  const num = 430

  const cardTransform = {
    transform: pages[1] == active ? `translateX(-${num}px)` : pages[2] == active ? `translateX(-${num * 2}px)` : pages[3] == active ? `translateX(-${num * 3}px)` : 'translateX(0px)',
    transition: '2s ease all',
  }

  const cardButton1 = {
    background: active == 1 ? 'rgba(73, 187, 189, 0.5)' : '#49BBBD'
  }

  const cardButton3 = {
    background: active == 3 ? 'rgba(73, 187, 189, 0.5)' : '#49BBBD'
  }

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    const duration = videoRef.current.duration;
    const currentTime = inpVal ? inpVal : videoRef.current.currentTime
    const progress = inpVal ? (inpVal / duration) * 600 : (currentTime / duration) * 600;
    setProgress(progress);
    console.log(videoRef.current.currentTime);
  };

  const {order, setOrder} = useContext(Context)
  const local = useRouter()
  useEffect(()=>{
    if(order == false){
      local.push('/')
    }
  },[])

  return (
    <>
      <Head>
        <title>Course Detail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={style.container}>
        <div className={style.head}>
          <div className={style.head__left}>
            <Link href='/course' className={style.button}><ArrowLeft /></Link>
            <div className={style.cards}>
              <h2>Change Simplification</h2>
              <Link href='/courseCalendarOne'>
                <div className={style.cards__card}>
                  <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                  <p>30 mins</p>
                </div>
              </Link>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
            </div>
            <div className={style.cards}>
              <h2>PRACTICE QUIZ</h2>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook} />Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
            </div>
          </div>
          <div className={style.head__right}>
            <div className={style.top}>
              <h2>Learn about Adobe XD & Prototyping</h2>
              <div>
                <b>Introduction about XD</b>
                <p><Time style={styleBook} /> 1 hour</p>
              </div>
            </div>
            <div className={style.bottom}>
              <Image src={fullTop} alt='Top' width={1100} height={700} />
              {/* <div className={style.bottom__video}>
                <video
                  onTimeUpdate={handleProgress}
                  ref={videoRef}
                  width="100%"
                  height="100%"
                >
                  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                </video>
                <input type="range" defaultValue={progress} onChange={(e) => setInpVal(Math.floor(e.target.value))} />
                <div className={style.bottom__video__controls}>
                  <b>
                    <p onClick={togglePlay}>{ isPlaying ? <StopIcon sx={{ marginRight: 2, cursor: 'pointer' }}/> : <PlayVideo sx={{ marginRight: 2, cursor: 'pointer' }}/> }</p>{Math.floor(progress % 60 == 0 ? `1 : ${progress}` : progress)} / 03:26
                  </b>
                  <p style={{ cursor: 'pointer' }}>
                    <FullscreenIcon/>
                  </p>
                </div>
              </div> */}
              <div className={style.bottom__txt}>
                <b>O6 Super Coins on the way</b>
                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmod</p>
                <b>Who this course is for?</b>
                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
                <b>Archievable</b>
                <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLWho this course is for?
                  Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodL</p>
              </div>
              <div className={style.coments}>
                <div className={style.coments__top}>
                  <div>
                    <Image src={comentTop} alt='comentTop' />
                    <b>
                      Bulkin Simons
                      <Typography component="legend"></Typography>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </b>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem</p>
                </div>
                <div className={style.coments__bottom}>
                  <div className={style.coments__bottom__top}>
                    <b>Student also bought</b>
                    <div>
                      {/* <Button onClick={() => setActive(active == 'right' ? 'left' : 'right')} style={cardButton1} disabled={active == 'right'} variant="outlined">
                        <ComentLeft/>
                      </Button>
                      <Button onClick={() => setActive(active == 'left' ? 'right' : 'left')} style={cardButton2} disabled={active == 'left'} variant="outlined">
                        <ComentRight/>
                      </Button> */}

                      {/* <Button disabled={active == 1} onClick={(e) => setActive(e.target.textContent)} style={cardButton1}>1</Button>
                      <Button onClick={(e) => setActive(e.target.textContent)}>2</Button>
                      <Button disabled={active == 3} onClick={(e) => setActive(active != e.target.textContent ? e.target.textContent : '')} style={cardButton3}>3</Button> */}
                      {
                        pagination?.map((e, i) => (
                          <Button key={i} onClick={() => setActive(e.title)}>
                            {e.title}
                          </Button>
                        ))
                      }
                    </div>
                  </div>
                  <div style={cardTransform} className={style.coments__bottom__cards}>
                    <div className={style.coments__bottom__cards__card}>
                      <Image src={card} alt='cardTop' />
                      <div className={style.coments__bottom__cards__card__div1}>
                        <div>
                          <p><AppIcon /></p>
                          <b>Design</b>
                        </div>
                        <div>
                          <p><Time2 /></p>
                          <b>3 Month</b>
                        </div>
                      </div>
                      <top>AWS Certified solutions Architect</top>
                      <bottom>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</bottom>
                      <div className={style.coments__bottom__cards__card__div2}>
                        <div>
                          <Image src={cardBottom} alt='cardBottom' />
                          <b>Lina</b>
                        </div>
                        <div>
                          <del>$100</del>
                          <b2>$80</b2>
                        </div>
                      </div>
                    </div>
                    <div className={style.coments__bottom__cards__card}>
                      <Image src={card} alt='cardTop' />
                      <div className={style.coments__bottom__cards__card__div1}>
                        <div>
                          <p><AppIcon /></p>
                          <b>Design</b>
                        </div>
                        <div>
                          <p><Time2 /></p>
                          <b>3 Month</b>
                        </div>
                      </div>
                      <top>AWS Certified solutions Architect</top>
                      <bottom>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</bottom>
                      <div className={style.coments__bottom__cards__card__div2}>
                        <div>
                          <Image src={cardBottom} alt='cardBottom' />
                          <b>Lina</b>
                        </div>
                        <div>
                          <del>$100</del>
                          <b2>$80</b2>
                        </div>
                      </div>
                    </div>
                    <div className={style.coments__bottom__cards__card}>
                      <Image src={card} alt='cardTop' />
                      <div className={style.coments__bottom__cards__card__div1}>
                        <div>
                          <p><AppIcon /></p>
                          <b>Design</b>
                        </div>
                        <div>
                          <p><Time2 /></p>
                          <b>3 Month</b>
                        </div>
                      </div>
                      <top>AWS Certified solutions Architect</top>
                      <bottom>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</bottom>
                      <div className={style.coments__bottom__cards__card__div2}>
                        <div>
                          <Image src={cardBottom} alt='cardBottom' />
                          <b>Lina</b>
                        </div>
                        <div>
                          <del>$100</del>
                          <b2>$80</b2>
                        </div>
                      </div>
                    </div>
                    <div className={style.coments__bottom__cards__card}>
                      <Image src={card} alt='cardTop' />
                      <div className={style.coments__bottom__cards__card__div1}>
                        <div>
                          <p><AppIcon /></p>
                          <b>Design</b>
                        </div>
                        <div>
                          <p><Time2 /></p>
                          <b>3 Month</b>
                        </div>
                      </div>
                      <top>AWS Certified solutions Architect</top>
                      <bottom>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</bottom>
                      <div className={style.coments__bottom__cards__card__div2}>
                        <div>
                          <Image src={cardBottom} alt='cardBottom' />
                          <b>Lina</b>
                        </div>
                        <div>
                          <del>$100</del>
                          <b2>$80</b2>
                        </div>
                      </div>
                    </div>
                    <div className={style.coments__bottom__cards__card}>
                      <Image src={card} alt='cardTop' />
                      <div className={style.coments__bottom__cards__card__div1}>
                        <div>
                          <p><AppIcon /></p>
                          <b>Design</b>
                        </div>
                        <div>
                          <p><Time2 /></p>
                          <b>3 Month</b>
                        </div>
                      </div>
                      <top>AWS Certified solutions Architect</top>
                      <bottom>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</bottom>
                      <div className={style.coments__bottom__cards__card__div2}>
                        <div>
                          <Image src={cardBottom} alt='cardBottom' />
                          <b>Lina</b>
                        </div>
                        <div>
                          <del>$100</del>
                          <b2>$80</b2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default courseDetail