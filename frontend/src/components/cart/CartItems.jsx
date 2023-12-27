
import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { addellipsis } from '../../utils/Common-utils'
import ButtonGroup from './ButtonGroup'
import { removeFromCart } from '../../redux/actions/cartAction'
import { useDispatch } from 'react-redux'



const Component = styled(Box)`
    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`

const LeftComponent = styled(Box)`
    margin:20px;
    display:felx;
    felx-direction:column;
`

const SmallText = styled(Typography)`
    color:#878787;
    font-size:16px;
    margin-top:10px;
`

const Remove = styled(Button)`
    margin-top:20px;
    font-size:16px;
    color:#000;
    font-weight:600;
`

const CartItems = ({ item }) => {
    const dispatch = useDispatch();
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

    const handleRemove = (id) => {
        dispatch(removeFromCart(id))
    }

    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ height: 110, width: 110 }} />
                <ButtonGroup />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addellipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller:RetailNet
                    <Box component='span'><img src={fassured} alt="logo" style={{ width: 50, marginLeft: 10 }} /></Box>
                </SmallText>
                <Typography style={{ margin: '20px 0px' }}>
                    <Box component='span' style={{ fontWeight: 600, fontSize: 18 }}>₹{item.price.cost}</Box>&nbsp;
                    <Box component='span' style={{ color: "#878787" }}><strike> ₹{item.price.mrp}</strike> </Box>&nbsp;
                    <Box component='span' style={{ color: "#388E3C" }}>{item.price.discount} off</Box>&nbsp;
                </Typography>
                <Remove onClick={() => handleRemove(item.id)}>Remove</Remove>
            </Box>
        </Component>
    )
}

export default CartItems
