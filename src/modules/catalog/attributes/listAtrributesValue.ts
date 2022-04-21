import { queryParams } from '../../../shared/query';
import { Request, Response } from 'express';

import { AttributeValueListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class ListAtrributesValue {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const attributesValueRequest = new AttributeValueListRequest().setQueryParams(queryParams);

      await client.send(attributesValueRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
