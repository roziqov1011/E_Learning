import Head from 'next/head'

import ArrowLeft from '@mui/icons-material/KeyboardBackspace';
import Book from '@mui/icons-material/ImportContacts';
import React, { useEffect } from 'react';

import style from '../styles/CourseCalendarOne.module.scss'
import Time from '@mui/icons-material/AccessTime';

import { useState } from 'react';
import { Calendar } from 'antd';

function courseCalendarOne() {
  const [date, setDate] = useState(new Date());

  const getDayF = new Date().getDate()
  const getMonthF = new Date().getMonth()
  const getYearF = new Date().getFullYear()

  const getDay = new Date(date.$d).getDate()
  const getMonth = new Date(date.$d).getMonth()
  const getYear = new Date(date.$d).getFullYear()

  const endDay = getDay ? getDay : getDayF
  const endMonth = getMonth ? getMonth : getMonthF
  const endYear = getYear ? getYear : getYearF

  const all = endDay + '.' + endMonth + '.' + endYear

  console.log(all);
  const styleBook = {
    transform: "translateX(-10px)",
  };
  return (
    <>
      <Head>
        <title>Course CalendarOne</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={style.container}>
        <div className={style.head}>
          <div className={style.head__left}>
            <button className={style.button}><ArrowLeft /></button>
            <div className={style.cards}>
              <h2>Change Simplification</h2>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
            </div>
            <div className={style.cards}>
              <h2>PRACTICE QUIZ</h2>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b>
                  <Book style={styleBook} />
                  Lesson 01 : Introduction about XD
                </b>
                <p>30 mins</p>
              </div>
            </div>
          </div>
          <div className={style.head__right}>
            <div className={style.top}>
              <h2>Learn about Adobe XD & Prototyping</h2>
              <div>
                <b>Introduction about XD</b>
                <p>
                  <Time style={styleBook} /> 1 hour
                </p>
              </div>
            </div>
            <div className={style.bottom}>
              <h2>Share and refer</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLoremLorem ipsum dolor sit amet, consectetur adi piscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem
                eiusmodLorem dolor sit amet, consectetur adipiscing
              </p>
              <div className={style.calendar}>
                <div className={style.calendarLeft}>
                  <div className={style.border} style={{ width: 500, height: 410, overflowY: 'scroll', }}>
                    {/* <Calendar localizer={localizer} events={events} onChange={setDate} /> */}
                    <Calendar onChange={(e) => setDate(e)} />
                  </div>
                </div>
                <div className={style.calendarRight}>
                  <h2>{all}</h2>
                  <div className={style.calendarRight__texts}>
                    <div>
                      <p>2 PM</p>
                    </div>
                    <div>
                      <p>3 PM</p>
                      <span>Adobe XD Live Class</span>
                    </div>
                    <div>
                      <p>4 PM</p>
                    </div>
                    <div>
                      <p>5 PM</p>
                    </div>
                    <div>
                      <p>6 PM</p>
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

export default courseCalendarOne