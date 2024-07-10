import { Dispatch } from "react";
import { User } from "../../shared/types/user";
import { Recruiter } from "../../shared/types/recruiter";
import { Company } from "../../shared/types/company";
import { Subscription } from "../../shared/types/subscription";
import { Billing } from "../../shared/types/billing";
import { PaymentMethod } from "../../shared/types/payment_method";

export type BillingContextType = {
  billing: Billing[];
  user: User | null;
  payment_method: PaymentMethod[];
  dispatch: Dispatch<Action>;
  userEmail: string[];
  userCompany: Company | undefined;
  companyPaymentMethods: PaymentMethod[] | undefined;
  companySubscription: Subscription | undefined;
  handleUpdateEmail: (email: Partial<User>) => void;
  handleAddPaymentMethod: (payment_method: PaymentMethod) => void;
  handleUpdatePaymentMethod: (payment_method: PaymentMethod) => void;
  handleUpdateAutoRenew: () => void;
  handleSetDefaultCard: (id: number) => void;
  handleDeleteCard: (id: number) => void;
};

export type BillingState = {
  billing: Billing[];
  user: User | null;
  payment_method: PaymentMethod[];
  recruiter?: Recruiter;
  company?: Company;
  subscription?: Subscription;
};

type Action =
  | { type: "email/update"; email: Partial<User> }
  | { type: "payment_method/add"; payment_method: PaymentMethod }
  | { type: "payment_method/update"; payment_method: PaymentMethod }
  | { type: "payment_method/default"; id: number }
  | { type: "payment_method/delete"; id: number }
  | { type: "autorenew/is_autorenew"; payload: { userId: number } };

export type PaymentMethodError = {
  name: boolean | string;
  card_type: boolean | string;
  card_number: boolean | string;
  expiration_date: boolean | string;
  cvv: boolean | string;
};
