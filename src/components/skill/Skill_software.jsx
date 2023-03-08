import React from 'react'
import { Carousel } from 'react-carousel3';
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import nodeJs from '../../assets/node_js.png'
import postgres from '../../assets/postgres.png'
import git from '../../assets/git.png'
import jQuery from '../../assets/jQuery.png'
import Bootstrap from '../../assets/Bootstrap.webp'
import vite from '../../assets/vite.png'
import net from '../../assets/net.png'
import csharp from '../../assets/csharp.png'

const Skill_software = () => {
    
    return (
        <div className='carousel_container container grid'>
            <Carousel   yOrigin={48}  yRadius={130} autoPlay={true}>
                <div className='carousel__img-html' key={1} >
                    <img className='carousel__img-html' alt="" src={html} />
                </div>
                <div className='carousel__img-css' key={2} >
                    <img className='carousel__img-css' alt="" src={css} />
                </div>
                <div className='carousel__img-js' key={3}>
                    <img className='carousel__img-js' alt="" src={js} />
                </div>
                <div className='carousel__img-react' key={4}>
                    <img className='carousel__img-react' alt="" src={react} />
                </div>
                <div className='carousel__img-redux' key={5} >
                    <img className='carousel__img-redux' alt="" src={redux} />
                </div>
                <div className='carousel__img-nodeJs' key={6}>
                    <img className='carousel__img-nodeJs' alt="" src={nodeJs} />
                </div>
                <div className='carousel__img-postgres' key={7}>
                    <img className='carousel__img-postgres' alt="" src={postgres} />
                </div>
                <div className='carousel__img-git' key={8}>
                    <img className='carousel__img-git' alt="" src={git} />
                </div>
                <div className='carousel__img-jQuery' key={9} >
                    <img className='carousel__img-jQuery' alt="" src={jQuery} />
                </div>
                <div className='carousel__img-bootstrap' key={10}>
                    <img className='carousel__img-bootstrap' alt="" src={Bootstrap} />
                </div>
                <div className='carousel__img-vite' key={11}>
                    <img className='carousel__img-vite' alt="" src={vite} />
                </div>
                <div className='carousel__img-net' key={12}>
                    <img className='carousel__img-net' alt="" src={net} />
                </div>
                <div className='carousel__img-csharp' key={13}>
                    <img className='carousel__img-csharp' alt="" src={csharp} />
                </div>
            </Carousel>
        </div>
    )
}

export default Skill_software