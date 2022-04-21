import { Request, Response } from 'express';

import { StockListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';
import { queryParams } from '../../../shared';

export class ListStocks {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const stocksRequest = new StockListRequest().setQueryParams(queryParams);

      await client.send(stocksRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
