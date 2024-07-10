import { PaymentMethod } from "../../../../shared/types/payment_method";

const payment_method: PaymentMethod[] = [
  {
    id: 0,
    name: "Innovize",
    card_type: "Visa",
    card_number: "1234 5678 9012 3456",
    expiration_date: "05/26",
    cvv: "123",
    is_active: true,
    company_id: 0,
  },
  {
    id: 1,
    name: "Innovize",
    card_type: "MasterCard",
    card_number: "9876 5432 1098 7654",
    expiration_date: "04/27",
    cvv: "456",
    is_active: false,
    company_id: 0,
  },
];

export { payment_method };
