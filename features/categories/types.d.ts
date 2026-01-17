import * as Icons from "lucide-react";
export type CategoryIcon = keyof typeof Icons;
export type Category = {
  _id: string;
  name: string;
  slug: string;
  desc: string;
  icon: CategoryIcon;
  style: string;
};

export type CategoriesCollection = {
  items: Category[];
};
export type CategoriesQueryResponse = {
  categoriesCollection: CategoriesCollection;
};
