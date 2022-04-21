import { Request, Response } from 'express';

import { CategoryListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';
import { queryParams } from '../../../shared';

export class ListCategories {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const categoriesRequest = new CategoryListRequest().setQueryParams(queryParams);

      await client.send(categoriesRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
