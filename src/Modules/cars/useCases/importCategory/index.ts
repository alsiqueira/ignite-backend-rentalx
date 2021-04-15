import { ImportCategoryUseCase } from "./ImportCateforyUseCase";
import { ImportCategoryController } from "./ImportCategoryController";

const importCategoryUseCase =  new ImportCategoryUseCase();
const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController }