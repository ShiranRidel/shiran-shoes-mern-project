import React, { useContext, useState, useEffect } from 'react'
import { GlobalState } from '../../../GlobalState'
import axios from 'axios'
import PaypalButton from './PaypalButton'
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import OrderContinue from '../OrderContinue/OrderContinue';
toast.configure()

function Cart() {
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

    const addToCart = async (cart) => {
        await axios.patch('/user/addcart', { cart }, {
            headers: { Authorization: token }
        })
    }


    const increment = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity += 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const decrement = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.quantity === 1 ? item.quantity = 1 : item.quantity -= 1
            }
        })

        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id => {
        if (window.confirm("Do you want to delete this product?")) {
            cart.forEach((item, index) => {
                if (item._id === id) {
                    cart.splice(index, 1)
                }
            })

            setCart([...cart])
            addToCart(cart)
        }
    }

    const tranSuccess = async (payment) => {
        const { paymentID, address } = payment;

        await axios.post('/api/payment', { cart, paymentID, address }, {
            headers: { Authorization: token }
        })

        setCart([])
        addToCart([])
        toast("You have successfully placed an order.")
        history.push("/products");

    }


    if (cart.length === 0)
        return <h2 style={{ textAlign: "center", fontSize: "5rem" }}>Cart Empty</h2>

    return (
        <>
           <div className="total" style={{position:'sticky'}}>
                <h3>Total: $ {total}</h3>
                <button class="w3-border w3-round w3-blue w3-medium"><Link to="/OrderContinue">complete your order</Link></button>
            </div>
        <div className="products">


            {
                cart.map(product => (
                    <Card className="product_card" sx={{ minHeight: 515, maxWidth: 355 }} key={product._id}>
                        <div className="delete" style={{position:'static'}}
                            onClick={() => removeProduct(product._id)}>
                            <DeleteForeverRoundedIcon /></div>
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.images.url}
                            alt=""
                        />

                        <CardContent>
                            
                            <Typography variant="body2" color="text.secondary">
                            <div className="footer1">
                                    <h3 className={"back"} style={{marginTop:'-1px'}}>$ {product.price * product.quantity}</h3>
                                    <div className={"back"}>
                                    <span> <button onClick={() => decrement(product._id)}>  <RemoveCircleIcon style={{ fontSize: '19px' }} /></button>
                                    <b style={{fontSize:18,fontFamily:'Luminari, fantasy'}}>{product.quantity}</b>
                                    <button onClick={() => increment(product._id)}> <AddCircleIcon  style={{ fontSize: '19px' }} /></button></span>
                                    </div>
                                    </div>
                                    <Typography gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                                <p>{product.description}</p>
                                <div>
                               
                                </div>

                            </Typography>
                        </CardContent>
                    </Card>
                ))
            }

        </div>

</>
    )
}

export default Cart

                                      

