import { Context } from '@/components/Context/Context'
import Head from 'next/head'
import React, { useContext, useEffect } from 'react'
import style from '../styles/Course.module.scss'
import Time from '@mui/icons-material/AccessTime';

import { DatePicker, Space } from 'antd';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

import { Input } from 'antd';

const { TextArea } = Input;

const onChange2 = (e) => {
  console.log('Change:', e.target.value);
};

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import ArrowLeft from '@mui/icons-material/KeyboardBackspace';
import Book from '@mui/icons-material/ImportContacts';

import TextField from '@mui/material/TextField';
import Link from 'next/link';
import { useRouter } from 'next/router';

function course() {
  const styleBook = {
    transform: 'translateX(-10px)'
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const {order, setOrder} = useContext(Context)
  const local = useRouter()
  useEffect(()=>{
    let str = window.localStorage.getItem('key')
    if(order == false && str !== 'true'){
      local.push('/')
    }
  },[])
  return (
    <>
      <Head>
        <title>Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className={style.container}>
        <div className={style.head}>
          <div className={style.head__left}>
            <button className={style.button}><ArrowLeft /></button>
            <div className={style.cards}>
              <h2>Change Simplification</h2>
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
              <h2>Create new event</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem</p>
              <div className={style.inputs}>
                <div className={style.first}>
                  <b>Event Name</b>
                  <input type="text" placeholder='Adobe XD Auto - Animate : Your Guide to Creating' />
                </div>
                <div className={style.flex}>
                  <div className={style.flex__div}>
                    <b>Start date / Time</b>
                    <Space direction="vertical">
                      <DatePicker onChange={onChange} />
                    </Space>
                  </div>
                  <div className={style.flex__div}>
                    <b>End date / Time</b>
                    <Space direction="vertical">
                      <DatePicker onChange={onChange} />
                    </Space>
                  </div>
                </div>
                <div className={style.second}>
                  <b>Location</b>
                  <input type="text" placeholder='2118 Thornridge Cir, Syracuse, Connecticut 35624' />
                </div>
                <div className={style.flex}>
                  <div className={style.flex__div}>
                    <b>Notification</b>
                    <Box sx={{ minWidth: 530 }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Time</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          label="Time"
                          onChange={handleChange}
                        >
                          <MenuItem value={10}>30 mins</MenuItem>
                          <MenuItem value={20}>40 mins</MenuItem>
                          <MenuItem value={30}>50 mins</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className={style.flex__div}>
                    <b>Email</b>
                    <Box sx={{ minWidth: 120 }}>
                      <FormControl>
                        <TextField id="outlined-basic" label="Email" variant="outlined" />
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <div className={style.third}>
                  <b>Event Description</b>
                  <TextArea placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur' style={{ height: 200 }} showCount onChange={onChange2} />
                </div>
                <div className={style.button2}>
                  <Link href='/courseDetail'>
                    <Button variant="contained" color="success">
                      Save Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={styles.course}>
          <div className={styles.course__container}>
            <div className={styles.course__container__inner}>
              <div className={styles.course__container__inner__head}>
                <span>
                  <h2>Welcome back, ready for your next lesson?</h2>
                  <button >View hisotry</button>
                </span>
                <section>
                  <ul ref={sliderWrap}>
                    {
                      data?.map((e) => (
                        <li key={e.id}>
                          <img src={e.img} alt="" />
                          <h4>{e.title}</h4>
                          <span>
                            <h5 ref={rangeee}></h5>
                          </span>
                          <p>Lesson {e.lesson} of 7</p>
                        </li>
                      ))
                    }
                  </ul>
                </section>
                <b>
                  <button onClick={() => count > -68 ? setCount(0) : setCount(count + 34)} disabled={count == 0 ? true : false} className={count == 0 ? styles.back : ''}>
                    <i class="bi bi-chevron-left"></i>
                  </button>
                  <button onClick={() => count == -102 ? setCount(0) : setCount(count - 34)} disabled={count == -68 ? true : false} className={count == -68 ? styles.back : ''}>
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </b>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.choice}>
          <div className={styles.choice__container}>
            <div className={styles.choice__container__inner}>
              <h2>Choice favourite course from top category</h2>
              <ul>
                <li>
                  <b><i class="bi bi-brush"></i></b>
                  <h3>Design</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-apple"></i></b>
                  <h3>Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-currency-bitcoin"></i></b>
                  <h3>Development</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-bag"></i></b>
                  <h3>Business</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-person"></i></b>
                  <h3>Marketing</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-book"></i></b>
                  <h3>Photography</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-stack-overflow"></i></b>
                  <h3>Acting</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
                <li>
                  <b><i class="bi bi-bag"></i></b>
                  <h3>Business</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmod</p>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
  </>
  )
}

      export default course