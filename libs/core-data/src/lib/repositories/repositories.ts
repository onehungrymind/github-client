export interface Repository {
  id: string;
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
  forkCount: number;
  isPrivate: boolean;
  isFork: boolean;
  languages: Language;
  createdAt: string;
  updatedAt: string;
  pushedAt: string;
}

export interface RepositoryInput {
  name: string,
  visibility: Visibility,
  description: string,
  hasIssuesEnabled: boolean
}

export enum Visibility {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC',
  INTERNAL = 'INTERNAL'
}

interface Language {
  id: string;
  name: string;
  color: string;
}

export const emptyRepository: Repository = {
  id: null,
  name: '',
  description: '',
  homepageUrl: '',
  url: '',
  forkCount: 0,
  isPrivate: false,
  isFork: false,
  languages: {
    id: null,
    name: '',
    color: ''
  },
  createdAt: '',
  updatedAt: '',
  pushedAt: ''
};