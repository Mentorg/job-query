import { Invoice } from "../../../../shared/types/invoice";

const invoices: Invoice[] = [
  {
    id: 0,
    reference: "006",
    status: false,
    created_at: "01.01.2024",
    due_date: "01.01.2025",
    company_id: 0,
    subscription_id: 5,
  },
  {
    id: 1,
    reference: "005",
    status: true,
    created_at: "01.01.2023",
    due_date: "01.01.2024",
    company_id: 0,
    subscription_id: 5,
  },
  {
    id: 2,
    reference: "004",
    status: true,
    created_at: "01.01.2022",
    due_date: "01.01.2023",
    company_id: 0,
    subscription_id: 5,
  },
  {
    id: 3,
    reference: "003",
    status: true,
    created_at: "01.01.2021",
    due_date: "01.01.2022",
    company_id: 0,
    subscription_id: 5,
  },
  {
    id: 4,
    reference: "002",
    status: true,
    created_at: "01.01.2020",
    due_date: "01.01.2021",
    company_id: 0,
    subscription_id: 5,
  },
  {
    id: 5,
    reference: "001",
    status: true,
    created_at: "01.12.2019",
    due_date: "01.01.2020",
    company_id: 0,
    subscription_id: 3,
  },
  {
    id: 6,
    reference: "000",
    status: true,
    created_at: "01.12.2019",
    due_date: "01.01.2020",
    company_id: 1,
    subscription_id: 1,
  },
];

export { invoices };
