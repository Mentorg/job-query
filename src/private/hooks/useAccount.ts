import { useState } from "react";
import { useAuth } from "../../public/hooks/useAuth";
import { currency } from "../features/settings/data/locale/currency";
import { User } from "../../shared/types/user";

function useAccount() {
  const { user, logout } = useAuth();
  const [account, setAccount] = useState<User | null>(user);

  const userCurrency = currency.find(
    (record) => record.id === account?.currency_id,
  );

  function handleUpdateEmail(updateEmail: Partial<User>) {
    if (account) {
      setAccount({ ...account, ...updateEmail });
    }
  }

  function handleUpdatePassword(updatePassword: Partial<User>) {
    if (account) {
      setAccount({ ...account, ...updatePassword });
    }
  }

  function handleUpdateMFA() {
    if (account) {
      setAccount({ ...account, mfa: !account.mfa });
    }
  }

  function handleUpdateSecurityQuestion(updateSecurityQuestion: Partial<User>) {
    if (account) {
      setAccount({ ...account, ...updateSecurityQuestion });
    }
  }

  function handleUpdateLanguage(updateLanguage: Partial<User>) {
    if (account) {
      setAccount({ ...account, ...updateLanguage });
    }
  }

  function handleUpdateTimezone(updateTimezone: Partial<User>) {
    if (account) {
      setAccount({ ...account, ...updateTimezone });
    }
  }

  function handleUpdateCurrency(updateCurrency: Partial<User>) {
    if (account) {
      setAccount({ ...account, ...updateCurrency });
    }
  }

  function handleDeleteAccount() {
    setAccount(null);
    logout();
  }

  return {
    account,
    userCurrency,
    handleUpdateEmail,
    handleUpdatePassword,
    handleUpdateMFA,
    handleUpdateSecurityQuestion,
    handleUpdateLanguage,
    handleUpdateTimezone,
    handleUpdateCurrency,
    handleDeleteAccount,
  };
}

export { useAccount };
