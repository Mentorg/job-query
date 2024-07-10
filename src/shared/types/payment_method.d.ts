export type PaymentMethod = {
  id: number;
  name: string;
  card_type: string;
  card_number: string;
  expiration_date: string;
  cvv: string;
  is_active: boolean;
  company_id: number | undefined;
};
