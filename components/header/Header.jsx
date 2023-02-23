import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import styles from '../../styles/Home.module.scss'
import { Context } from '../Context/Context'

function Header() {
  const local = useRouter()
  const {order,setOrder} = useContext(Context)
  return (
    <>
      <header className={local.pathname == '/login' || local.pathname == '/registration'? `${styles.none}` : `${styles.header}`}>
        <div className={styles.container}>
          <Link href='/'>
            <Image src='/image/logo.png' alt='logo' width={114} height={83} />
          </Link>
          <ul className={local.pathname != '/' ? `${styles.coll}` : ''}>
            <Link href='/'>
              <li>Home</li>
            </Link>
            <Link href='/course'>
              <li>Cources</li>
            </Link>
            <Link href=''>
              <li>Careers</li>
            </Link>
            <Link href='/blog'>
              <li>Blog</li>
            </Link>
            <Link href=''>
              <li>About Us</li>
            </Link>
            <button className={order == true ? styles.none : ''} onClick={()=>local.push('/login')}>Log In</button>
            <button className={order == true ? styles.none : ''} onClick={()=>local.push('/registration')}>Sign Up</button>
          </ul>
        </div>
      </header>
    </>
  )
}

export default Header