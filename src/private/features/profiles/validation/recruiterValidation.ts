export const recruiterValidation = (name: string, value: string) => {
  if (name === "name" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a name with a minimum of 4 characters";
  }
  if (name === "phone" && (!value || !/^\+?[0-9\s-]{8,}$/.test(value))) {
    return "Please enter a valid phone number.";
  }
  if (
    name === "linkedin_profile" &&
    (!value || !/^[a-zA-Z\s]{4,}$/.test(value))
  ) {
    return "Please enter a link to LinkedIn profile with a minimum of 4 characters";
  }
  if (name === "country" && !value) {
    return `Please enter an option for ${name.replace(/_/g, " ")}`;
  }
  if (name === "city" && (!value || !/^[a-zA-Z\s]{4,}$/.test(value))) {
    return "Please enter a location with a minimum of 4 characters";
  }
  if (name === "expertise" && (!value || !/^[\s\S]{10,500}$/.test(value))) {
    return "Please provide a description of your expertise between 10 and 500 characters";
  }
  if (name === "description" && (!value || !/^[\s\S]{10,500}$/.test(value))) {
    return "Please provide a description about you between 10 and 500 characters";
  }
};
