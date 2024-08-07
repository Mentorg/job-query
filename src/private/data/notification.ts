import { Notification } from "../../shared/types/notification";

const notification: Notification[] = [
  {
    id: 1,
    icon: "",
    type: "New Job Application",
    subject: "New Job Application for Web Developer Position",
    content:
      "Dear Employer, You have received a new job application for the Web Developer position. Please login to review the candidate's qualifications and take necessary actions.",
    created_at: "2h ago",
    is_read: false,
    user_id: 36,
  },
  {
    id: 2,
    icon: "",
    type: "Interview Request",
    subject: "Software Engineer - Interview Request",
    content:
      "Congratulations! A candidate with the desired skills and qualifications for the Software Engineer position has requested an interview. Please review their profile and schedule an interview at your earliest convenience.",
    created_at: "3h ago",
    is_read: false,
    user_id: 36,
  },
  {
    id: 3,
    icon: "",
    type: "Interview Request",
    subject: "Sales Representative - Interview Request",
    content:
      "Attention! A highly motivated Sales Representative, who has the drive to meet and exceed targets, has requested an interview for your job post. Don't miss this opportunity to interact with a potential top performer. Check their profile and schedule an interview to discuss sales strategies.",
    created_at: "6h ago",
    is_read: false,
    user_id: 35,
  },
  {
    id: 4,
    icon: "",
    type: "Job Posting Expired",
    subject: "Software Developer - Backend",
    content:
      "The job posting for Software Developer - Backend has expired. Please remove it or extend the deadline if required.",
    created_at: "Yesterday",
    is_read: true,
    user_id: 35,
  },
  {
    id: 5,
    icon: "",
    type: "New Job Application",
    subject: "New Job Application for Marketing Manager Position",
    content:
      "Hello, You have a new job application for the Marketing Manager position. Log in to the dashboard to review the applicant's resume and cover letter.",
    created_at: "Yesterday",
    is_read: true,
    user_id: 34,
  },
  {
    id: 6,
    icon: "",
    type: "Job Posting Expired",
    subject: "Marketing Manager - Digital",
    content:
      "The job posting for Marketing Manager - Digital has expired. Kindly review the applications received and proceed accordingly.",
    created_at: "Yesterday",
    is_read: true,
    user_id: 34,
  },
  {
    id: 7,
    icon: "",
    type: "Interview Request",
    subject: "Graphic Designer - Interview Request",
    content:
      "Good news! A talented Graphic Designer has shown interest in your job posting. They are eager to showcase their creative skills and contribute to your team. Review their portfolio and schedule an interview to discuss design concepts and evaluate their fit for the role.",
    created_at: "Yesterday",
    is_read: true,
    user_id: 33,
  },
  {
    id: 8,
    icon: "",
    type: "New Account Activation",
    subject: "Account Activation Request - ABC Company",
    content:
      "Dear Admin, a new account activation request has been received from ABC Company. Please review the details and activate the account as per our standard procedures. Thank you.",
    created_at: "Yesterday",
    is_read: true,
    user_id: 33,
  },
  {
    id: 9,
    icon: "",
    type: "Interview Request",
    subject: "Data Analyst - Interview Request",
    content:
      "Excellent match! A Data Analyst, proficient in statistical analysis and data visualization, has requested an interview for your job opportunity. Take a look at their qualifications and schedule an interview to discuss their experience in handling large datasets and generating valuable insights.",
    created_at: "Yesterday",
    is_read: true,
    user_id: 36,
  },
  {
    id: 10,
    icon: "",
    type: "Job Posting Renewal Reminder",
    subject: "Urgent: Job Posting Renewal Reminder",
    content:
      "Dear Admin, your job posting for the position of Software Engineer is expiring in 2 days. To continue receiving candidate applications, kindly renew your posting before 15 January 2024. Thank you for using our job board app!",
    created_at: "Yesterday",
    is_read: true,
    user_id: 36,
  },
  {
    id: 11,
    icon: "",
    type: "Applicant Screening Update",
    subject: "Urgent Action Required - Application Pending",
    content:
      "This notification is to inform you that a new application has been received for the position of Senior Software Engineer. The applicant's resume has been uploaded, but further screening is required. Please log in to the system and review the application as soon as possible. If the applicant meets the basic requirements, proceed with scheduling an interview. Thank you.",
    created_at: "10 Jan",
    is_read: true,
    user_id: 35,
  },
  {
    id: 12,
    icon: "",
    type: "Candidate Feedback",
    subject: "Positive Candidate Feedback",
    content:
      "Dear Employer, we have received positive feedback from a candidate regarding their interview with your company. The candidate was impressed with the professionalism and friendliness of your team. They mentioned that they enjoyed the informative discussion and found the interview process smooth. This positive feedback reflects well on your organization and showcases your commitment to providing a great candidate experience. Congratulations on a job well done!",
    created_at: "10 Jan",
    is_read: true,
    user_id: 35,
  },
  {
    id: 13,
    icon: "",
    type: "New Job Application",
    subject: "New Job Application for Graphic Designer",
    content:
      "Hi there, A new candidate has applied for the Graphic Designer position in your company. Visit the dashboard to evaluate the candidate's qualifications and schedule an interview if interested.",
    created_at: "10 Jan",
    is_read: true,
    user_id: 34,
  },
  {
    id: 14,
    icon: "",
    type: "Job Posting Expired",
    subject: "Graphic Designer",
    content:
      "The job posting for Graphic Designer has expired. Consider closing the position and informing the applicants that the selection process is complete.",
    created_at: "10 Jan",
    is_read: true,
    user_id: 34,
  },
  {
    id: 15,
    icon: "",
    type: "New Account Activation",
    subject: "New Employer Account - XYZ Corporation",
    content:
      "Hey Admin, XYZ Corporation has signed up on our platform and is eagerly waiting for their account to be activated. Kindly review their details and activate the account at your earliest convenience. Feel free to reach out if you have any questions.",
    created_at: "10 Jan",
    is_read: true,
    user_id: 33,
  },
  {
    id: 16,
    icon: "",
    type: "Interview Request",
    subject: "Software Engineer - Interview Request",
    content:
      "Good day! An applicant who possesses the necessary skills and qualifications has formally requested an interview for the Software Engineer role. We recommend reviewing their profile and scheduling an interview promptly.",
    created_at: "10 Jan",
    is_read: true,
    user_id: 33,
  },
];

export { notification };
