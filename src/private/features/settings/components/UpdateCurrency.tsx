import { useState } from "react";
import Label from "../../../../shared/components/form/Label";
import Select from "../../../../shared/components/form/Select";
import Option from "../../../../shared/components/form/Option";
import Button from "../../../../shared/components/ui/Button";
import { currency as currencyData } from "../data/locale/currency";
import { User } from "../../../../shared/types/user";

type UpdateCurrencyProps = {
  resource: Partial<User> | null;
  onResourceUpdate: (update: Partial<User>) => void;
  onCloseModal: () => void;
};

type UpdateCurrencyError = {
  currency_id: boolean | number;
};

function UpdateCurrency({
  resource,
  onResourceUpdate,
  onCloseModal,
}: UpdateCurrencyProps) {
  const initialCurrencyId = resource?.currency_id || 0;
  const [currency, setCurrency] = useState<number>(initialCurrencyId);
  const [errors, setErrors] = useState<UpdateCurrencyError>({
    currency_id: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const { name, value } = e.target;
    setCurrency(parseInt(value, 10));

    const error = !value && "Please select an option";
    setErrors({ ...errors, [name]: error });
    const selectedCurrency = currencyData.find(
      (item) => item.id === Number(value),
    );
    if (selectedCurrency) {
      onResourceUpdate({ currency_id: selectedCurrency.id });
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof UpdateCurrencyError],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    onCloseModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex w-full flex-col gap-y-2">
        <Label htmlFor="currency_id">Currency</Label>
        <Select
          name="currency_id"
          value={currency}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.currency_id}
        >
          {currencyData.map((item) => (
            <Option value={item.id} key={item.id}>
              {item.symbol} - {item.name}
            </Option>
          ))}
        </Select>
      </div>
      <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-white hover:bg-primary/70">
        Submit
      </Button>
    </form>
  );
}

export default UpdateCurrency;
