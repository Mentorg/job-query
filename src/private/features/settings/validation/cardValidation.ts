export const cardValidation = (name: string, value: string) => {
  if (name === "name" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a name with a minimum of 4 characters";
  }
  if (name === "card_type" && !value) {
    return "Please select an option";
  }
  if (name === "card_number" && !/^\d{13,16}$/.test(value)) {
    return "Please enter a valid credit card number.";
  }
  if (
    name === "expiration_date" &&
    !/^(0[1-9]|1[0-2])\/(2[2-9]|[3-9][0-9])$/.test(value)
  ) {
    return "Please enter a valid expiration date (MM/YY).";
  }
  if (name === "cvv" && !/^\d{3,4}$/.test(value)) {
    return "Please enter a valid CVV (3 or 4 digits).";
  }
};
