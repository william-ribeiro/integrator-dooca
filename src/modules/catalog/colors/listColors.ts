import { queryParams } from './../../../shared/query';
import { Request, Response } from 'express';

import { ColorListRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class ListColors {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const colorsRequest = new ColorListRequest().setQueryParams(queryParams);

      await client.send(colorsRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
