import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Home.module.scss'

function Header() {
  return (
    <>

      <header className={styles.header}>
        <div className={styles.container}>
          <Image src='/image/logo.png' alt='logo' width={114} height={83} />
          <ul>
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
            <button>Log In</button>
            <button>Sign Up</button>
          </ul>
        </div>

      </header>
    </>
  )
}

export default Header