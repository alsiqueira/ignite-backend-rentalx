import {  Router } from "express";

import { CategoriesRepository } from "../Modules/cars/repositories/CategoriesRepository";
import { createCategoryController } from "../Modules/cars/useCases/createCategory";
import { listCategoriesController } from "../Modules/cars/useCases/listCategories";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository()


categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.hendle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
   return listCategoriesController.handle(request, response)
  
})
export { categoriesRoutes };
