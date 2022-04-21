import { Request, Response } from 'express';

import { ProductCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateProduct {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createProductRequest = new ProductCreateRequest(request.body);

      await client.send(createProductRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
