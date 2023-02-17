import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const ourData = [
    {
      id: 1,
      number: '15K+',
      title: 'Students'
    },
    {
      id: 2,
      number: '75%',
      title: 'Total success'

    },
    {
      id: 3,
      number: '35',
      title: 'Main questions'
    },
    {
      id: 4,
      number: '26',
      title: 'Chief experts'
    },
    {
      id: 5,
      number: '16',
      title: 'Years of experience'
    },
  ]
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
                      <Image src='/image/play__foto.svg' alt='play foto' width={40} height={40} />
                    </h5>
                    <h6>Watch how it works</h6>
                  </button>
                </Link>
              </span>
            </div>

            <ul>
              <li>
                <Image src='/image/progress.svg' alt='progress' width={89} height={89} />
              </li>
              <li>
                <Image src='/image/calendar.svg' alt='progress' width={49} height={49} />
                <span>
                  <h6><b>250K</b></h6>
                  <p>Assisted Student</p>
                </span>
              </li>
              <li>
                <Image src='/image/message.svg' alt='progress' width={49} height={49} />
                <span>
                  <h6>Congratulations</h6>
                  <p>Your admission completed</p>
                </span>
              </li>
              <li>
                <b>
                  <Image src='/image/odamcha.svg' alt='progress' width={49} height={49} />
                </b>
                <span>
                  <h6>User Experience Class</h6>
                  <p>Today at 12.00 PM</p>
                  <Link href='/'>
                    <button>Join Now</button>
                  </Link>
                </span>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.main__inner}>
            <h3>Our Success</h3>
            <p>Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices eu ornare tristique vel nisl orci. </p>
            <ul>
              {
                ourData?.map((e) => (
                  <li key={e.id}>
                    <h4>{e.number}</h4>
                    <p>{e.title}</p>

                  </li>
                ))
              }
            </ul>
          </div>

          <div className={styles.main__mainner}>
            <h4>All-In-One <span>Cloud Software.</span></h4>
            <p>TOTC is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>
            <ul>
              <li>
                <div className={styles.divcha}>
                  <div className="img">
                    <Image src='/image/document.svg' alt='document' width={33} height={46} />
                  </div>
                  <h5>Online Billing, Invoicing, & Contracts</h5>
                  <p>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
              </li>
              <li>
                <div className={styles.divcha}>
                  <div className="img">
                    <Image src='/image/user.svg' alt='document' width={55} height={44} />
                  </div>
                  <h5>Easy Scheduling & Attendance Tracking</h5>
                  <p>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </div>
              </li>
              <li>
                <div className={styles.divcha}>
                  <div className="img">
                    <Image src='/image/document.svg' alt='document' width={33} height={46} />
                  </div>
                  <h5>Customer Tracking</h5>
                  <p>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </div >
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.totc}>
          <div>
            <h2>What is <span>TOTC?</span></h2>
            <p>TOTC is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
            <ul>
              <li>
                <h3>FOR INSTRUCTORS</h3>
                <button>Start a class today</button>
              </li>
              <li>
                <h3>FOR STUDENTS</h3>
                <button>Enter access code</button>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}
