import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`;
export const Title = styled.h2`
  margin-bottom: 10px;
  text-align: center;
  font-size: xxx-large;
`;
export const Text = styled.p`
  font-size: x-large;
`;
export const Package = styled.div`
padding: 40px;
flex-direction: column;
`
export const SecondTitle = styled.h3`
font-size: xx-large;
`
export const Item = styled.li`
font-size: x-large;

&:not(:last-child){
  margin-bottom: 10px;
}
`
export const SecondText = styled.p`
font-size: x-large;
margin-right: 20px;
`
export const SecondItem = styled.li`
display: flex;
`
export const Link = styled(NavLink)`
font-size: x-large;
color: black;
&:hover{
  color:red;
}
`