export const experienceValidation = (name: string, value: string) => {
  if (name === "company" && (!value || !/^[a-zA-Z\s]{2,}$/.test(value))) {
    return "Please enter a valid company name (minimum 2 characters)";
  }
  if (name === "title" && (!value || !/^[a-zA-Z\s]{2,}$/.test(value))) {
    return "Please enter a valid position title (minimum 2 characters)";
  }
  if (name === "location" && (!value || !/^[a-zA-Z\s]{2,}$/.test(value))) {
    return "Please enter a valid location (minimum 2 characters)";
  }
  if (
    (name === "date_start" || name === "date_end") &&
    (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value))
  ) {
    return "Please enter a valid date in YYYY-MM-DD format";
  }
  return "";
};
