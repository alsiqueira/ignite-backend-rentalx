import {  request, response, Router } from "express";
import multer from "multer"

import { createCategoryController } from "../Modules/cars/useCases/createCategory";
import { listCategoriesController } from "../Modules/cars/useCases/listCategories";
import { importCategoryController } from "../Modules/cars/useCases/importCategory";

const categoriesRoutes = Router();
const upload = multer({
  dest: "./tmp", 
})

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.hendle(request, response)
})

categoriesRoutes.get("/", (request, response) => {
   return listCategoriesController.handle(request, response)
  
})

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
 return importCategoryController.handle(request, response)
})

export { categoriesRoutes };
