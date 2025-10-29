export interface Customer {
  id: string;
  name: string;
  mobile: string;
  email: string;
  policy_number?: string;
}

export type PageType =
  | 'home'
  | 'customer-view'
  | 'customer-segments'
  | 'outbound-calls'
  | 'outbound-emails'
  | 'incoming-calls'
  | 'incoming-emails'
  | 'sales-agent'
  | 'intake-agent'
  | 'marketing-agent'
  | 'my-profile';
