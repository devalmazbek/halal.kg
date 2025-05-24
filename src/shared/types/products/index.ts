import { DateMeta, ID } from "../_default/model";

export type ProductType = {
  title: string;
  description: string;
  meta?: DateMeta,
  images: [],
  thumbnail: string;
} & ID


