import styled from "styled-components"

export const LayoutWrapper = styled.div`
  background-color: #fff;
  color: #585858;
  & ul {
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  & .anticon {
    margin: 5px;
    &:hover {
      transform: scale(1.5);
    }
  }
  .med-theme {
    background-color: #efefee;
    border-radius: 20px;
  }
`
