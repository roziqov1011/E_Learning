import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/literatureCourse.module.css'

function literatureCourse() {
  const Data = [
    {
      name:"book"
    },
    {
      name:"Course"
    },
    {
      name:"Course"
    },
    {
      name:"Course"
    },
    {
      name:"Course"
    },
    {
      name:"Course"
    },
    {
      name:"Course"
    },
    {
      name:"Course"
    },
  ]
  Data.map((e)=>{
    console.log(e.name);
  })
  return (
    <>
      <Head>
        <title>Literature Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <div>
        <div className={styles.literabag}>
          <div className={styles.serverimg}>
          </div>
          <div className={styles.title}>
            <div className={styles.tittlecon}>
              <div className={styles.serverhead}>
                <h2>John Anderson</h2>
                <button>Enroll Now</button>
              </div>
              <p>Assistant Professor at Mcmaster University</p>
              <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud</b>
              <div className={styles.df}>
                <ul className={styles.ul}>
                <li>
                  <i className="bi bi-star"></i>
                  <p>4.9 instructor Rating</p>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <p>1,592 Students</p>
                </li>
                <li>
                  <i className="bi bi-star"></i>
                  <p>Courses</p>
                </li>
              </ul>
              <ul className={styles.web}>
                <li>
                  <img src="/image/twitter.svg"alt='progress'  />
                </li>
                <li>
                  <img src="/image/twitter.svg" alt='progress' />
                </li>
                <li>
                  <img src="/image/twitter.svg" alt='progress' />
                </li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
    </>
  )
}

export default literatureCourse