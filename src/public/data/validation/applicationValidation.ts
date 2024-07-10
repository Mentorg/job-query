export const applicationValidation = (name: string, value: string) => {
  if (
    (name === "name" || name === "address") &&
    (!value || !/^[a-zA-Z\s]{4,}$/.test(value))
  ) {
    return "Please enter a name with a minimum of 4 characters";
  }
  if (name === "birthday" && (!value || !isValidDate(value))) {
    return "Please enter a valid date in the format YYYY-MM-DD";
  }
  if (name === "phone" && (!value || !/^\+?[0-9\s-]{8,}$/.test(value))) {
    return "Please enter a valid phone number.";
  }
  if (
    (name === "linkedin_profile" || name === "portfolio") &&
    (!value || !/^(ftp|http|https):\/\/[^ "]+$/.test(value))
  ) {
    return "Please enter a valid URL";
  }
  if (name === "city" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a city name with a minimum of 4 characters";
  }
  if (
    name === "email" &&
    (!value || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
  ) {
    return "Please provide a valid email address";
  }
  if (
    !value &&
    ["country", "timezone", "education_level", "experience"].includes(name)
  ) {
    return "Please select an option";
  }
};

const isValidDate = (dateString: string) => {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(dateString)) return false;
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return false;
  return true;
};
