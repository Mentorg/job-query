import { createContext, useReducer } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { recruiter } from "../data/recruiter";
import { subscription } from "../features/subscription/data/subscription";
import { company } from "../features/profiles/data/company";
import { billing } from "../features/settings/data/billing";
import { payment_method } from "../features/settings/data/payment_method";
import { User } from "../../shared/types/user";
import {
  Action,
  BillingState,
  BillingContextType,
} from "../types/billingContext";
import { PaymentMethod } from "../../shared/types/payment_method";

type BillingProviderProps = {
  children: React.ReactNode;
};

export const BillingContext = createContext<BillingContextType>({
  billing: [],
  user: {} as User, // Provide an initial value if needed
  payment_method: [],
  dispatch: () => {},
  userEmail: [],
  userCompany: undefined,
  companyPaymentMethods: undefined,
  companySubscription: undefined,
  handleUpdateEmail: () => {},
  handleAddPaymentMethod: () => {},
  handleUpdatePaymentMethod: () => {},
  handleUpdateAutoRenew: () => {},
  handleSetDefaultCard: () => {},
  handleDeleteCard: () => {},
});

function BillingProvider({ children }: BillingProviderProps) {
  const { user } = useAuth();

  const recruiterObj = recruiter.find((record) => record.id === user?.id);
  const userCompany = company.find(
    (record) => record.id === recruiterObj?.company_id,
  );

  const companySubscription = subscription.find(
    (record) => record.id === userCompany?.subscription_id,
  );

  const initialBilling: BillingState = {
    billing: billing,
    user: user,
    payment_method: payment_method,
  };

  function reducer(state: BillingState, action: Action): BillingState {
    switch (action.type) {
      case "email/update": {
        const updatedBilling = state.billing.map((record) =>
          record.user_id === state.user?.id
            ? { ...record, email: action.email.email || record.email }
            : record,
        );
        return {
          ...state,
          billing: updatedBilling,
        };
      }
      case "payment_method/add": {
        return {
          ...state,
          payment_method: [...state.payment_method, action.payment_method],
        };
      }
      case "payment_method/update": {
        return {
          ...state,
          payment_method: state.payment_method.map((record) =>
            record.id === action.payment_method.id
              ? action.payment_method
              : record,
          ),
        };
      }
      case "payment_method/default": {
        return {
          ...state,
          payment_method: state.payment_method.map((record) => ({
            ...record,
            is_active: record.id === action.id ? true : false,
          })),
        };
      }
      case "payment_method/delete": {
        return {
          ...state,
          payment_method: state.payment_method.filter(
            (record) => record.id !== action.id,
          ),
        };
      }
      case "autorenew/is_autorenew":
        return {
          ...state,
          billing: state.billing.map((record) => ({
            ...record,
            is_autorenew:
              record.user_id === user?.id
                ? !record.is_autorenew
                : record.is_autorenew,
          })),
        };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialBilling);

  const userEmail = state.billing
    .filter((record) => record.user_id === user?.id)
    .map((record) => record.email);

  const companyPaymentMethods = state.payment_method.filter(
    (record) => record.company_id === userCompany?.id,
  );

  function handleUpdateEmail(email: Partial<User>) {
    dispatch({ type: "email/update", email });
  }

  function handleAddPaymentMethod(payment_method: PaymentMethod) {
    dispatch({ type: "payment_method/add", payment_method: payment_method });
  }

  function handleUpdatePaymentMethod(payment_method: PaymentMethod) {
    dispatch({ type: "payment_method/update", payment_method: payment_method });
  }

  function handleSetDefaultCard(id: number) {
    dispatch({ type: "payment_method/default", id: id });
  }

  function handleDeleteCard(id: number) {
    dispatch({ type: "payment_method/delete", id: id });
  }

  function handleUpdateAutoRenew() {
    if (state.user) {
      const userId = state.user?.id;
      dispatch({ type: "autorenew/is_autorenew", payload: { userId } });
    }
  }

  return (
    <BillingContext.Provider
      value={{
        ...state,
        user,
        dispatch,
        userEmail,
        userCompany,
        companyPaymentMethods,
        companySubscription,
        handleUpdateEmail,
        handleAddPaymentMethod,
        handleUpdatePaymentMethod,
        handleUpdateAutoRenew,
        handleSetDefaultCard,
        handleDeleteCard,
      }}
    >
      {children}
    </BillingContext.Provider>
  );
}

export default BillingProvider;
