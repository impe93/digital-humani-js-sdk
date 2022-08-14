export interface Enterprise {
  created: string;
  updated: string;
  id: string;
  name: string;
  contact: Contact;
}

export interface Contact {
  name: string;
}

export interface Count {
  count: number;
}

export type GetMonthlyTreeCountRequest = {
  enterpriseId: string;
  month: string; // YYYY-MM
  startDate?: undefined;
  endDate?: undefined;
};

export type GetUserTreeCountRequest = {
  enterpriseId: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  month?: undefined;
};

export type GetTreeCountRequest =
  | GetMonthlyTreeCountRequest
  | GetUserTreeCountRequest;
