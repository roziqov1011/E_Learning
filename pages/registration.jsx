import { Context } from '@/components/Context/Context'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import styles from '../styles/Register.module.scss'

function register() {
    const local = useRouter()
    const {order, setOrder} = useContext(Context)

    const register= (e)=>{
        
        e.preventDefault()
        let mail = e.target.elements.mail.value
        let userr = e.target.elements.username.value
        let pass = e.target.elements.password.value
        if(mail.length > 5 && userr.length > 3 && pass.length >= 8){
            setOrder(true)
            fetch('https://638208329842ca8d3c9f7558.mockapi.io/user', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json', // qysi formatta yuborish
                        'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
                        'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
                    },
                    body: JSON.stringify({
                        userName: userr,
                        pass: pass,
                        mail: mail
                    })
                })
                    .then((res) => res.json())
                    .then((data) => console.table(data))
        }
        else{
            e.target.elements.mail.style.border = '2px solid red'
            e.target.elements.username.style.border = '2px solid red'
            e.target.elements.password.style.border = '2px solid red'
        }
    }

    return (
        <>
            <div className={styles.register}>
                <div className={styles.register__inner}>
                    <ul>
                        <li>
                            <Image src='/image/register.svg' alt='rasm' width={740} height={825} />
                            <h2>Lorem Ipsum is simply </h2>
                            <p>Lorem Ipsum is simply </p>
                        </li>
                        <li>
                            <h2>Welcome to Learning..!</h2>
                            <span>
                                <button onClick={() => local.push('/login')}>Login</button>
                                <button>Register</button>
                            </span>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            <form action="#" onSubmit={register}>
                                <label htmlFor="mail">Email</label>
                                <input className={styles.input} type="mail" placeholder='Enter your mail' id='mail' name='mail' />
                                <label htmlFor="username">User name</label>
                                <input className={styles.input} type="text" placeholder='Enter your User name' id='username' name='username' />
                                <label htmlFor="password">Password</label>
                                <input className={`${styles.input} ${styles.input1}`} type="password" placeholder="Enter your Password" name='password' />
                                <button className={styles.log} type='submit'>Register</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default register