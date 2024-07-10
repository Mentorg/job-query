const currentDate = new Date();

const formattedCurrentDate = String(currentDate.getMonth() + 1).padStart(
  2,
  "0",
);

export const currentMonth = `${currentDate.getFullYear()}-${formattedCurrentDate}-${String(currentDate.getDate()).padStart(2, "0")}`;

const deadlineDate = new Date(currentDate);
deadlineDate.setMonth(deadlineDate.getMonth() + 1);

const deadlineMonth = String(deadlineDate.getMonth() + 1).padStart(2, "0");

export const deadline = `${deadlineDate.getFullYear()}-${deadlineMonth}-${String(deadlineDate.getDate()).padStart(2, "0")}`;
