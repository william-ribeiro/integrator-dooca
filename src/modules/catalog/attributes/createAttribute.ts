import { Request, Response } from 'express';

import { AttributeCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateAttribute {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createAttributeRequest = new AttributeCreateRequest(request.body);

      await client.send(createAttributeRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
