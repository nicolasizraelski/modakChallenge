export interface IQueryParams {
  limit?: number;
  skip?: number;
  sortBy?: SortBy;
  order?: Order;
  select?: string;
}

export enum SortBy {
  PRICE = 'price',
  RATING = 'rating',
}

export enum Order {
  ASC = 'asc',
  DESC = 'desc',
}
