import React, { useState } from 'react'
import { Box, Button, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/actions/cartAction'
import { payUsingPaytm } from '../services/api';
import { post } from '../../utils/Paytm'

const LeftComponent = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',

    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px',
    }

}));


const Image = styled('img')({

    padding: '15px'

})

const StyledButton = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    borderRadius: '2px',

    [theme.breakpoints.down('lg')]: {
        width: "46%",
    },
    [theme.breakpoints.down('sm')]: {
        width: "48%",
    },

}));

const ActionItem = ({ product }) => {


    const [quantity, setQuantity] = useState(1);

    const { id } = product;

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    }

    const buyNow = () => {
        let response = payUsingPaytm({ amount: 1500, email: 'patelVinit04042001@gmail.com' });
        let information = {
            action: 'https://securegw-stage.paytm.in',
            params: response
        }
        post(information);
    }

    return (
        <LeftComponent>
            <Box style={{
                padding: '15px 20px',
                border: '1px solid #f0f0f0',
                width: '90%',
            }}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant='contained' onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00' }}><ShoppingCartIcon />Add to Cart</StyledButton>
            <StyledButton variant='contained' onClick={() => buyNow()} style={{ background: '#fb541b' }}><FlashOnIcon />Buy Now!</StyledButton>
        </LeftComponent>
    )
}

export default ActionItem
