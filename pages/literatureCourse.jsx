import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/literatureCourse.module.css'
import { Context } from '@/components/Context/Context'
import { useRouter } from 'next/router'

function literatureCourse() {
  const Data = [
    {
      id: 1,
      name: "About"
    },
    {
      id: 2,
      name: "Course"
    },
    {
      id: 3,
      name: "Notes"
    },
    {
      id: 4,
      name: "Project"
    },
    {
      id: 5,
      name: "Podcast"
    },
    {
      id: 6,
      name: "Book"
    },
    {
      id: 7,
      name: "Review"
    }
  ]
  const block = [
    {
      tittle: "All Benefits of PLUS",
      price: "$24",
      type:"book",
      scr:"https://avatars.mds.yandex.net/i?id=bdd74422cda7700c512884a3a13cac6fb9ba2c9f-8181605-images-thumbs&n=13"
    },
    {
      tittle: "All Benefits of PLUS",
      price: "$24",
      type:"book",
      scr:"https://avatars.mds.yandex.net/i?id=bdd74422cda7700c512884a3a13cac6fb9ba2c9f-8181605-images-thumbs&n=13"
    },
    {
      tittle: "All Benefits of PLUS",
      price: "$24",
      type:"book",
      scr:"https://avatars.mds.yandex.net/i?id=bdd74422cda7700c512884a3a13cac6fb9ba2c9f-8181605-images-thumbs&n=13"

    },
    {
      tittle: "All Benefits of PLUS",
      price: "$24",
      type:"book",
      scr:"https://avatars.mds.yandex.net/i?id=bdd74422cda7700c512884a3a13cac6fb9ba2c9f-8181605-images-thumbs&n=13"

    },
    {
      tittle: "All Benefits of PLUS",
      price: "$24",
      type:"book",
      scr:"https://avatars.mds.yandex.net/i?id=bdd74422cda7700c512884a3a13cac6fb9ba2c9f-8181605-images-thumbs&n=13"

    },
    {
      tittle: "All Benefits of PLUS",
      price: "$24",
      type:"book",
      scr:"https://avatars.mds.yandex.net/i?id=bdd74422cda7700c512884a3a13cac6fb9ba2c9f-8181605-images-thumbs&n=13"

    }
  ]
  return (
    <>
      <Head>
        <title>Literature Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"></link>
      </Head>
      <div className={styles.contai}>
        <div className={styles.literabag}>
          <div className={styles.serverimg}>
          </div>
          <div className={styles.title}>
            <div className={styles.tittlecon}>
              <div className={styles.serverhead}>
                <h2>About</h2>
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
                    <p>1.592 Students</p>
                  </li>
                  <li>
                    <i className="bi bi-star"></i>
                    <p>Courses</p>
                  </li>
                </ul>
                <ul className={styles.web}>
                  <li>
                    <a href="#">
                      <img src="/image/twitter.svg" alt='progress' /></a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/image/twitter.svg" alt='progress' />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="/image/twitter.svg" alt='progress' />
                    </a>
                  </li>
                </ul>
                <ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className={styles.book}>
          {
            Data?.map((e) => (
              <a href="#">
                <li  key={e.id}>
                  <p>{e.name}</p>
                </li>
              </a>
            ))
          }
        </ul>
        <h2 className={styles.h2}>Literature course</h2>
        <ul id='1' className={styles.boo}>
          {
            block?.map((e, i) => (
              <li key={i}>
                <img src={e.scr} alt="" />
                <div className={styles.div}>
                  <b>{e.tittle}</b>
                  <p><a href="#">{e.price}</a></p>
                </div>
              </li>
            ))
          }
        </ul>
          <div className={styles.butt}>
          <button className={styles.button} onClick={() =>handler(page - 1)}><i class="bi bi-chevron-compact-left"></i></button>
          <span>{page}</span>
        <button className={styles.button} onClick={() =>handler(page + 1)}><i class="bi bi-chevron-compact-right"></i></button>
          </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossOrigin="anonymous"></script>
    </>
  )
}

export default literatureCourse