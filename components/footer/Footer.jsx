import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../../styles/Footer.module.scss'

function Footer() {
  const local = useRouter()
  return (
    <footer>
      <div className={local.pathname == '/login' || local.pathname == '/registration' ? `${styles.none}` : `${styles.footer}`}>
        <div className={styles.container}>
          <div className={styles.footer__logo}>
            <Image src='/image/footer__logo.png' alt='footer__logo' width={94} height={70}/>
            <hr />
            <h4>Virtual Class for Zoom</h4>
          </div>

          <div className={styles.footer__inner}>
            <h4>Subscribe to get our Newsletter</h4>
            <span>
              <input type="mail" name="" id="" placeholder='Your email'/>
              <button>Subscribe</button>
            </span>
          </div>

          <ul>
            <li>Careers</li>
            <hr />
            <li>Privacy Policy</li>
            <hr />
            <li>Terms & Conditions</li>
          </ul>
          <p>© 2021 Class Technologies Inc. </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer