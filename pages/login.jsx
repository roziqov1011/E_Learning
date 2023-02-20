import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styles from '../styles/Login.module.scss'

function login() {
    const local = useRouter()
    const arr = []
    const login = (e) => {
        e.preventDefault()
        let userr = e.target.elements.username.value
        let pass = e.target.elements.password.value
        fetch('https://638208329842ca8d3c9f7558.mockapi.io/user', {
            method: 'GET',
            headers: {
                'Content-type': 'application/json', // qysi formatta yuborish
                'Accept': 'application/json', // qysi formatta uni qabul qilib olishi
                'Access-Control-Allow-Origin': '*' // ruxsat berish hammaga
            }
        })
            .then((res) => res.json())
            .then((data) => mapper(data))

        const mapper = (w) => {
            arr.push(w)
            console.log(arr.includes({id:2}));

            if (w.length > 0) {
                for (let i = 0; i < w.length; i++) {
                    if (w[i].userName == userr && w[i].pass == pass) {
                        local.push('/blog')
                        break
                    }
                    else{
                        e.target.elements.username.style.border = '1px solid red'
                        e.target.elements.password.style.border = '1px solid red'
                    }
                }
            } else {
                console.log('error');
            }
        }

    }




    return (
        <>
            <div className={styles.login}>
                <div className={styles.login__inner}>
                    <ul>
                        <li>
                            <Image src='/image/login__page.svg' alt='rasm' width={740} height={825} />
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
                            <form action="#" onSubmit={login}>
                                <label htmlFor="username">User name</label>
                                <input className={styles.input} type="text" placeholder='Enter your User name' id='username' name='username' />
                                <label htmlFor="password">Password</label>
                                <input className={`${styles.input} ${styles.input1}`} type="password" placeholder="Enter your Password" name='password' />
                                <b>
                                    <input type="checkbox" id='check' width={15} height={15} />
                                    <label htmlFor="check">Rememebr me</label>
                                </b>
                                <button className={styles.log} type='submit'>Login</button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default login