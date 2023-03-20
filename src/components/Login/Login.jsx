import React from 'react'
import c from "./Login.module.scss"
import logo from "../../Assets/img/texnomart-logo-removebg-preview.png"
import {FcGoogle} from "react-icons/fc"
import {FaApple} from "react-icons/fa"
const Login = () => {
  return (
    <div className={c.login__wrapper}>
        
        <div className={c.login__logo__wrapper}>
            <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div className={c.login__form__wrapper}>
            <div className={c.login__title}>
                <p>Login to E-investment</p>
            </div>
            <form action="" className={c.login__from}>
                <input type="email" className={c.login__form__input__email} placeholder="type your email" required />
                <input type="password" className={c.login__form__input__email} placeholder="type your password" required />
                
                <button type='submit'  className={c.login__submit__btn}>Log in</button>
                <p className={c.select__login__form__or}>or</p>
                <a href="#" className={c.login__with__google}>
                   <FcGoogle/>log in with  Google
                </a>
                <a href="#" className={c.login__with__google}>
                   <FaApple/>log in with  Apple
                </a>
            </form>
        </div>
    </div>
  )
}

export default Login