import { Badge, Box, Button, Typography } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import React, { useState, useContext } from "react";
import LoginDialog from "../login/LoginDialog";
import styled from "@emotion/styled";
import { Link } from 'react-router-dom'
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import { useSelector } from "react-redux";

const WrapperButtons = styled(Box)`
  display: flex;
  align-items: center;
  gap: 50px;
  margin-left: 30px;
`;

const CartBox = styled(Link)(({ theme }) => ({
  display: 'flex',
  color: 'inherit',
  textDecoration: 'none',

}));


const LoginButtons = styled(Button)`
  color: #2874f0;
  background-color: white;
  font-weight: 600;
  padding: 5px 40px;
  height: 32px;
  text-transform: none;
  box-shadow: none;
  border-radius: 2px;
`;

const CustomButtons = () => {
  const { cartItems } = useSelector(state => state.cart);
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <WrapperButtons>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButtons variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButtons>
      )}
      <Typography>Become a Seller</Typography>
      <Typography>More</Typography>
      <CartBox to='/cart'>
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </CartBox>
      <LoginDialog open={open} setOpen={setOpen} />
    </WrapperButtons>
  );
};

export default CustomButtons;
