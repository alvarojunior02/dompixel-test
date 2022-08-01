import React from 'react';
import { ProductType } from '../../types/product';

import { 
  Container, 
  ListHeader,
  ItemIdContainer,
  ItemNameContainer,
  ItemCategoryContainer,
  ItemPriceContainer,
  ItemCreatedAtContainer,
  ItemActions,
  Text,
  ListItem
} from './styles';

interface ListProducts {
  products: Array<ProductType>
}

const ListProducts = ({products}: ListProducts) => {
  return (
    <Container>
    <ListHeader>
      <ItemIdContainer>
        <Text>{"ID"}</Text>
      </ItemIdContainer>
      <ItemNameContainer>
        <Text>{"Nome"}</Text>
      </ItemNameContainer>
      <ItemCategoryContainer>
        <Text>{"Categoria"}</Text>
      </ItemCategoryContainer>
      <ItemPriceContainer>
        <Text>{"Preço (R$)"}</Text>
      </ItemPriceContainer>
      <ItemCreatedAtContainer>
        <Text>{"Data de Criação"}</Text>
      </ItemCreatedAtContainer>
      <ItemActions>
        <Text>{"Ações"}</Text>
      </ItemActions>
    </ListHeader>
    {
      products.map((product, index) => {
        return (
          <ListItem
            key={index}
          > 
            <ItemIdContainer>
              <Text>{product.id}</Text>
            </ItemIdContainer>

            <ItemNameContainer>
              <Text>{product.name}</Text>
            </ItemNameContainer>

            <ItemCategoryContainer>
              <Text>{product.category}</Text>
            </ItemCategoryContainer>

            <ItemPriceContainer>
              <Text>{product.price}</Text>
            </ItemPriceContainer>

            <ItemCreatedAtContainer>
              <Text>{new Date(Date.parse(product.created_at)).toDateString()}</Text>
            </ItemCreatedAtContainer>

            <ItemActions>
              <Text>{"Ações"}</Text>
            </ItemActions>
          </ListItem>
        );  
      })
    }
  </Container>
  );
}

export default ListProducts;
