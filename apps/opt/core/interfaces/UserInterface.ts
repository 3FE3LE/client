export interface Member {
  readonly id: string;
  name: string;
  email: string;
  roleId: number;
}

export interface User extends Member {
  username: string;
  password: string;
  readonly createdAt: Date;
  updatedAt: Date;
  image: string;
  emailVerified: Date;
}

export interface Guest extends Member {
  readonly createdAt: Date;
}
