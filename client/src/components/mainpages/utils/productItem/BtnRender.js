import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../../GlobalState'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Tooltip from '@mui/material/Tooltip';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function BtnRender({ product, deleteProduct }) {
    const state = useContext(GlobalState)
    const [isAdmin] = state.userAPI.isAdmin
    const addCart = state.userAPI.addCart


    return (
        <div className="row_btn">
            {
                isAdmin ?
                    <>
                        <Link id="btn_buy" to="#!"
                            onClick={() => deleteProduct(product._id, product.images.public_id)}>
                            <Tooltip title="delet product">

                                <DeleteForeverIcon />
                            </Tooltip>

                        </Link>
                        <Link id="btn_view" to={`/edit_product/${product._id}`}>
                            <Tooltip title="edit product">

                                <EditIcon />
                            </Tooltip>
                        </Link>
                    </>
                    : <>
                        <Link id="btn_buy" to="#!" onClick={() => addCart(product)}>
                            <Tooltip   title="add to cart">
                                <AddShoppingCartIcon  />
                            </Tooltip>
                        </Link>
                        <a href={`/detail/${product._id}`} id="btn_buy" >
                            <Tooltip title="view">
                                <VisibilityIcon />
                            </Tooltip>
                        </a>


                    </>
            }

        </div>
    )
}

export default BtnRender
