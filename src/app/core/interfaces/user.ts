export interface User {
  userName: string;
  token: string;
  voted: boolean;
  roles: {
    admin: boolean;
    candidate: boolean;
  };
}
