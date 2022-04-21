import { queryParams } from '../../../shared/query';
import { Request, Response } from 'express';

import { VariationListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class ListVariations {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const variationsRequest = new VariationListRequest().setQueryParams(queryParams);

      await client.send(variationsRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
