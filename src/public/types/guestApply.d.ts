export interface GuestApplyData {
  id: number;
  name: string;
  birthday: string;
  email: string;
  phone: string;
  linkedin_profile: string;
  portfolio: string;
  country: string;
  city: string;
  timezone: string;
  address: string;
  education_level: string;
  experience: string;
  created_at: string;
}

export interface GuestApplyErrors {
  name: boolean | string;
  birthday: boolean | string;
  email: boolean | string;
  phone: boolean | string;
  linkedin_profile: boolean | string;
  portfolio: boolean | string;
  country: boolean | string;
  city: boolean | string;
  timezone: boolean | string;
  address: boolean | string;
  education_level: boolean | string;
  experience: boolean | string;
  created_at: boolean | string;
}
