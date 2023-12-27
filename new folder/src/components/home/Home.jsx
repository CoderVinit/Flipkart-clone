import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";
import { getProducts } from "../../redux/actions/productsAction";
import { useDispatch, useSelector } from "react-redux";
import Slide from "./Slide";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const HomeBox = styled(Box)`
  padding: 10px;
  background: #f2f2f2;
`;


const Home = () => {
  const dispatch = useDispatch();

  const { products } = useSelector(state => state.getProducts);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch])

  return (
    <>
      <Navbar />
      <HomeBox>
        <Banner />
        <MidSlide products={products} title="Deals of the Day" timer={true} />
        <MidSection />
        <Slide products={products} title="Discounts for You" timer={false} />
        <Slide products={products} title="Suggested Items" timer={false} />
        <Slide products={products} title="Top Selection" timer={false} />
        <Slide products={products} title="Reccomonded Items" timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's Top Picks" timer={false} />
        <Slide products={products} title="Top Deal on Accessories" timer={false} />
      </HomeBox>
    </>
  );
};

export default Home;
