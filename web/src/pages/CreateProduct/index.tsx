import React, { useState }from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { sendToastError, sendToastInfo, sendToastSuccess } from '../../toasts/toasts';

import {
  BackButton,
  ButtonCreateProduct,
  ButtonText,
  Container,
  Input,
  Label,
  Title
} from './styles'

const CreateProduct: React.FC = () => {
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const clearInputs = () => {
    setName("");
    setCategory("");
    setPrice(0.0);
  }

  const sendNewProduct = () => {
    if (price <= 0 ) {
      sendToastError('Produto não pode ter valor zero ou negativo!');
    } else if (name !== "" || category !== "") {
      api.post('/products', {
        name,
        category,
        price,
      })
      .then((response) => {
          if(response.status === 201) {
              navigate(`/`);
              sendToastSuccess('Produto cadastrado com sucesso!');
              clearInputs();
          }
      })
      .catch((error) => {
          sendToastError(error)
      })
    } else {
      sendToastError("Preencha todos os campos!");
    }
  }

  return (
    <Container>
      <Title> {"Cadastrar Produto"} </Title>

      <Label> {"Nome:"} </Label>
      <Input 
        placeholder={"Nome do Produto"}
        type={"text"}
        value={name}
        onChange={(value) => {
            setName(value.target.value);
            if(value.target.value.length >= 60) {
                sendToastInfo('Nome chegou ao limite de tamanho')
            }
        }}
        maxLength={60}
      />

      <Label> {"Categoria:"} </Label>
      <Input 
        placeholder={"Categoria do Produto"}
        type={"text"}
        value={category}
        onChange={(value) => {
            setCategory(value.target.value);
            if(value.target.value.length >= 90) {
                sendToastInfo('Categoria chegou ao limite de tamanho')
            }
        }}
        maxLength={90}
      />

      <Label> {"Preço:"} </Label>
      <Input 
        type={"number"}
        value={price}
        onChange={(value) => {
            setPrice(parseFloat(value.target.value));
        }}
      />

      <ButtonCreateProduct
        onClick={() => {
          sendNewProduct();
        }}
      >
        <ButtonText> {"Cadastrar Produto"} </ButtonText>
      </ButtonCreateProduct>

      <BackButton
        onClick={() => {
          navigate(-1);
        }}
      >
        <ButtonText> {"Voltar"} </ButtonText>
      </BackButton>
    </Container>
  );
};

export default CreateProduct;

