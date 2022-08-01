import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ListProducts from '../../components/ListProducts';
import api from '../../services/api';
import { ProductType } from '../../types/product';

import {
  Container
} from './styles'

const Home: React.FC = () => {
  const [products, setProducts] = useState<Array<ProductType>>([]);

  const getProducts = () => {
    api.get('products')
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
      <ListProducts 
        products={products}
      />
    </Container>
  );
};

export default Home;