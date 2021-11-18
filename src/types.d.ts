export interface Mover {
  change: number;
  description: string;
  direction: string;
  last: number;
  symbol: string;
  totalVolume: number;
}

export interface IRoute {
  path: string;
  module: any;
}

export type IRoutes = IRoute[];