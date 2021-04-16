import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryUseCase } from "./ImportCateforyUseCase";
import { ImportCategoryController } from "./ImportCategoryController";

const categoriesRepository = null
const importCategoryUseCase =  new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }