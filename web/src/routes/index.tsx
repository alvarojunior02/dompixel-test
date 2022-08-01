import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import UpdateProduct from '../pages/UpdateProduct';

const RoutesHub: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
    </Routes>
  );
};

export default RoutesHub;
