

import { Box, Button, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

import CartItems from './CartItems'
import TotalView from './TotalView'
import EmptyCart from './EmptyCart'


const Container = styled(Grid)(({ theme }) => ({
    padding: '30px 135px',

    [theme.breakpoints.down('md')]: {
        padding: '15px 0',
    }

}));


const Header = styled(Typography)`
    padding:15px 25px;
    background:#fff;
`

const ButtonWrapper = styled(Box)`
    padding:16px 22px;
    background:#fff;
    box-shadow: 0 -2px 10px 0 rgb(0 0 0/10%);
    border-top:1px solid #f0f0f0;
`

const StyledButton = styled(Button)`
    display:flex;
    margin-left:auto;
    background:#fb641b;
    color:#fff;
    width:250px;
    height:51px;
    border-radius:2px;
`

const LeftComponent = styled(Grid)(({ theme }) => ({
    paddingRight: '15px',

    [theme.breakpoints.down('md')]: {
        marginBottom: 15,
    }

}));


const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    return (
        <>
            {
                cartItems.length ?
                    <Container container>
                        <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                            <Box>
                                <Header>My Cart ({cartItems.length})</Header>
                            </Box>
                            {
                                cartItems.map(item => {
                                    return (
                                        <CartItems key={item._id} item={item} />
                                    )
                                })
                            }
                            <ButtonWrapper>
                                <StyledButton>Place Order</StyledButton>
                            </ButtonWrapper>
                        </LeftComponent>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalView cartItems={cartItems} />
                        </Grid>
                    </Container>
                    : <Box>
                        <EmptyCart />
                    </Box>
            }
        </>
    )
}

export default Cart;
