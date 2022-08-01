import React, { useEffect, useState }from 'react';
import { useNavigate } from 'react-router-dom';
import ListProductsComponent from '../../components/ListProducts';
import api from '../../services/api';
import { ProductType } from '../../types/product';

import {
  ButtonCreateProduct,
  ButtonText,
  Container,
  Header,
  Title
} from './styles'

const Home: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  const navigate = useNavigate();

  const getProducts = () => {
    api.get('/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
}

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <Container>
      <Header>
        <Title>
          Produtos
        </Title>

        <ButtonCreateProduct
          onClick={() => {
            navigate("/createProduct");
          }}
        >
          <ButtonText> {"Cadastrar Produto"} </ButtonText>
        </ButtonCreateProduct>
      </Header>
      <ListProductsComponent 
        products={products}
      />
    </Container>
  );
};

export default Home;