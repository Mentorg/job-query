import { useContext, useState } from "react";
import Label from "../../../../shared/components/form/Label";
import TextField from "../../../../shared/components/form/TextField";
import Select from "../../../../shared/components/form/Select";
import Option from "../../../../shared/components/form/Option";
import Button from "../../../../shared/components/ui/Button";
import { BillingContext } from "../../../context/BillingContext";
import { cardValidation as validation } from "../validation/cardValidation";
import { PaymentMethod } from "../../../../shared/types/payment_method";
import { PaymentMethodError } from "../../../types/billingContext";

type UpdatePaymentMethodProps = {
  resource: PaymentMethod;
  onCloseModal: () => void;
};

function UpdatePaymentMethod({
  resource,
  onCloseModal,
}: UpdatePaymentMethodProps) {
  const { handleUpdatePaymentMethod } = useContext(BillingContext);
  console.log(resource);
  const [formData, setFormData] = useState<PaymentMethod>(resource);
  const [errors, setErrors] = useState<PaymentMethodError>({
    name: "",
    card_type: "",
    card_number: "",
    expiration_date: "",
    cvv: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = e.target;
    const error = validation(name, value);
    setErrors({ ...errors, [name]: error });
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errorFields = Object.keys(errors).filter(
      (field) => errors[field as keyof PaymentMethodError],
    );
    if (errorFields.length > 0) {
      return;
    } else {
      console.log("Success");
    }
    handleUpdatePaymentMethod(formData);
    onCloseModal();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="name">Name</Label>
        <TextField
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.name}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="card_type">Card Type</Label>
        <Select
          name="card_type"
          value={formData.card_type}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.card_type}
        >
          {["Visa", "MasterCard"].map((card) => (
            <Option value={card} key={card}>
              {card}
            </Option>
          ))}
        </Select>
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="card_number">Card Number</Label>
        <TextField
          name="card_number"
          type="text"
          value={formData.card_number}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.card_number}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="expiration_date">Expiration Date</Label>
        <TextField
          name="expiration_date"
          type="text"
          value={formData.expiration_date}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.expiration_date}
        />
      </div>
      <div className="mt-4 flex flex-col gap-y-2">
        <Label htmlFor="cvv">CVV</Label>
        <TextField
          name="cvv"
          type="text"
          value={formData.cvv}
          onChange={handleChange}
          errors={errors}
          hasError={!!errors.cvv}
        />
      </div>
      <Button className="mt-4 rounded-md bg-primary px-6 py-2 text-sm text-white transition-all hover:bg-opacity-75">
        Submit
      </Button>
    </form>
  );
}

export default UpdatePaymentMethod;
