import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const cateforiesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  cateforiesRepository.create({ name, description})


  return response.status(201).send()
})

export { categoriesRoutes };
