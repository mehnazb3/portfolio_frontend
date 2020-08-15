import styled from 'styled-components';

export const ListWrapper = styled.ul`
  text-align: center;
  & li {
    list-style: none;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    transform: background-color 0.5s;
    & a {
        color: #21CEB5;
        font-weight: 700;
        font-size: 14px;
        transform: color 0.5s;
    }
  }
  & li:hover {
    background-color: #21CEB5;
    border-radius: 5px;
    & a {
      color: #fff;
    }
  }
  
`;