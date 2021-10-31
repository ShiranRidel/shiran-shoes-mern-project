import React, {useContext} from 'react'
import {Switch, Route,BrowserRouter} from 'react-router-dom'
import Products from './products/Products'
import DetailProduct from './detailProduct/DetailProduct'
import Login from './auth/Login'
import Register from './auth/Register'
import OrderHistory from './history/OrderHistory'
import OrderDetails from './history/OrderDetails'
import Cart from './cart/Cart'
import NotFound from './utils/not_found/NotFound'
import Loading from './utils/loading/Loading'
import Categories from './categories/Categories'
import CreateProduct from './createProduct/CreateProduct'
import home from '../home/HomePage'
import {GlobalState} from '../../GlobalState'
import Contact from './contactUs/ContactUS'
import AboutUs from './aboutUS/AboutUs'
import PaypalPayment from './PaypalPayment/PaypalPayment'
import OrderContinue from './OrderContinue/OrderContinue'


function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    


    return (

        <Switch>
            <Route path="/" exact component={home} />
            <Route path="/contactus" exact component={Contact} />
            <Route path="/AboutUs" exact component={AboutUs} />
            <Route path="/OrderContinue" exact component={OrderContinue} />
            <Route path="/PaypalPayment" exact component={PaypalPayment} />
            <Route path="/products" exact component={Products} />

            <Route path="/detail/:id" exact component={DetailProduct} />

            <Route path="/login" exact component={isLogged ? Loading : Login} />
            <Route path="/register" exact component={isLogged ? Loading : Register} />

            <Route path="/category" exact component={isAdmin ? Categories : Loading} />
            <Route path="/create_product" exact component={isAdmin ? CreateProduct : Loading} />
            <Route path="/edit_product/:id" exact component={isAdmin ? CreateProduct : Loading} />

            <Route path="/history" exact component={isLogged ? OrderHistory : Loading} />
            <Route path="/history/:id" exact component={isLogged ? OrderDetails : Loading} />

            <Route path="/cart" exact component={Cart} />


            <Route path="*" exact component={NotFound} />
        </Switch>
    //   </BrowserRouter>
    )
}

export default Pages
