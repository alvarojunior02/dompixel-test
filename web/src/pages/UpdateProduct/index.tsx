import React, { useEffect, useState }from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';
import { sendToastError, sendToastInfo, sendToastSuccess } from '../../toasts/toasts';

import {
  BackButton,
  ButtonUpdateProduct,
  ButtonText,
  Container,
  Input,
  Label,
  Title
} from './styles'

const UpdateProduct: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [price, setPrice] = useState<number>(0);

  const clearInputs = () => {
    setName("");
    setCategory("");
    setPrice(0.0);
  }

  const sendUpdate = () => {
    if (price <= 0 ) {
      sendToastError('Produto não pode ter valor zero ou negativo!');
    } else if (name !== "" || category !== "") {
      api.put(`/products/${id}`, {
        name,
        category,
        price,
      })
      .then((response) => {
          if(response.status === 200) {
              navigate(`/`);
              sendToastSuccess('Produto alterado com sucesso!');
              clearInputs();
          }
      })
      .catch((error) => {
          sendToastError(error);
      })
    } else {
      sendToastError("Preencha todos os campos!");
    }
  }

  const getProduct = () => {
    api.get(`/products/${id}`)
      .then((response) => {
        if(response.status === 200) {
            setName(response.data.name);
            setCategory(response.data.category);
            setPrice(response.data.price);
        }
      })
      .catch((error) => {
          sendToastError(error)
      })
  }

  useEffect(() => {
    getProduct();
    console.log(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title> {"Alterar Produto"} </Title>

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

      <ButtonUpdateProduct
        onClick={() => {
          sendUpdate();
        }}
      >
        <ButtonText> {"Confirmar Alteração"} </ButtonText>
      </ButtonUpdateProduct>

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

export default UpdateProduct;

