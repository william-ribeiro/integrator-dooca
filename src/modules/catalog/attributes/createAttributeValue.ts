import { Request, Response } from 'express';

import { AttributeValueCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateAttributeValue {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createAttributeValueRequest = new AttributeValueCreateRequest(request.body);

      await client.send(createAttributeValueRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
