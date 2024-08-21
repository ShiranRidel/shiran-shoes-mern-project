import React from 'react'
import node from '../../headers/icon/node.png'
import react from '../../headers/icon/react.png'
import mongo from '../../headers/icon/mongo.png'
import mui from '../../headers/icon/mui.png'
import html from '../../headers/icon/html.png'
import emailjs from '../../headers/icon/emailjs.png'
import peres from './1.png';
import jhon from './jbh_small.jpg';
import Zoom from 'react-reveal/Zoom'

function AboutUS() {
    return (
        <Zoom>
            <div >
                <br></br>
                <h1 style={{ textAlign: 'center' }}>About Me</h1>
                <p style={{ textAlign: 'center' }}>
                    An honest and reliable worker, I excel at juggling many responsibilities and problem-solving while maintaining <br />excellent interpersonal skills. Always eager to learn new things, I take what I have been taught and determine how to best apply it.
                </p>
                <h1 style={{ textAlign: 'center' }}>Education</h1>
                <p style={{ textAlign: 'center' }}>
                    <p>    <img src={jhon} alt="jhon" style={{ width: '80px' }} class="rounded-pill" />

                        <li>John Bryce - Full stack web developers</li></p>
                    <p>    <img src={peres} alt="peres" style={{ width: '80px' }} class="rounded-pill" />

                        <li>Peres Academic Center - Bachelor's degree - Management Information Systems, cyber</li></p>
                </p>


                <br></br>
                <h4 style={{ textAlign: 'center' }}>This project was built using the following technologies:</h4>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <img src={node} style={{ width: '16%', marginLeft: '7%' }} />
                <img src={html} style={{ width: '25%', marginLeft: '15%' }} />
                <img src={react} style={{ width: '10%', marginLeft: '15%' }} />
                <img src={mui} style={{ width: '12%', marginLeft: '9%', marginTop: '5%' }} />
                <img src={emailjs} style={{ width: '30%', marginLeft: '15%', marginTop: '5%' }} />
                <img src={mongo} style={{ width: '22%', marginLeft: '6%', marginTop: '5%' }} />


            </div>
        </Zoom>
    )
}

export default AboutUS
