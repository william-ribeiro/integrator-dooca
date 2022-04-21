import { Request, Response } from 'express';
import { BrandCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateBrand {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createBrandsRequest = new BrandCreateRequest(request.body);

      await client.send(createBrandsRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
