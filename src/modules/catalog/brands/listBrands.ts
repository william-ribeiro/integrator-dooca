import { Request, Response } from 'express';

import { BrandListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';
import { queryParams } from '../../../shared';

export class ListBrands {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const brandsRequest = new BrandListRequest().setQueryParams(queryParams);

      await client.send(brandsRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
