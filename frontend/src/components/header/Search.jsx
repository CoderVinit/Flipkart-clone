import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from 'react-redux'
import { getProducts } from '../../redux/actions/productsAction'
import { Link } from 'react-router-dom'

const SearchContainer = styled(Box)`
  background: #fff;
  width: 38%;
  border-radius: 2px;
  margin-left: 20px;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  width: 100%;
  padding-left: 20px;
`;
const SearchIconWrapper = styled(Box)`
  color: blue;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

const ListWrapper = styled(List)`
  position:absolute;
  background:#fff;
  color:#000;
  margin-top:36px; 
`

const Search = () => {
  const [text, setText] = useState("");

  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  const getText = (text) => {
    setText(text);
  }

  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for Products , Brands and More" onChange={(e) => getText(e.target.value)} value={text} />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      {
        text &&
        <ListWrapper>
          {
            products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product) => {
              return (
                <ListItem>
                  <Link to={`/product/${product.id}`}
                    onClick={() => setText("")}
                    style={{ textDecoration: 'none', color: 'inherit' }}
                  >
                    {product.title.longTitle}
                  </Link>
                </ListItem>
              )
            })
          }
        </ListWrapper>
      }
    </SearchContainer>
  );
};

export default Search;
