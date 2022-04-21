import { Request, Response } from 'express';

import { StockMassUpdateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateStock {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createStockRequest = new StockMassUpdateRequest(request.body);

      await client.send(createStockRequest).then(() => {
        return response.send();
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
