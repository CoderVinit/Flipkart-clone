import React, { useState, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import { Box, Button, TextField, Typography, styled } from "@mui/material";
import { authenticateSignup, authenticateLogin } from "../services/api";

import { DataContext } from "../../context/DataProvider";

const Conatiner = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url("https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png")
    center 85% no-repeat;
  height: 81%;
  width: 25%;
  padding: 45px 35px;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0px 35px;
  padding-bottom: 10px;
  flex: 1;

  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;
const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;
const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  color: #2874f0;
  text-align: center;
  fint-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, WishList and Recommandations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new hear! ",
    subHeading: "signup with your mobile number to get started",
  },
};

const signupInitalValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValues = {
  username: "",
  password: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [signup, setSignup] = useState(signupInitalValues);
  const [login, setLogin] = useState(loginInitialValues);
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const { setAccount } = useContext(DataContext);
  const [error, setError] = useState(false);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const handleChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    const response = await authenticateSignup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginUser = async () => {
    const response = await authenticateLogin(login);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset", maxHeight: "unset" } }}
    >
      <Conatiner>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5" sx={{ color: "white" }}>
              {account.heading}
            </Typography>
            <Typography sx={{ color: "white" }}>
              {account.subHeading}
            </Typography>
          </Image>
          {account.view === "login" ? (
            <Wrapper>
              <TextField
                label="Enter your Username"
                onChange={(e) => {
                  onValueChange(e);
                }}
                name="username"
                variant="standard"
              />

              {error && <Error>Please Enter valid Username and password</Error>}
              <TextField
                label="Enter your Password"
                onChange={(e) => {
                  onValueChange(e);
                }}
                name="password"
                variant="standard"
              />
              <Text>
                By contnuing , you agree to flipkart terms of use and Privacy
                Policy
              </Text>
              <LoginButton onClick={() => loginUser()}>Login</LoginButton>
              <Typography
                style={{ textAlign: "center", opacity: 0.6, fontWeight: 600 }}
              >
                OR
              </Typography>
              <RequestOTP>Request OTP</RequestOTP>
              <CreateAccount onClick={() => toggleSignup()}>
                New to Flipkart, Create an Account
              </CreateAccount>
            </Wrapper>
          ) : (
            <Wrapper>
              <TextField
                id="standard-basic"
                label="Enter FirstName"
                variant="standard"
                onChange={(e) => handleChange(e)}
                name="firstname"
              />
              <TextField
                id="standard-basic"
                label="Enter LastName"
                variant="standard"
                onChange={(e) => handleChange(e)}
                name="lastname"
              />
              <TextField
                id="standard-basic"
                label="Enter UserName"
                variant="standard"
                onChange={(e) => handleChange(e)}
                name="username"
              />
              <TextField
                id="standard-basic"
                label="Enter your Email"
                variant="standard"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter your Password"
                variant="standard"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <TextField
                id="standard-basic"
                label="Enter your Phone"
                variant="standard"
                name="phone"
                onChange={(e) => handleChange(e)}
              />

              <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
            </Wrapper>
          )}
        </Box>
      </Conatiner>
    </Dialog>
  );
};

export default LoginDialog;
