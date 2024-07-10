export const companyValidation = (name: string, value: string) => {
  if (name === "name" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a name with a minimum of 4 characters";
  }
  if (name === "slug" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a slug with a minimum of 4 characters";
  }
  if (name === "description" && (!value || !/^[\s\S]{10,500}$/.test(value))) {
    return "Please provide a company overview between 10 and 500 characters";
  }
  if (
    name === "company_locations" &&
    (!value || !/^[a-zA-Z\s]{4,}$/.test(value))
  ) {
    return "Please enter a location with a minimum of 4 characters";
  }
  if (
    name === "email" &&
    (!value || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value))
  ) {
    return "Please provide a valid email address";
  }
  if (name === "socials" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a social media slug with a minimum of 4 characters";
  }
  if (
    name === "website" &&
    (!value || !/^([a-z0-9-]+\.)+[a-z]{2,}(\/[^\s]*)?$/.test(value))
  ) {
    return "Please enter a valid website link.";
  }
  if (name === "phone" && (!value || !/^\+?[0-9\s-]{8,}$/.test(value))) {
    return "Please enter a valid phone number.";
  }
};
