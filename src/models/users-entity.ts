export interface Billing {
  firstName: number;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  postCode: string;
  country: string;
  email: string;
  phone: string;
}

export interface Shipping {
  firstName: number;
  lastName: string;
  company: string;
  address1: string;
  address2: string;
  city: string;
  postCode: string;
  country: string;
}

export interface UserEntity {
  avatarUrl: string[];

  email: string;

  name: string;

  password: string;

  isActive: boolean;

  billing: Billing[];

  shipping: Shipping[];

  roles: string;
}
