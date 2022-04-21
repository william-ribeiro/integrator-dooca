import { PaginationQueryParams } from 'dc-node-client-sdk/lib/Base/Query/PaginationQueryParams';

export const queryParams: PaginationQueryParams = {
  limit: 25,
  page: 1,
  sort: {
    field: 'created_at',
    direction: 'desc',
  },
};
