export type Partner = {
  name: string;
  image: string;
};

export type Testimony = {
  name: string;
  position: string;
  before: string;
  after: string;
  image: string;
};

export type Blog = {
  slug: string;
  title: string;
  content: string;
  image: string;
  publishedAt: string;
  author?: string;
  createdAt: string;
};
