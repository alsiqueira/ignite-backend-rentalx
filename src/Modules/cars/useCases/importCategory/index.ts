import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryUseCase } from "./ImportCateforyUseCase";
import { ImportCategoryController } from "./ImportCategoryController";

const categoriesRepository = CategoriesRepository.getInstance()
const importCategoryUseCase =  new ImportCategoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }