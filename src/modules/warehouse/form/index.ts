import { Resolver } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";

import { ICreateBlogForm } from "@/types/warehouse";

export const defaultValuesPost: ICreateBlogForm = {
  page_id: "",
  category_id: "",
  title: "",
  description: "",
  content: "",
  is_public: true,
  pin_homepage: true,
  pin_about_us: true,
};

export const postResolver: Resolver<ICreateBlogForm> = yupResolver(
  object({
    page_id: string().required("Please select page!"),
    category_id: string().required("Please select category!"),
    title: string().required("Please enter title!"),
    description: string().required("Please enter description!"),
    content: string().required("Please enter content!"),
    image: object({
      id: string().required("Please choose image!"),
    }).required("Please choose image!"),
    background: object({
      id: string().required("Please choose image!"),
    }).required("Please choose background!"),
  })
);
