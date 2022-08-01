import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 80vh;

  scroll-behavior: smooth;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  border: 2px solid #000000;

  color: ${({ theme }) => theme.colors.text};
`;

export const ListHeader = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.backgroundHeaderList};
`;

export const ListItem = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const ItemIdContainer = styled.div`
  width: 5%;
  height: 100%;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000000;
`;

export const ItemNameContainer = styled.div`
  width: 20%;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000000;
`;

export const ItemCategoryContainer = styled.div`
  width: 25%;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000000;
`;

export const ItemPriceContainer = styled.div`
  width: 15%;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000000;
`;

export const ItemCreatedAtContainer = styled.div`
  width: 15%;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000000;
`;

export const ItemActions = styled.div`
  width: 20%;
  height: 100%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid #000000;
`;

export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
`;
