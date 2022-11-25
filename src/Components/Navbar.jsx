import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";

const Container = styled.div`
  height: 60px;
  background-color: #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoWrapper = styled.div``;
const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  color: #000;
`;

const SearchBar = styled.div`
  border: 1px solid #000;
  padding: 3px;
  display: flex;
  align-items: center;
  background-color: #fff;
  margin-left: 30px;
`;

const SearchInput = styled.input`
  border: none;
  margin-right: 5px;
  outline: none;
  font-size: 1rem;
  padding: 2px 5px;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
`;
const Item = styled.div`
  margin-right: 15px;
`;

const Button = styled.button`
  padding: 2px 7px;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  font-size: 1rem;
`;

const Text = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <Container>
      <SearchBar>
        <SearchInput></SearchInput>
        <SearchIcon />
      </SearchBar>
      <LogoWrapper>
        <Logo>Shopee</Logo>
      </LogoWrapper>
      <Options>
        <Item>
          <Button>SIGN IN</Button>
        </Item>
        <Item>
          <Button>LOG IN</Button>
        </Item>
        <Item>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartOutlinedIcon style={{ cursor: "pointer" }} />
          </Badge>
        </Item>
      </Options>
    </Container>
  );
};

export default Navbar;
