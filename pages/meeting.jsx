import { Context } from '@/components/Context/Context'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

function meeting() {
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
        <title>Meeting</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h1>meeting </h1>
      </div>
    </>
  )
}

export default meeting