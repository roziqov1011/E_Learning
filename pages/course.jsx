import Head from 'next/head'
import React from 'react'
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

function course() {
  const styleBook = {
    transform: 'translateX(-10px)'
  }

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
            </div>
            <div className={style.cards}>
              <h2>PRACTICE QUIZ</h2>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
              <div className={style.cards__card}>
                <b><Book style={styleBook}/>Lesson 01 : Introduction about XD</b>
                <p>30 mins</p>
              </div>
            </div>
          </div>
          <div className={style.head__right}>
            <div className={style.top}>
              <h2>Learn about Adobe XD & Prototyping</h2>
              <div>
                <b>Introduction about XD</b>
                <p><Time style={styleBook}/> 1 hour</p>
              </div>
            </div>
            <div className={style.bottom}>
              <h2>Create new event</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmodadipiscing elit, sed do eiusmodeiusmodadipiscing elit, sed do eiusmodLorem</p>
              <div className={style.inputs}>
                <div className={style.first}>
                  <b>Event Name</b>
                  <input type="text" placeholder='Adobe XD Auto - Animate : Your Guide to Creating'/>
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
                  <input type="text" placeholder='2118 Thornridge Cir, Syracuse, Connecticut 35624'/>
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
      </div>
    </>
  )
}

export default course