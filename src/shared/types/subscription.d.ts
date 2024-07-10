export type Subscription = {
  id: number;
  name: string;
  price: string;
  is_annual: boolean;
  is_active: boolean;
  features?: string[];
};
