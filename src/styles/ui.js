import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  box-shadow: 0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -2px rgba(0,0,0,.05)!important;
  padding: 1em;
  border-radius: 6px;

  &:nth-of-type(2) {
    margin: 0 1em;
  }
 
  h1 {
    margin: 0 0 .2em 0;
    text-align: left;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1em 0 0 0;
`;

export const Item = styled.li`
  background-color: #E5E7EB;
  padding: 1em;
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: 1em;
  }
`;