import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../../redux/actions/productsAction'
import { Box, styled, Grid } from '@mui/material'
import ActionItem from './ActionItem'
import ProductDetails from './ProductDetails'

// this is used when we have fetch the data with help of url
import { useParams } from 'react-router-dom'

const Components = styled(Box)`
    background:#F0F0F0;
    margin-top:55px;
`

const Containers = styled(Grid)(({ theme }) => ({
    background: '#fff',
    display: 'flex',

    [theme.breakpoints.down('md')]: {
        margin: 0,
    }
}));


const RightContainer = styled(Grid)(({ theme }) => ({
    marginTop: '50px',
    paddingLeft: "70px",

    [theme.breakpoints.down('lg')]: {
        paddingLeft: '120px'
    }
}));


const DetailsView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductDetails(id))
        }
    }, [dispatch, id, product, loading])
    console.log(product);

    return (
        <Components>
            {
                product && Object.keys(product).length &&
                <Containers container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product} />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetails product={product} />
                    </RightContainer>
                </Containers>
            }
        </Components >
    )
}

export default DetailsView;
