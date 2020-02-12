export interface User {
  id: string;
  avatarUrl: string;
  name: string;
  login: string;
  url: string;
  email: string;
  bio: string;
}

export const emptyUser: User = {
  id: null,
  avatarUrl: '',
  name: '',
  login: '',
  url: '',
  email: '',
  bio: ''
}