import React from 'react'
import c from './SigUp.module.scss'
import logo from "../../Assets/img/texnomart-logo-removebg-preview.png"
import {FcGoogle} from "react-icons/fc"
import {FaApple} from "react-icons/fa"
const SingUp = () => {
  return (
    <div className={c.signup__wrapper}>
        <div className={c.signup__logo__wrapper}>
            <a href="/"><img src={logo} alt="" /></a>
        </div>
        <div className={c.signup__form__wrapper}>
            <div className={c.signup__title}>
                <p>Sign Up for your account</p>
            </div>
            <form action="" className={c.signup__from}>
                <input type="email" className={c.signup__form__input__email} placeholder="type your email" required />
                <input type="password" className={c.signup__form__input__email} placeholder="type your password" required />
                <input type="text" className={c.signup__form__input__email} placeholder="type your username" required />
                
                <button type='submit'  className={c.signup__submit__btn}>Sign Up</button>
                <p className={c.select__signup__form__or}>or</p>
                <a href="#" className={c.signup__with__google}>
                   <FcGoogle/>Sign Up with  Google
                </a>
                <a href="#" className={c.signup__with__google}>
                   <FaApple/>Sign Up with  Apple
                </a>
            </form>
        </div>
    </div>
  )
}

export default SingUp