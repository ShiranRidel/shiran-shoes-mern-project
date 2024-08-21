import PaypalButton from '../cart/PaypalButton'

import { textAlign } from "@mui/system";
import emailjs from "emailjs-com";
import React, { useContext, useState, useEffect } from 'react';
import backround1 from './icon/backround1.jpeg'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useHistory } from "react-router-dom";




toast.configure()



export default function OrderContinue(props) {
    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal] = useState(0)
    const history = useHistory();

    useEffect(() => {
        const getTotal = () => {
            const total = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)

            setTotal(total)
        }

        getTotal()

    }, [cart])
   
    const tranSuccess = async (payment) => {
        const { paymentID, address } = payment;

        await axios.post('/api/payment', { cart, paymentID, address }, {
            headers: { Authorization: token }
        })
        setCart([])
        addToCart([])
        toast.success("You have successfully placed an order.", {
            position: toast.POSITION.TOP_CENTER
        })
          history.push("/products");
    }
    
    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_xxxxx', 'template_xxxxx', e.target, 'user_xxxxxxx')
            .then((result) => {
                console.log(result.text);
                toast(result.text + '  submited')
            }, (error) => {
                console.log(error.text);
            });
        history.push("/PaypalPayment");

    }
   
    return (
        <div style={{ backgroundImage: `url(${backround1})` }}>
            <div style={{ marginTop: '-14px' }}
            >


                <div className="w3-card-4" className="text_form" >
                    <h1>total={total} $</h1>
                    <form onSubmit={sendEmail}>
                        <div class="w3-container">
                            <h2>Please complete the following details for shipping</h2>
                        </div>
                        <div className="w3-container" >
                            <div>
                                <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="First Name" name="firstName" required />
                            </div>
                            <div>
                                <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="Last Name" name="LastName" required/>
                            </div>
                            <div>
                                <input type="email" className="w3-input w3-border w3-white" placeholder="Email Address" name="email" required/>
                            </div>

                            <div>
                                <input type="text" className="w3-input w3-border w3-white" placeholder="Phone Number" name="phone" required />
                            </div>
                            <div>
                                <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="Contry" name="contry" required />
                            </div>
                            <div>
                                <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="City" name="city" required />
                            </div>
                            <div>
                                <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="Street" name="street" required />
                            </div>
                            <div>
                                <input type="text" className="w3-input w3-border w3-white w3-transparent" placeholder="postal code" name="postal" required/>
                            </div>
                            <div >

                                <input type="submit" className="w3-btn" value="Send Message" class="w3-border w3-round w3-blue" ></input>
                   

                            </div>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

{/*   */ }