import React from 'react'
import { Typography, Box, styled, Table, TableBody, TableRow, TableCell } from '@mui/material'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';



const SmallText = styled(Box)`
    font-size:14px;
    vertical-align:baseline;
    & > p{
        font-size:14px;
        margin-top:10px;
    }
`

const Badge = styled(LocalOfferIcon)`
    margin-right:10px;
    color:#00cc00;
    font-size:20px;
`

const ColumnText = styled(TableRow)`
font-size:14px;
vertical-align:baseline;
    & > td{
        font-size:14px;
        margin-top:10px;
        border:none;
    }
`

const ProductDetails = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

    const date = new Date(new Date().getTime() + (5 * 24 * 60 * 60 * 1000));
    return (
        <>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{ color: '#878787', fontSize: 14, marginTop: 5 }}>8 ratings & 1 review
                <Box component='span'><img src={fassured} alt='assured' style={{ width: 77 }} /></Box>
            </Typography>
            <Box component='span' style={{ fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;
            <Box component='span' style={{ color: "#878787" }}><strike> ₹{product.price.mrp}</strike> </Box>&nbsp;
            <Box component='span' style={{ color: "#388E3C" }}>{product.price.discount} off</Box>&nbsp;
            <Typography>Available Offers</Typography>
            <SmallText>
                <Typography><Badge />10% off on Bank of Baroda Credit Card Txns, up to ₹1,500 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />10% off on Bank of Baroda Credit Card EMI Txns, up to ₹2,000 on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />10% off on ICICI Bank Debit Card Txns, up to ₹1250, on orders of ₹5,000 and above T&C</Typography>
                <Typography><Badge />Get extra 3% off (price inclusive of cashback/coupon) T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Deliverd by {date.toDateString()} | ₹40 </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Warrenty</TableCell>
                        <TableCell>No Warrenty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Seller</TableCell>
                        <TableCell >
                            <Box component='span' style={{ color: '#2874f0' }}>SuperComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View More Seller Starting From ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="flipkarcoin" style={{ width: 350 }} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: "#878787" }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </>
    )
}

export default ProductDetails
