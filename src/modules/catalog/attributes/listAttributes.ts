import { queryParams } from '../../../shared/query';
import { Request, Response } from 'express';

import { AttributeListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class ListAttributes {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const attributesRequest = new AttributeListRequest().setQueryParams(queryParams);

      await client.send(attributesRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
