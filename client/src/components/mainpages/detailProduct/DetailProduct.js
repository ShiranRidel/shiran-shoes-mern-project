import React, { useContext, useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState'
import ProductItem from '../utils/productItem/ProductItem'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
function DetailProduct() {
    const params = useParams()
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const addCart = state.userAPI.addCart
    const [detailProduct, setDetailProduct] = useState([])

    useEffect(() => {
        if (params.id) {

            products.forEach(product => {
                if (product._id === params.id) setDetailProduct(product)
            })
        }
    }, [params.id, products])

    if (detailProduct.length === 0) return null;

    return (
        <>
            <div className="detail">
                <div>
                    <Link to="/products#!" >
                        <Tooltip title="back to shop">
                            <IconButton>
                                <ArrowBackIcon className="bk" />
                            </IconButton>
                        </Tooltip>
                    </Link></div>
                <img src={detailProduct.images.url} alt="" />
                <div className="box-detail">
                    <div className="row">
                        <h3>{detailProduct.title}</h3>
                        {/* <h6>#id: {detailProduct.product_id}</h6> */}

                    </div>
                    <span>$ {detailProduct.price}</span>
                    &nbsp;&nbsp;
                    <p>{detailProduct.description}</p>
                    {/* <p>{detailProduct.content}</p> */}
                    <p>Sold: {detailProduct.sold}</p>
                    <Link to="/cart" className="cart"
                        onClick={() => addCart(detailProduct)}>
                        Buy Now
                    </Link>

                </div>
            </div>

            <div>
                <h2>Related products</h2>
                <div className="products">
                    {
                        products.map(product => {
                            return product.category === detailProduct.category
                                ? <ProductItem key={product._id} product={product} /> : null
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailProduct
