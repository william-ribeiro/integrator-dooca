import { Request, Response } from 'express';

import { ColorCreateRequest } from 'dc-node-client-sdk';

import { AppError } from '../../../errors';
import { client } from '../../../config';

export class CreateColor {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const createColorsRequest = new ColorCreateRequest(request.body);

      await client.send(createColorsRequest).then((res) => {
        return response.json(res.getData());
      });
    } catch (err) {
      throw new AppError(err);
    }
    return;
  }
}
