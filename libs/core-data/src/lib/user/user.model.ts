export interface User {
  avatarUrl: string
  id: string
  name: string
  login: string
  bio: string
  location: string
  email: string
  websiteUrl: string
  company: string
}

export const emptyUser: User = {
  avatarUrl: '',
  id: null,
  name: '',
  login: '',
  bio: '',
  location: '',
  email: '',
  websiteUrl: '',
  company: ''
}
