import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/BlogDetails.module.scss'
function blogDetail() {

  return (
    <>
      <Head>
        <title>Blog Detail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <div className={style.blog}>
        <Image className={style.blog__introImg} src='/image/blogDetail.svg' alt='image' width={400} height={425}/>
        <section className={`${style.blog__container} container`}>
          <div className={style.blog__container__text}>
            <h2>Why Swift UI Should Be on the Radar of Every Mobile Developer</h2>
            <ul>
              <li>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
              </li>
              <li>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
              </li>
              <li>
                <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
              </li>
            </ul>
            <section>
              <li>
                <h4>affordable </h4>
              </li>
              <li>
                <h4>Stunning</h4>
              </li>
              <li>
                <h4>making</h4>
              </li>
              <li>
                <h4>madbrawns</h4>
              </li>
            </section>
            <div>

            </div>
          </div>
        <div className={`${style.blog__container__written}`}>
          <ul>
            <li>
              <Image src='/image/writtenBy.svg' alt='Image' width={150} height={150}/>
            </li>
            <li>
              <p>Written by</p>
              <h5>Lina</h5>
            </li>
          </ul>
          <button>Follow</button>
        </div>

        </section>
        <main className={style.blog__cards}>
          <div className={`${style.blog__cards__container} container`}>
            <div className={style.blog__cards__container__title}>
              <h4>Related Blog </h4>
            </div>
          <ul>
            <li>
              <Image src='/image/opaxon.svg' alt='opaxon' width={400} height={350}/>
              <span>
              <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
              <span>
                <Image src='/image/qizaloq4.svg' alt='sdafs' width={100} height={100} />
                <b>Lina</b>
              </span>
              </span>
              <p className={style.text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
              <div>
                <p>Read more</p>
                <span>
                  <i className="bi bi-eye-fill"></i>
                  <p className={style.text2}>251,232</p>
                </span>
              </div>
            </li>
            <li>
              <Image src='/image/macbook.svg' alt='opaxon' width={400} height={350}/>
              <span>
              <h3>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h3>
              <span>
                <Image src='/image/qizaloq4.svg' alt='asdasd' width={100} height={100}/>
                <b>Lina</b>
              </span>
              </span>
              <p className={style.text}>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
              <div>
                <p>Read more</p>
                <span>
                  <i className="bi bi-eye-fill"></i>
                  <p className={style.text2}>251,232</p>
                </span>
              </div>
            </li>
          </ul>
          </div>
        </main>
      </div>
    </>
  )
}

export default blogDetail