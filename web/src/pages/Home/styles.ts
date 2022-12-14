import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.div`
  width: 90%;
  height: 10vh;

  padding: 5px;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  text-align: left;

  color: ${({ theme }) => theme.colors.textTitle};
`;

export const ButtonCreateProduct = styled.button`
  width: 20%;
  height: 50px;

  cursor: pointer;

  background-color: #000000;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
