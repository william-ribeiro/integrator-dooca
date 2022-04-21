import { Request, Response } from 'express';

import { VariationCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateVariaton {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createVariatonRequest = new VariationCreateRequest(request.body);

      await client.send(createVariatonRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
