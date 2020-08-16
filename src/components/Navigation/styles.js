import styled from "styled-components"

export const ListWrapper = styled.ul`
  text-align: center;
  float: right;
  & li {
    list-style: none;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    transform: background-color 0.5s;
    & a {
      color: #21ceb5;
      font-weight: 700;
      font-size: 14px;
      transform: color 0.5s;
    }
  }
  & li:hover {
    background-color: #21ceb5;
    border-radius: 5px;
    & a {
      color: #e2e2e2;
    }
  }
`
export const Logo = styled.div`
  float: left;
  color: #21ceb5;
  padding: 10px;
  font-size: 25px;
  font-weight: 700;
  font-family: "Alex Brush", cursive;
`
