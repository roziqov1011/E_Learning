import { Context } from '@/components/Context/Context'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useRef, useState } from 'react'
import styles from '../styles/Cource.module.scss'

function course() {
  const { order, setOrder } = useContext(Context)
  const local = useRouter()
  // useEffect(()=>{
  //   if(order == false){
  //     local.push('/')
  //   }
  // },[])

  const data = [
    {
      id: 1,
      img: 'https://media.cnn.com/api/v1/images/stellar/prod/220715121407-macbook-air-m2-review-1.jpg?c=original',
      title: 'AWS Certified Solutions Architect',
      lesson: 5
    },
    {
      id: 2,
      img: 'https://helios-i.mashable.com/imagery/reviews/07qLER2Lhqh3jGyBzBRrFBO/hero-image.fill.size_1248x702.v1623389216.jpg',
      title: 'AWS Certified Solutions Architect',
      lesson: 3
    },
    {
      id: 3,
      img: 'https://s.yimg.com/uu/api/res/1.2/pHtSIoVk_CptFqmRsgNBjg--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/cc201060-8ffe-11ea-aff7-9444289fde6e.cf.jpg',
      title: 'AWS Certified Solutions Architect',
      lesson: 5
    },
    {
      id: 4,
      img: 'https://s.yimg.com/uu/api/res/1.2/pHtSIoVk_CptFqmRsgNBjg--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/cc201060-8ffe-11ea-aff7-9444289fde6e.cf.jpg',
      title: 'AWS Certified Solutions Architect',
      lesson: 5
    },
    {
      id: 5,
      img: 'https://s.yimg.com/uu/api/res/1.2/pHtSIoVk_CptFqmRsgNBjg--~B/aD0xMjAwO3c9MTgwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-05/cc201060-8ffe-11ea-aff7-9444289fde6e.cf.jpg',
      title: 'AWS Certified Solutions Architect',
      lesson: 5
    }
  ]
  const [count, setCount] = useState(0)
  const sliderWrap = useRef()
  useEffect(() => {
    sliderWrap.current.style.transform = `translate(${count}%)`
    sliderWrap.current.style.transition = `0.4s ease-in-out all`
  }, [count])
  console.log(count);

  const rangeee = useRef()
  useEffect(()=>{
    data?.map((e)=>{
      const foiz = e.lesson * 100 / 7
      rangeee.current.style.width = `${Math.floor(foiz)}%`
      rangeee.current.style.height = '10px'
      rangeee.current.style.background = '#49BBBD'
    })
    console.log(Math.floor());
  }, [])


  return (

    <>
      <Head>
        <title>Course</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.course}>
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
    </>
  )
}

export default course