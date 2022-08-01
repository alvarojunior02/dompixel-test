import React from 'react';
import { ProductType } from '../../types/product';

import iconEdit from "../../assets/iconEdit.png";
import iconRemove from "../../assets/iconRemove.png";

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
  ListItem,
  ButtonsContainer,
  Button,
  ButtonImage
} from './styles';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { sendToastError, sendToastSuccess } from '../../toasts/toasts';

interface ListProducts {
  products: Array<ProductType>
}

const ListProductsComponent = ({products}: ListProducts) => {
  const navigate = useNavigate();

  const deleteProductById =  (id: number) => {
    // eslint-disable-next-line no-restricted-globals
    const dialog = confirm("Deseja deletar o produto?");
    if(dialog) {
        api.delete(`/products/${id}`)
        .then(response => {
            if (response.status === 200) {
                navigate(0);
                setTimeout(() => {
                  sendToastSuccess(response.data.message)
                }, 500);
            } 
        })
        .catch(error => {
            sendToastError(error);
        })
    }
}

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
              <ButtonsContainer>
                <Button
                  onClick={() => {
                    deleteProductById(product.id);
                  }}
                >
                  <ButtonImage 
                    src={iconRemove}
                  />
                </Button>

                <Button
                  onClick={() => {
                    navigate(`/updateProduct/${product.id}`)
                  }}
                >
                  <ButtonImage 
                    src={iconEdit}
                  />
                </Button>
              </ButtonsContainer>
            </ItemActions>
          </ListItem>
        );  
      })
    }
  </Container>
  );
}

export default ListProductsComponent;
