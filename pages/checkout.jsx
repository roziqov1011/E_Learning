import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import card1 from '../assets/images/paycard1.png'
import card2 from '../assets/images/paycard2.png'
import card3 from '../assets/images/paycard3.png'
import style from '../styles/Checkout.module.scss'
function checkout() {
  const [styled , setStyled ] = useState({})
  const [val , setVal ] = useState('')
  const [val2 , setVal2] = useState('')
  const formHandler = (e)=>{
    e.preventDefault()
    let styled = {}
    if(val.length === 16 ){
      styled ={
        border: '2px solid green'
      }
    }else if(val2.length === 16){
      styled ={
        border: '2px solid green'
      }
    }
    else{
      styled ={
        border: '2px solid red'
      }
    }
    setStyled(styled)
  }
  const inpVal1 = (e)=>{
    const val = e.target.value
    setVal(val)
  }


  const inpVal2 = (e)=>{
    const val2 = e.target.value
    setVal2(val2);
  }



  // const keyUpValue1 =(e)=>{
  //   console.log(e.target.value);

  // }
  return (
    <>
      <Head>
        <title>Checkout</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Roboto+Slab:wght@400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={style.checkout} id='checkout'>
        <section className={`${style.checkout__container} container`}>
          <section className={style.checkout__container__wrapper}>
            <main className={style.checkout__container__wrapper__left}>
              <div className={style.checkout__container__wrapper__left__title}>
                <h4>Checkout</h4>
                <h6>Card type</h6>
              </div>
              <ul className={style.checkout__container__wrapper__left__cards}>
                <li>
                  <Image src={card1} width={139} height={92.4} />
                </li>
                <li>
                  <Image src={card2} width={139} height={92.4} />
                </li>
                <li>
                  <Image src={card3} width={139} height={92.4} />
                </li>
              </ul>
              <form onSubmit={formHandler} action="#" className={style.checkout__container__wrapper__left__form}>
                <label  htmlFor="Name">Name on card</label>
                <input style={styled} onChange={inpVal1} type="text" placeholder='Enter name on Card' />
                <label htmlFor="Name">Card Number</label>
                <input style={styled} onChange={inpVal2} type="text" placeholder='Enter Card Number' />
                <section>
                  <div>
                    <label htmlFor="#">Expiration Date ( MM/YY )</label>
                    <br />
                    <input type="text" placeholder='Enter Expiration Date' />
                  </div>
                  <div>
                    <label htmlFor="#">CVC</label>
                    <br />
                    <input type="text" placeholder='Enter CVC' />
                  </div>
                </section>
                <div className={style.checkbox}>
                  <input type="checkbox" />
                  <label htmlFor="#">Save my information for faster checkout</label>
                </div>
                <button type='submit'>Confirm Payment</button>
              </form>
            </main>
            <main className={style.checkout__container__wrapper__right}>
              <span className={style.checkout__container__wrapper__right__title}>
                <h4>Summary</h4>
              </span>
              <section className={style.checkout__container__wrapper__right__text1}>
                <span>
                  <Image src='/image/checkoutRight.png' width={160} height={107} />
                </span>
                <span className={style.span}>
                  <b>adipising elit, sed do  tempor</b>
                  <p>Lorem ipsum dollar...</p>
                  <h4>$24.69</h4>
                </span>
              </section>
              <section className={style.checkout__container__wrapper_right__text2}>
                <span>
                  <Image src='/image/checkoutRight.png' width={160} height={107} />
                </span>
                <span className={style.span}>
                  <b>adipising elit, sed do  tempor</b>
                  <p>Lorem ipsum dollar...</p>
                  <h4>$24.69</h4>
                </span>
              </section>
              <ul className={style.checkout__container__wrapper__right__text3}>
                <li>
                  <h4>Subtotal</h4>
                  <h4>$51.38</h4>
                </li>
                <li>
                  <h4>Coupon Discount</h4>
                  <h4>0 %</h4>
                </li>
                <li>
                  <h4>TAX</h4>
                  <h4>5</h4>
                </li>
                <li className={style.fourth}>
                  <h4><b>Total</b></h4>
                  <h4><b>$56.38</b></h4>
                </li>
              </ul>
              <div>

              </div>
            </main>
          </section>
          <section className={style.checkout__container__main}>
            <span className={style.checkout__container__main__title}>
              <h3>Top Education offers and deals are listed here</h3>
              <Link href='/checkout'>See All</Link>
            </span>
            <ul className={style.checkout__container__main__list}>
              <li className={style.list__card1}>
                <h2>50%</h2>
                <b>Lorem ipsum dolor</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              </li>
              <li className={style.list__card2}>
                <h2>10%</h2>
                <b>Lorem ipsum dolor</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              </li>
              <li className={style.list__card3}>
                <h2>50%</h2>
                <b>Lorem ipsum dolor</b>
                <p>Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor
                  Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor</p>
              </li>
            </ul>
          </section>
        </section>
      </div>


      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>
    </>
  )
}

export default checkout