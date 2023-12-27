

import { Box, styled } from '@mui/material'
import React from 'react'
import Slide from './Slide'


const Image = styled("img")({
    width: "205px"
})

const Components = styled(Box)`
    display:flex;
`

const LeftComponets = styled(Box)(({ theme }) => ({
    width: "83%",
    [theme.breakpoints.down('md')]: {
        width: "100%"
    }
}));

const RightComponets = styled(Box)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: "5px",
    marginTop: '10px',
    marginLeft: '10px',
    width: '17%',
    textAlign: 'center',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MidSlide = ({ products, title, timer }) => {

    const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';
    return (
        <Components>
            <LeftComponets>
                <Slide products={products} title={title} timer={timer} />
            </LeftComponets>
            <RightComponets>
                <Image src={adURL} alt="ad" />
            </RightComponets>

        </Components>
    )
}

export default MidSlide
