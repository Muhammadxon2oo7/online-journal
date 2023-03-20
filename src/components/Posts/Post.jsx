import React from 'react'
import {IoEyeSharp} from "react-icons/io5"
import {BiTime} from "react-icons/bi"
import {AiOutlineLike} from "react-icons/ai"
import {RiSendPlane2Fill} from "react-icons/ri"
import c from "./Post.module.scss"
const Post = ({image,title,dec,wiewrs,like,comment,time}) => {
  return (
    <div className={c.post__card}>
        <div className={c.post__card__img__wrapper}>
            <img src={image} alt="" />
        </div>
        <div className={c.post__info}>
            <div className={c.post__title}><p>{title}</p></div>
            <div className={c.post_dec}><p>{dec}</p><div className={c.post__like__wiewrs__time}>
                <div className={c.post__wiewrs}><p>{wiewrs} <IoEyeSharp/></p></div>
                <div className={c.post__time}>
                    <p>{time}<BiTime/></p>
                </div>
                <div className={c.post__like}>
                    <p>{like} <AiOutlineLike/></p>
                </div>
            </div>
            <div className={c.post__comment}>
                <textarea placeholder='enter your opinion' />
                <button>Send <RiSendPlane2Fill/></button>
            </div></div>
            
        </div>
        
    </div>
  )
}

export default Post