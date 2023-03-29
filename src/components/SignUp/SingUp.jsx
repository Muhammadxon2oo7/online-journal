import React, { useState } from 'react'
import c from './SigUp.module.scss'
import logo from "../../Assets/img/texnomart-logo-removebg-preview.png"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import showPwdImg from '../../Assets/img/show__password.svg'
import hidePwdImg from '../../Assets/img/hide__password.svg';
import axios from 'axios'

const SingUp = () => {
    const [pwd, setPwd] = useState('');
    const [isRevealPwd, setIsRevealPwd] = useState(false);
    const [pwdtwo, setPwdtwo] = useState('');
    const [isRevealPwdtwo, setIsRevealPwdtwo] = useState(false);

    const formData = new FormData();

    const submitForm = async (e) => {
        e.preventDefault();
        const { file } = e.target;
        formData.append("files", file.files[0]);
        const res = await axios.post("http://localhost:4040/upload", formData);
        console.log(res);
    }

    return (
        <div className={c.signup__wrapper}>
            <div className={c.signup__logo__wrapper}>
                <a href="/"><img src={logo} alt="" /></a>
            </div>
            <div className={c.signup__form__wrapper}>
                <div className={c.signup__title}>
                    <p>Sign Up for your account</p>
                </div>
                <form onSubmit={submitForm} action="" className={c.signup__from}>
                    <input type="email" className={c.signup__form__input__email} name="email" placeholder="type your email" required />
                    <input type="text" className={c.signup__form__input__email} name="username" placeholder="type your username" required />
                    <div className={c.signup__form__input__password__wrapper}>
                        <input name="pwd"
                            placeholder="Enter Password"
                            type={isRevealPwd ? "text" : "password"}
                            value={pwd}
                            onChange={e => setPwd(e.target.value)} required />
                        <img
                            title={isRevealPwd ? "Hide password" : "Show password"}
                            src={isRevealPwd ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwd(prevState => !prevState)}
                        />
                    </div>
                    <input type="file" name="file" />
                    <div className={c.signup__form__input__password__wrapper}>
                        <input name="confirmpwd"
                            placeholder="confirm your Password"
                            type={isRevealPwdtwo ? "text" : "password"}
                            value={pwdtwo}
                            onChange={e => setPwdtwo(e.target.value)} required />
                        <img
                            title={isRevealPwdtwo ? "Hide password" : "Show password"}
                            src={isRevealPwdtwo ? hidePwdImg : showPwdImg}
                            onClick={() => setIsRevealPwdtwo(prevState => !prevState)}
                        />
                    </div>
                    <button type='submit' className={c.signup__submit__btn}>Sign Up</button>
                    <p className={c.select__signup__form__or}>or</p>
                    <a href="#" className={c.signup__with__google}>
                        <FcGoogle />Sign Up with  Google
                    </a>
                    <a href="#" className={c.signup__with__google}>
                        <FaApple />Sign Up with  Apple
                    </a>
                </form>
            </div>
        </div>
    )
}

export default SingUp