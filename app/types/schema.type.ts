export type DataAttribute = {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  publishedAt?: string;
};

export type Data<T> = T extends Array<infer U>
  ? (DataAttribute & U)[]
  : DataAttribute & T;

export type StrapiObject<T = Record<string, string>> = {
  data: Data<T>;
  meta: Meta;
};

export type Meta = {
  pagination: Pagination;
};

export type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

export type Partner = {
  name: string;
  image: Data<Image>;
};

export type Image = {
  url: string;
  width?: number;
  height?: number;
};

export type Locale = "en" | "id";

export type FAQ = {
  question: string;
  answer: string;
  locale?: Locale;
};

export type Testimonial = {
  name: string;
  position: string;
  before: string;
  after: string;
  image: Data<Image>;
  locale?: Locale;
};

export type Blog = {
  id: string;
  slug: string;
  title: string;
  content: string;
  image: Data<Image>;
  publishedAt: string;
  author?: string;
  createdAt: string;
};

export type Resource = {
  id: string;
  title: string;
  description: string;
  file: {
    url: string;
  };
  image: Data<Image>;
  createdAt: string;
};
