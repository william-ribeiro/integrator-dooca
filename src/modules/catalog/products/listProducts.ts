import { Request, Response } from 'express';

import { ProductListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';
import { queryParams } from '../../../shared';

export class ListProducts {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const productsRequest = new ProductListRequest().setQueryParams(queryParams);

      await client.send(productsRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
