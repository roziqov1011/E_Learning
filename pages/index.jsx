import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.home__inner}>
            <div>
              <h1>Studying Online is now much easier</h1>
              <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
              <span>
                <Link href=''>
                  <button>Join free</button>
                </Link>
                <Link href=''>
                  <button>
                    <h5>
                      <Image src='/image/play__foto.svg' alt='play foto' width={40} height={40}/>
                    </h5>
                    <h6>Watch how it works</h6>
                  </button>
                </Link>
              </span>
            </div>
            
            <ul>
              <li>
                <h6>250K</h6>
                <p>Assisted Student</p>
              </li>
              <li>
                <h6>250K</h6>
                <p>Assisted Student</p>
              </li>
              <li>
                <h6>250K</h6>
                <p>Assisted Student</p>
              </li>
              <li>
                <h6>250K</h6>
                <p>Assisted Student</p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
