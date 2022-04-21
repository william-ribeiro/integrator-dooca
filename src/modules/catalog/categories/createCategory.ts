import { Request, Response } from 'express';

import { CategoryCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateCategory {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createCategoriesRequest = new CategoryCreateRequest(request.body);

      await client.send(createCategoriesRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
