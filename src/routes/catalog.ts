import { Router } from 'express';

import {
  ListAttributes,
  ListAtrributesValue,
  ListBrands,
  ListCategories,
  ListColors,
  ListProducts,
  ListStocks,
  ListVariations,
  CreateAttribute,
  CreateAttributeValue,
  CreateBrand,
  CreateCategory,
  CreateColor,
  CreateProduct,
  CreateVariaton,
  CreateStock,
} from '../modules/catalog';

export const catalogRouter = Router();
catalogRouter.get('/catalog/attributes', new ListAttributes().handle);
catalogRouter.post('/catalog/attributes', new CreateAttribute().handle);

catalogRouter.get('/catalog/attributes/value', new ListAtrributesValue().handle);
catalogRouter.post('/catalog/attributes/value', new CreateAttributeValue().handle);

catalogRouter.get('/catalog/brands', new ListBrands().handle);
catalogRouter.post('/catalog/brands', new CreateBrand().handle);

catalogRouter.get('/catalog/colors', new ListColors().handle);
catalogRouter.post('/catalog/colors', new CreateColor().handle);

catalogRouter.get('/catalog/categories', new ListCategories().handle);
catalogRouter.post('/catalog/categories', new CreateCategory().handle);

catalogRouter.get('/catalog/products', new ListProducts().handle);
catalogRouter.post('/catalog/products', new CreateProduct().handle);

catalogRouter.get('/catalog/stocks', new ListStocks().handle);
catalogRouter.post('/catalog/stocks', new CreateStock().handle);

catalogRouter.get('/catalog/variations', new ListVariations().handle);
catalogRouter.post('/catalog/variations', new CreateVariaton().handle);
