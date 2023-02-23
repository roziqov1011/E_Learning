import { Context } from '@/components/Context/Context'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'

function search() {
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
        <title>Search</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h1>Search </h1>
      </div>
    </>
  )
}

export default search