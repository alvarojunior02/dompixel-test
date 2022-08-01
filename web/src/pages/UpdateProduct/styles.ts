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

export const Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  text-align: left;

  color: ${({ theme }) => theme.colors.textTitle};
`;

export const Label = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;

export const Input = styled.input`
  width: 240px;
  height: 40px;

  border: 2px solid #000000;

  text-align: center;

  margin: 10px;
  padding: 5px;
`;

export const ButtonUpdateProduct = styled.button`
  width: 250px;
  height: 50px;

  cursor: pointer;

  background-color: #000000;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  padding: 5px;
`;

export const BackButton = styled.button`
  width: 250px;
  height: 50px;

  cursor: pointer;

  background-color: #ffffff;
  color: #000000;
  border: 2px solid #000000;

  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px;
  padding: 5px;
`;

export const ButtonText = styled.p`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
`;
